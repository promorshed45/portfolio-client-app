"use client";

import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Avatar } from "@nextui-org/avatar";
import { useDisclosure } from "@nextui-org/modal";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Verified } from "lucide-react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import ReusableInput from "@/src/components/ui/ReusableInput";
import ImageUpload from "@/src/components/ui/ImageUpload";
import ReusableSelect from "@/src/components/ui/ReusableSelect";
import { useUser } from "@/src/providers/user.provider";
import { useAddNewPost } from "@/src/hooks/post.hook";

const CreatePost = () => {
  const { user: userInfo } = useUser();
  const [editorContent, setEditorContent] = useState<string>("");
  const methods = useForm();
  const { mutate: handleAddPost } = useAddNewPost();
  const { handleSubmit, reset } = methods;
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };


  return (
    <div className="max-w-auto">
      
          <FormProvider {...methods}>
            <div className="flex justify-center flex-col mx-auto shadow-sm py-10">
              <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <ReusableInput type="text" label="Name" name="name" />
                <ReusableInput type="number" label="Number" name="number" />
                
                <div className="flex justify-center">
                  <ModalFooter>
                    
                    <Button type="submit">Add Post</Button>
                  </ModalFooter>
                </div>
              </form>
            </div>
          </FormProvider>
    </div>
  );
};

export default CreatePost;