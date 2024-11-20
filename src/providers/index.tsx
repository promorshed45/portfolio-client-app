/* eslint-disable import/order */
"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "./user.provider";


export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const queryClient = new QueryClient();

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <NextUIProvider navigate={router.push}>
              <Toaster richColors  />
              <NextThemesProvider {...themeProps}>
                {children}
              </NextThemesProvider>
            </NextUIProvider>
          </UserProvider>
        </QueryClientProvider>
  );
}