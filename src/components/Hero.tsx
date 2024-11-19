import { Button } from "@nextui-org/button";
import { ArrowRight, DownloadIcon, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-full">
    <div className="max-w-screen-xl mx-auto px-4  gap-12 text-white md:px-8 flex justify-center items-center">
      <div className="flex-none space-y-7 max-w-xl z-20 text-center"> 
        <div>
          <Image
            height={240}
            width={240}
            src="/assets/images/emon.png"
            alt="NextUI Album Cover"
            className="m-5 rounded-full mx-auto"  // `mx-auto` for centering the image
          />
        </div>
  
        <div>
          <p className="max-w-[42rem] pb-3 leading-normal text-muted-foreground sm:text-xl sm:leading-10 mx-auto">
            Mohammed Morshed Alam Emon
          </p>
          <Button className="flex font-normal text-md items-center text-gray-400 py-3 px-6 bg-gray-800 rounded-md mx-auto">
            FullStack Developer (Mern) | Graphics Designer
          </Button>
        </div>
  
        <div className="flex gap-3 justify-center">  {/* `justify-center` for centering icons */}
          <div className="bg-gray-800 rounded-md px-3 py-2">
            <Facebook className="text-blue-500" />
          </div>
          <div className="bg-gray-800 rounded-md px-3 py-2">
            <Twitter className="text-sky-400" />
          </div>
          <div className="bg-gray-800 rounded-md px-3 py-2">
            <Instagram className="text-rose-600" />
          </div>
          <div className="bg-gray-800 rounded-md px-3 py-2">
            <Linkedin className="text-blue-700" />
          </div>
        </div>
  
        <div>
          <Link
            className="flex items-center justify-center gap-x-1 py-3 px-4 font-medium transform-gpu bg-rose-500/10 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex text-rose-700 mx-auto"
            href="/posts"
          >
            <DownloadIcon size="16" />
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Hero;
