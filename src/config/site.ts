export type SiteConfig = typeof siteConfig;
import { BookOpen, House, UserRound, Workflow, NotebookText, ContactRound } from "lucide-react";

export const siteConfig = {
  name: "Portfolio",
  description:
    "Hi, It's Morshed Alam Emon Portfolio Web",
  navItems: [
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
      label: "Resume",
      href: "/resume",
    },
    {
      icon: NotebookText,
      label: "Blogs",
      href: "/blog",
    },
    {
      icon: ContactRound,
      label: "Contact",
      href: "/contact",
    },
  ],

};

