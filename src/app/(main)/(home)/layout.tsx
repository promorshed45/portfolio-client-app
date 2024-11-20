import Footer from "@/src/components/Footer";
import { Navbar } from "@/src/components/navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Navbar/>
      <main className="container mx-auto max-w-7xl py-10 md:px-6 flex-grow">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default layout;
