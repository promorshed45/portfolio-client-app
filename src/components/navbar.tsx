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
import { useForm } from "react-hook-form";
import { LogIn } from "lucide-react";
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
        <NavbarItem className="hidden sm:flex gap-2 pl-8">
          <ThemeSwitch />
        </NavbarItem>
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
          <NavbarRoutes />
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
