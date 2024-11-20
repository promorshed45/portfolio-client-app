"use client";

import { BookOpen, Radio, BookA, House, UserRound, Workflow, NotebookText, ContactRound } from "lucide-react";
import NavbarItems from "./NavbarItems";

const routes = [
  {
    icon: House,
    label: "Home",
    href: "/",
  },
  {
    icon: UserRound,
    label: "About",
    href: "/about",
  },
  {
    icon: BookOpen,
    label: "Skills",
    href: "/skills",
  },
  {
    icon: NotebookText,
    label: "Blogs",
    href: "/blogs",
  },
  {
    icon: ContactRound,
    label: "Contact",
    href: "/contact",
  },
];

const NavbarRoutes = () => {
  // const pathname = usePathname();

  // const isTeacherPage = pathname?.includes("/teacher");

  // const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex gap-8 justify-center">
      {routes.map((route) => (
        <NavbarItems
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default NavbarRoutes;