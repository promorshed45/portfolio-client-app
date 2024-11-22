"use client";

import { Avatar } from "@nextui-org/avatar";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Verified } from "lucide-react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import ImageUpload from "@/src/components/ui/ImageUpload";
import ReusableSelect from "@/src/components/ui/ReusableSelect";
import { useUser } from "@/src/providers/user.provider";
import QuillEditor from "./QuillEditor";
import ReusableInput from "@/src/components/ui/ReusableInput";
import { useAddNewPost } from "@/src/hooks/post.hook";

const categoriesList = [
  "Business Travel",
  "Exploration",
  "Travel Tips",
  "Cultural Experiences",
  "Destination Guides",
  "Food And Drink",
  "Adventure Activities",
];

const CreatePost = () => {
  const { user: userInfo } = useUser();
  const [editorContent, setEditorContent] = useState<string>("");
  const methods = useForm();
  const { mutate: handleAddPost } = useAddNewPost();
  const { handleSubmit, reset } = methods;
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    const postData = {
      ...data,
      user: userInfo?._id || null,
      description: editorContent || "",
      images: Array.isArray(data.images) ? data.images : [String(data.images)],
    };

    formData.append("data", JSON.stringify(postData));
    imageFiles.forEach((image) => formData.append("postImages", image));
    console.log('formData', formData);
    handleAddPost(formData); 
    reset();
  };

  const formattedCategoriesList = categoriesList.map((category) => ({
    key: category,
    label: category,
  }));

  return (
    <div className="max-w-auto">
      
            
   

          <FormProvider {...methods}>
            <div className="flex justify-center flex-col mx-auto shadow-sm py-10">
              <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <ReusableInput type="text"  label="Title" name="title" />
                <QuillEditor setDiscription={setEditorContent} />
                <ImageUpload
                  label="Upload Post Images"
                  name="images"
                  setImageFiles={setImageFiles} 
                />
                <ReusableSelect
                  label="Category"
                  name="category"
                  options={[
                    { key: "Programming", label: "Programming"},
                    { key: "Design", label: "Design"},
                    { key: "Coding", label: "Coding"},
                    { key: "Tech News", label: "Tech News"},
                    { key: "Career Guidance", label: "Career Guidance"},
                  ]}
                  size="lg"
                  labelPlacement="outside"
                  />
                

                <div className="flex justify-center">
                    <Button type="submit">Add Post</Button>
                </div>
              </form>
            </div>
          </FormProvider> 
    </div>
  );
};

export default CreatePost;
