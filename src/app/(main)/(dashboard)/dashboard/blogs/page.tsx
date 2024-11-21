import nexiosInstance from "@/src/config/nexios.config";
import { getCurrentUser } from "@/src/services/AuthService";
import BlogTable from "./_components/BlogTable";


const BlogPage = async () => {
  const user = await getCurrentUser();
  const response = await nexiosInstance.get("/post", {
    next: { tags: ['posts'], revalidate: 3600, }
  })

  const { data }: any = response.data;

//   console.log("tabledata", data);

  return (
    <div className="p-6">
      <BlogTable data={data}/>
    </div>
  );
};

export default BlogPage;
