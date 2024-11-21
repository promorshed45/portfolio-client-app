"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItems = ({ icon: Icon, label, href }: any) => {
  const pathname = usePathname();

  const isActive = pathname === href;

 
  return (
    <Link
      href={href}
      type="button"
      className={`flex items-center gap-x-2  text-sm font-medium pl-6 transition-all  hover:text-green-400 hover:bg-slate-300/20 ${
        isActive ? "text-green-400 bg-green-200/15" : ""
      }`}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={`hover:text-green-600 ${isActive ? "text-green-400 hover:text-green-400" : ""}`}
        />
        {label}
      </div>
      <div
        className={`ml-auto opacity-0 border-2 border-green-400 h-full transition-all ${
          isActive ? "opacity-100" : ""
        }`}
      />
    </Link>
  );
};

export default SidebarItems;
