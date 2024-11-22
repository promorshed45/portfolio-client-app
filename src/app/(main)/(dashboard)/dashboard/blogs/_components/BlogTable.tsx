/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Image,
} from "@nextui-org/react";
import { PenIcon, X } from "lucide-react";

import { useDeletePost } from "@/src/hooks/post.hook";
import UpdatePost from "../[id]/_components/UpdatePost";
import Link from "next/link";




export default function BlogTable({data}: any) {
  console.log('object', data);
  const {mutate: handleDeletePost} = useDeletePost()

  const handleSubmit = (id: string) => {
    // console.log(id);
    handleDeletePost({postId: id})
  };


  return (
    <Table aria-label="static collection table">
      <TableHeader>
        <TableColumn>Image</TableColumn>
        <TableColumn>Title</TableColumn>
        <TableColumn>Category</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody>
        {data?.map((item: any) => {
          return (
            <TableRow key={item?._id}>
              <TableCell>
                <Image alt={item.title} className="size-10" src={item?.images[0]} />
              </TableCell>
              <TableCell>{item?.title}</TableCell>
              <TableCell>{item?.category}</TableCell>
          
             
              <TableCell className="flex gap-2">
                {/* edit user */}
                <Link
                href={`/dashboard/blogs/${item?._id}`}  >
                <Button
                  className="text-xl text-green-500"
                  size="sm"
                  variant="flat"
                               
                  >
                  <PenIcon className="size-5" /> 
                </Button>
                </Link>
                {/* delete user */}
                <Button
                  className="text-xl text-red-500"
                  size="sm"
                  variant="flat"
                  onClick={() => handleSubmit(item?._id)}
                >
                  <X className="size-5" /> 
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
