import { Button } from '@nextui-org/button';
import Link from 'next/link';
import React from 'react';
import SideBarRoutes from './SideBarRoutes';
import Image from 'next/image';

const SideBar = () => {
    return (
        <div className="h-full border-r-2 border-r-purple-400/30 flex flex-col overflow-y-auto shadow-sm">
        <div className="p-6">
          <Link href="/">
          <Image width={150} height={150} src="/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <SideBarRoutes />
        </div>
      </div>
    );
};

export default SideBar;