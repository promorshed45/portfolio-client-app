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
import NextLink from "next/link";
import { useUser } from "../providers/user.provider";
import NavDropdownMenu from "./ui/NavDropdownMenu";
import { ThemeSwitch } from "@/src/components/theme-switch";
import NavbarRoutes from "./NavbarRoutes";
import Image from "next/image";
export const Navbar = () => {
  const { user } = useUser();

  return (
    <NextUINavbar
      maxWidth="lg"
      position="sticky"
      className="bg-transparent py-1"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image width={150} height={150} src="/logo.svg" alt="logo" />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* navbar menu */}
      <NavbarItem className="pl-16">
        <NavbarRoutes />
      </NavbarItem>
     
     
     
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>


        
        {/* for small device */}
        {user?.email ? (
          <NavDropdownMenu />
        ) : (
          ""
        )}
      </NavbarContent>

        {/* for small device */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
        {user?.email ? (
          <NavDropdownMenu />
        ) : (
          ""
        )}
      </NavbarContent>



      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarRoutes />
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
