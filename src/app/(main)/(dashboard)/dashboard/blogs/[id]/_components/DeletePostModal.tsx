"use client";
import { useDeletePost } from "@/src/hooks/post.hook";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

const DeletePostModal = ({ postId }: { postId: string }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const { mutate: handleDeletePost } = useDeletePost();
  const router = useRouter();

  const handleSubmit = () => {
    handleDeletePost({ postId });
  };



  return (
    <>
      <Button onPress={onOpen} className="bg-gray-900 rounded-md px-2 py-1" onClick={handleSubmit}> <Trash className="size-4 text-red-500"/>  </Button>
      <Modal isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}>
        <ModalContent className="space-y-3">
          <ModalHeader className="flex flex-col items-center gap-1 text-rose-500">
            Are you sure?
          </ModalHeader>
          <ModalBody>
            <p className="text-center">You won't be able to revert this!</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={onClose}>
              Close
            </Button>
            <Button color="danger" onClick={handleSubmit}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeletePostModal;
