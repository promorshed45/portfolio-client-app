"use client";

import { BookOpen, Radio, BookA, House, UserRound, Workflow, NotebookText, ContactRound } from "lucide-react";
import NavbarItems from "./NavbarItems";
import { siteConfig } from "../config/site";

const NavbarRoutes = () => {

  return (
    <div className="flex gap-8 justify-center">
      {siteConfig.navItems.map((route: any) => (
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