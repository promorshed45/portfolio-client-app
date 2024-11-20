import Footer from "@/src/components/Footer";
import { Navbar } from "@/src/components/navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default layout;
