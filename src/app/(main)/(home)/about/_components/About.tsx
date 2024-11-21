import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="relative p-8 sm:flex sm:space-x-6 bg-white/50 dark:bg-gray-950 dark:text-gray-800">
      <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-80 sm:w-72 sm:mb-0">
        <Image
          width={400}
          height={300}
          alt="developer Photo"
          src="https://img.freepik.com/premium-photo/program-designer-developer-ai-generative_199064-2134.jpg"
          className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div>
          <h2 className="text-2xl font-semibold pb-3 dark:text-gray-400"> Who am i? </h2>
          <span className="text-sm dark:text-gray-500">
            I am a MERN Stack Developer and Graphic Designer. I specialize in
            web development and creative design solutions. Using MongoDB,
            ReactJs, NextJs, ExpressJs and NodeJs, I build user-friendly web
            applications that combine design and functionality. I also excel in
            graphic design, enhancing brand identity and uniqueness. My goal is
            to create creative and effective digital solutions by merging
            technical skills with artistic vision.{" "}
          </span>
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold dark:text-gray-400"> Personal Info </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 py-5 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="flex justify-center items-center gap-4 bg-gray-800 rounded-md px-3 py-2">
                <Phone className="text-green-500 size-5" />
              </div>
              <div>
                <span className="text-sm text-gray-700">Phone</span>
                <p className="dark:text-gray-500"> +88 01851363745 </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex justify-center items-center gap-2 bg-gray-800 rounded-md px-3 py-2">
                <MapPin className="text-rose-500 size-5" />
              </div>
              <div>
                <span className="text-sm text-gray-700">Location</span>
                <p className="dark:text-gray-500"> Chattagram, Bangladesh. </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex justify-center items-center gap-2 bg-gray-800 rounded-md px-3 py-2">
                <Mail className="text-orange-500 size-5" />
              </div>
              <div>
                <span className="text-sm text-gray-700">Email</span>
                <p className="dark:text-gray-500"> ctgmorshed45@gmail.com </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex justify-center items-center gap-2 bg-gray-800 rounded-md px-3 py-2">
                <Calendar className="text-yellow-500 size-5" />
              </div>
              <div>
                <span className="text-sm text-gray-700">Birthday</span>
                <p className="dark:text-gray-500">August 10, 1992</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
