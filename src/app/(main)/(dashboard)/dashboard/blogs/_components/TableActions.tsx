// components/TableActions.js
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { EllipsisVertical, Router } from "lucide-react";
import { useRouter } from "next/navigation";

// Define the TableActions component that takes 'item' as a prop
const TableActions = ({ item }: any) => {
  const router = useRouter()
  // Define the action handler
  const onAction = (action: string) => {
    console.log(`${action} clicked for item:`, item);
    // You can implement more logic here based on the action
    switch (action) {
      case "View":
        // View action logic
        router.push(`/dashboard/blogs/${item._id}`);
        break;
      case "Edit":
        // Edit action logic
        router.push(`/dashboard/blogs/${item._id}`);

        break;
      case "Delete":
        // Delete action logic
        router.push(`/dashboard/blogs/${item._id}`);
        break;
      default:
        break;
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly size="sm" variant="light">
          <EllipsisVertical className="text-default-400" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {/* Call onAction for each item with a different action */}
        <DropdownItem onClick={() => onAction("View")}>View</DropdownItem>
        <DropdownItem href={`/dashboard/blogs/${item._id}`}>Edit</DropdownItem>
        <DropdownItem onClick={() => onAction("Delete")}>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default TableActions;
