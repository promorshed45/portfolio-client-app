import Image from "next/image";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative overflow-hidden ">
        <div className="absolute inset-0 z-0" />

        <Image
          alt="background"
          className="absolute top-0 left-0 z-0 w-full h-full object-cover opacity-10"
          height={400}
          src="/assets/images/abstract design.svg"
          width={400}
        />
        <main>
          {children}
        </main>
      </div>
  );
};

export default layout;
