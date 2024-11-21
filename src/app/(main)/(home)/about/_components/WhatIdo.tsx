import { Divider } from "@nextui-org/react";
import { Code, CodeXml, Palette } from "lucide-react";
import React from "react";

const WhatIdo = () => {
  return (
    <div className="p-3 flex flex-col items-center">
      <h1 className="text-3xl text-center pb-5">What I Do!</h1>
      <div className="w-48 border-b-2 border-b-gray-500 mb-6" />
      <div className="-m-4 flex gap-10">
        <div className="p-4 w-full">
          <div className="flex gap-5 border border-gray-300 dark:border-gray-800 px-4 py-6 rounded-lg">
            <div>
              <Palette className="size-14 text-green-500" />
            </div>
            <div className="flex gap-5 space-y-4">
              <div>
                <p className="text-2xl font-medium pb-5"> Graphics Design </p>

                <p className="leading-relaxed text-gray-400">
                  {" "}
                  I craft engaging visual content tailored to your brand
                  identity, from logos and illustrations to promotional
                  materials and social media assets. Every design is
                  thoughtfully conceptualized to resonate with your audience
                  while enhancing your brand's presence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 w-full">
          <div className="flex gap-5 border border-gray-300 dark:border-gray-800 px-4 py-6 rounded-lg">
            <div>
              <CodeXml className="size-14 text-sky-500" />
            </div>
            <div className="flex gap-5 space-y-4">
              <div>
                <p className="text-2xl font-medium pb-5"> Web Development </p>

                <p className="leading-relaxed text-gray-400">
                  {" "}
                  I design and develop responsive, functional websites that not
                  only look great but perform efficiently across all devices.
                  Whether you're looking for a custom website, eCommerce
                  platform, or portfolio site, I use the latest technologies and
                  best practices to ensure a smooth user experience and
                  scalability.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIdo;
