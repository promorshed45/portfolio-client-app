/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-sort-props */
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Pencil } from "lucide-react";
import ReusableInput from "@/src/components/ui/ReusableInput";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
// import { useUpdateUser } from "@/src/hooks/user/users.hook";

interface FormInputs {
  name: string;
  number: string,
}

export default function EditSkill({ data }: any) {
  // const {mutate: handleUpdateUser} = useUpdateUser()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const methods = useForm<FormInputs>({
    defaultValues: {
      name: data.name,
      number: data.number,
    },
  });

  const { handleSubmit } = methods;


  const onSubmit: SubmitHandler<FormInputs> = (data: any) => {
    const id = data?._id;
    const payload = {
      name: data.title,
      number: data.description,
    };
    console.log(data);
    // handleTitleUpdate({ id, payload })
  };



  return (
    <>
      <Button onPress={onOpen} size="sm" variant="flat" className="text-xl">
        <Pencil className="size-4" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="mt-8">
                <h1 className="text-center font-medium text-xl">
                  Edit User Credential
                </h1>
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="py-2 space-y-4">
                      <ReusableInput
                        label="Title"
                        type="text"
                        name="title"
                        placeholder="Post Title"
                        labelPlacement="outside"
                        size="lg"
                      />
                      

                      
                      <Button className="mt-4" type="submit">
                        Save
                      </Button>
                    </div>
                  </form>
                </FormProvider>
              </ModalBody>
              <ModalFooter />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
