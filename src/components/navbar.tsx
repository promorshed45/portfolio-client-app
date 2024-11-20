"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { LogIn, SearchIcon } from "lucide-react";

import { useUser } from "../providers/user.provider";

import NavDropdownMenu from "./ui/NavDropdownMenu";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { Logo } from "@/src/components/icons";
import NavbarItems from "./NavbarItems";
import NavbarRoutes from "./NavbarRoutes";

export const Navbar = () => {
  const { user } = useUser();
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // Perform search action here
  };

  const searchInput = (
    <form className="flex" onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("search")} // Register input for form
        aria-label="Search"
        classNames={{
          inputWrapper:
            "flex items-center justify-center gap-x-1 py-2 px-4 text-default-500 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-md md:inline-flex",
          input: "text-sm rounded-md",
        }}
        labelPlacement="outside"
        placeholder="Search..."
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
      />
      <button className="ml-2" type="submit">
        Search
      </button>
    </form>
  );

  return (
    <NextUINavbar maxWidth="lg" position="sticky"  className="bg-transparent py-1">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
           
            <p className="font-bold text-inherit"> MA Emon </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

        {/* navbar menu */}
          <NavbarContent justify="center">
            <NavbarRoutes/> 
          </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}

      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
        {user?.email ? (
          <NavDropdownMenu />
        ) : (
          <NavbarItem className="flex">
            <Link
              className="flex items-center justify-center gap-x-1 py-2 px-2 text-default-500 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-md md:inline-flex"
              href="/login"
            >
              <LogIn size="16" />
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
        <NavbarRoutes/> 
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
