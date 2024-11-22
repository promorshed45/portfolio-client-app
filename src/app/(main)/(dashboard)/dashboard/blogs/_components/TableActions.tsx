// components/TableActions.js
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { EllipsisVertical, Pen, Router, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDeletePost } from "@/src/hooks/post.hook";
import Link from "next/link";

// Define the TableActions component that takes 'item' as a prop
const TableActions = ({ item }: any) => {
  const router = useRouter();
  const { mutate: handleDeletePost } = useDeletePost();

  const handleSubmit = (id: string) => {
    console.log(id);
    handleDeletePost({ postId: id });
  };

  return (
    <>
      <div className="flex gap-3 items-center">
        {/* Call onAction for each item with a different action */}
        <Link href={`/dashboard/blogs/${item._id}`}>
          <button className="bg-gray-900 rounded-md px-2 py-1"> <Pen className="size-4 text-green-500"/> </button>
        </Link>
        <button className="bg-gray-900 rounded-md px-2 py-1" onClick={() => handleSubmit(item._id)}> <Trash className="size-4 text-red-500"/>  </button>
      </div>
    </>
  );
};

export default TableActions;
