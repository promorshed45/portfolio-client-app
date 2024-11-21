'use client'


const BlogCard = () => {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {blogs.map((blog: any) => (
                    <div>
                        <div> 
                        <img className="w-full rounded-tl-xl rounded-tr-xl" src={blog.image} alt="games" />
                         </div>
                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                            <p className="text-sm text-white font-semibold tracking-wide"> {blog.category} </p>
                            <p className="text-sm text-white font-semibold tracking-wide"> {blog.date} </p>
                        </div>
                        <div className="bg-white px-3 md:h-40 lg:px-6 py-4 rounded-bl-xl rounded-br-xl">
                            <h1 className="text-lg text-gray-900 font-semibold">{blog.title}</h1>
                            <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">   {blog.content.slice(0, 50)}{blog.content.length > 50 && '...'}
                            </p>
                        </div>
                    </div>


                ))}
            </div>

        </>

    );
}

export default BlogCard;

const blogs = [
    {
      "id": 1,
      "title": "Understanding Python: A Beginner's Guide",
      "date": "2024-11-19",
      "content": "Python is a versatile, easy-to-learn programming language. In this blog post, we'll explore its basics, from variables and data types to functions and loops. Whether you're new to coding or just want to learn a new language, Python is a great choice. It is widely used in web development, data science, machine learning, and automation.",
      "category": "Programming",
      "image": "https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
    },
    {
      "id": 2,
      "title": "JavaScript ES6 Features You Should Know",
      "date": "2024-11-18",
      "content": "JavaScript ES6 introduced several powerful features that make your code cleaner and more efficient. In this post, we’ll cover features like arrow functions, template literals, destructuring assignments, and async/await. Mastering ES6 will help you write more modern and scalable JavaScript code.",
      "category": "Web Development",
      "image": "https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png"
    },
    {
      "id": 3,
      "title": "Exploring the Basics of Machine Learning with Python",
      "date": "2024-11-17",
      "content": "Machine learning is a field of artificial intelligence that allows computers to learn from data and make predictions. In this blog post, we’ll walk through the basics of machine learning in Python using libraries like Scikit-learn and TensorFlow. We’ll look at different types of machine learning, including supervised and unsupervised learning.",
      "category": "Machine Learning",
      "image": "https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png"
    },
    {
      "id": 4,
      "title": "How to Build Your First Web Application with Flask",
      "date": "2024-11-16",
      "content": "Flask is a lightweight web framework in Python that’s perfect for small to medium-sized applications. In this blog, we’ll walk through how to set up your first web application using Flask, create routes, and serve HTML content. You'll also learn how to work with databases and user input.",
      "category": "Web Development",
      "image": "https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png"
    },
    {
      "id": 5,
      "title": "Understanding Git and GitHub: A Complete Guide",
      "date": "2024-11-15",
      "content": "Git is a version control system that helps developers track changes to their codebase, while GitHub is a cloud-based platform that hosts Git repositories. This blog post covers the fundamentals of Git, including how to clone repositories, commit changes, create branches, and merge code. It also explains the power of GitHub for collaboration and open-source development.",
      "category": "Development Tools",
      "image": "https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png"
    },
    {
      "id": 6,
      "title": "The Importance of Data Structures in Computer Science",
      "date": "2024-11-14",
      "content": "Data structures are essential to the efficiency of algorithms. In this post, we explore the most common data structures, such as arrays, linked lists, stacks, queues, trees, and graphs. We will explain how to use these data structures in various scenarios and why understanding them is crucial for every programmer.",
      "category": "Computer Science",
      "image": "https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png"
    }
  ]
  