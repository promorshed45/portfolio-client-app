import nexiosInstance from "@/src/config/nexios.config";
import SkillTable from "./_components/SkillTable";


const BlogPage = async () => {
  const response = await nexiosInstance.get("/skill", {
    next: { tags: ['skills'], revalidate: 3600, }
  })

  const { data }: any = response.data;

  console.log("tabledata", data);

  return (
    <div className="p-6">
      <SkillTable data={data}/>
    </div>
  );
};

export default BlogPage;
