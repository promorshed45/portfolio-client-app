import { Button } from "@nextui-org/button";
import React from "react";

const PostCard = ({postData}: any) => {

    const {title, images, description, category, date } = postData || "";
  return (
    <div className="relative flex gap-10 flex-col w-5/6 mt px-10 py-6 space-y-4 sm:p-10  dark:text-gray-400 mt-6">  
    <div className="flex gap-10 w-full space-x-2 sm:space-x-4">
          <img
            className="flex-shrink-0 object-cover size-32 dark:border- rounded outline-none sm:size-48 dark:bg-gray-500"
            src={images}
            alt="Polaroid camera"
          />
          <div className="flex flex-col justify-between w-full pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                  {title}
                </h3>
                <p className="text-sm dark:text-gray-600"> {date} </p>
                <p className="text-sm dark:text-gray-600"> {description} </p>
                <button className="rounded-md px-3 py-2 text-white bg-slate-600" disabled> {category}</button>

              </div>
             
            </div>
             
             
          </div>
        </div>
  </div>
  );
};

export default PostCard;
