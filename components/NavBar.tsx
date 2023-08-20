import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function NavBar() {
  return (
    <div className="flex items-center p-3 px-8 shadow-sm border-b-[1px] justify-between ">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <div className="hidden md:flex gap-5">
        <h2 className="hover:bg-blue-500 p-2 rounded-full hover:text-white px-3">
          Home
        </h2>
        <h2 className="hover:bg-blue-500 p-2 rounded-full hover:text-white px-3">
          History
        </h2>
        <h2 className="hover:bg-blue-500 p-2 rounded-full hover:text-white px-3">
          Contact Us
        </h2>
      </div>
      <UserButton />
    </div>
  );
}

export default NavBar;
