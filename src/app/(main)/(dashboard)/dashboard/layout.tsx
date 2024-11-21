'use client'
import { ReactNode } from "react";
import { Navbar } from "./_components/Navbar";
import SideBar from "./_components/SideBar";


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] lg:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar/>
      </div>
      <div className="hidden lg:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <SideBar />
      </div>
      <main className="lg:pl-60 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default layout;

