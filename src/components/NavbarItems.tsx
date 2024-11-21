"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarItems = ({ icon: Icon, label, href }: any) => {
  const pathname = usePathname();

  const isActive = pathname === href;

 
  return (
    <div className="flex justify-center items-center gap-6">
        <Link
      href={href}
      type="button"
      className={` rounded-md gap-x-2 justify-center text-sm  transition-all  hover:text-fuchsia-500 text-gray-400 bg-purple-300/20 ${
        isActive ? "text-white hover:text-white bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-small" : ""
      }`}
    >
      <div className="flex items-center px-4 gap-x-2 py-2 ">
        <Icon
          size={22}
          className={`${isActive ? " hover:text-green-400": ""}`}
        />
        {label}
      </div>
      <div
        className={`ml-auto opacity-0 border-green-400 px-4 transition-all ${
          isActive ? "opacity-100" : ""
        }`}
      />
    </Link>
    </div>
  );
};

export default NavbarItems;