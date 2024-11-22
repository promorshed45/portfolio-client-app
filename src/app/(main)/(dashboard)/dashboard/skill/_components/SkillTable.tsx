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
import Link from "next/link";
import EditSkill from "./EditSkill";




export default function SkillTable({id, data}:{id:string,data: any}) {
  console.log('object', data);
  const {mutate: handleDeletePost} = useDeletePost()

  const handleSubmit = (id: string) => {
    // console.log(id);
    handleDeletePost({postId: id})
  };


  return (
    <Table aria-label="static collection table">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Percent</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody>
        {data?.map((item: any) => {
          return (
            <TableRow key={item?._id}> 
              <TableCell>{item?.name}</TableCell>
              <TableCell>{item?.number}</TableCell>
          
             
              <TableCell className="flex gap-2">
                {/* edit user */}
                <EditSkill id={item._id} item={item}/>
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
