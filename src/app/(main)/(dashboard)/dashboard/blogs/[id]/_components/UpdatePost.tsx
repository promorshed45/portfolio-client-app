"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import ReusableInput from "@/src/components/ui/ReusableInput";
import PostCard from "./PostCard";
import ReusableTextarea from "@/src/components/ui/ReusableTextarea";
import { useUpdatePost } from "@/src/hooks/post.hook";

interface FormInputs {
  title: string;
  description: string,
  category: string
}

interface UpdatePostProps {
  postData: {
    _id: string,
    title: string,
    description: string,
    category: string
  }; 
}

const UpdatePost = ({ postData }: UpdatePostProps) => {
  const { mutate: handleTitleUpdate } = useUpdatePost();

  const methods = useForm<FormInputs>({
    defaultValues: {
      title: postData.title,
      description: postData.description,
      category: postData.category,
    },
  });

  const { handleSubmit } = methods;
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const id = postData?._id;
    const payload = {
      title: data.title,
      description: data.description,
      category: data.category,
    };
    console.log(data);
    handleTitleUpdate({ id, payload })
  };

  return (
    <div className="mt-6 border border-gray-300 dark:border-gray-900 dark:bg-black/90 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
      <h2 className="text-xl font-semibold"> Blog Information </h2>
        <Button variant="flat" onClick={toggleEdit}>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Title
            </>
          )}
        </Button>
      </div>

      {!isEditing ? (
        <div className="flex justify-center w-full">
          <PostCard postData={postData}/>
        </div>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-2 space-y-4">
              <ReusableInput
                label=""
                type="text"
                name="title"
                placeholder="Post Title"
                labelPlacement="outside"
                size="lg"
              />
              <ReusableInput
                label=""
                type="text"
                name="category"
                placeholder="Post Category"
                labelPlacement="outside"
                size="lg"
              />
              <ReusableTextarea
                label=""
                type="text"
                name="description"
                placeholder="Post Description"
                labelPlacement="outside"
                size="lg"
                rows={4}
              />
              <Button className="mt-4" type="submit">
                Save
              </Button>
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default UpdatePost;
