import Footer from "@/src/components/Footer";
import { Navbar } from "@/src/components/navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="light:bg-[#f9f6ef] dark:bg-[#010313]">
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default layout;
