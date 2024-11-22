"use client";

import { LayoutDashboard, BookOpen, Radio, BookA, NotebookPen } from "lucide-react";
import SibeBarItems from "./SibeBarItems";

const routes = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: BookOpen,
    label: "Blogs",
    href: "/dashboard/blogs",
  },
  {
    icon: NotebookPen,
    label: "Add Post",
    href: "/dashboard/create-post",
  }, 
];

const SideBarRoutes = () => {
  // const pathname = usePathname();

  // const isTeacherPage = pathname?.includes("/teacher");

  // const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SibeBarItems
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SideBarRoutes;