'use client';

const BlogCard = ({ data }: any) => {

  if (!data || data.length === 0) {
    return (
      <div className="text-center text-gray-500">
        <p>No blogs available.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {data.map((blog: any) => (
          <div key={blog.id}> 
            <div>
              <img className="w-full rounded-tl-xl rounded-tr-xl" src={blog.images[0]} alt="blog image" />
            </div>
            <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
              <p className="text-sm text-white font-semibold tracking-wide">{blog.category}</p>
              <p className="text-sm text-white font-semibold tracking-wide">{blog.date}</p>
            </div>
            <div className="bg-white px-3 md:h-40 lg:px-6 py-4 rounded-bl-xl rounded-br-xl">
              <h1 className="text-lg text-gray-900 font-semibold">{blog.title}</h1>
              <p className="text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                {blog.content.slice(0, 50)}{blog.content.length > 50 && '...'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogCard;



  