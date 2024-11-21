"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="mt-10 md:py-10 dark:text-gray-200">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6 space-y-5 mt-10">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <MapPin className="size-5 sm:mr-8 text-fuchsia-400"/>
              <p className="text-gray-400">
              <span>Aysha-ali Mansion, Pahartali, </span> <br />
              <span>Roazan, Chattagram, Bangladesh </span>
              </p>
            </p>
            <p className="flex items-center">
              <Phone className="size-5 sm:mr-8 text-green-500"/>
              <span className="text-gray-400"> +88 01851363745 </span>
            </p>
            <p className="flex items-center">
              <Mail className="size-5 sm:mr-8 text-rose-500"/>
              <span className="text-gray-400"> ctgmorshed45@gmail.com</span>
            </p>
          </div>
        </div>
        <form className="flex flex-col py-6 space-y-6 md:py-0 md:pl-10">
          <label className="block space-y-2" htmlFor="full-name">
            <span className="mb-1">Full Name</span>
            <Input
              aria-label="Full Name"
              id="full-name"
              placeholder="Full Name"
            />
          </label>
          <label className="block space-y-2" htmlFor="email">
            <span className="mb-1">Email Address</span>
            <Input
              aria-label="Email Address"
              id="email"
              placeholder="Email"
              type="email"
            />
          </label>
          <label className="block space-y-2" htmlFor="message">
            <span className="mb-1">Message</span>
            <Textarea
              aria-label="Message"
              id="message"
              placeholder="Enter Message"
              rows={3}
            />
          </label>
          <Button
            className="self-center px-8 py-3 text-lg rounded dark:bg-violet-600 dark:text-gray-50 hover:bg-violet-700"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
