import "../app/globals.css";
import React from "react";
import MenuItem from "./common/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import Link from "next/link";
import DarkModeSwitch from "./common/DarkModeSwitch";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-1">
      <SignedIn>
      <UserButton />
    </SignedIn>
    <SignedOut>
      {" "}
      <MenuItem
        title="Sign-in"
        address="/sign-in"
        Icon={IoPersonCircleOutline}
      />
    </SignedOut>
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-1 items-center">
      <DarkModeSwitch/>
      <Link href={"/"} className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg text-amber-50">
          IMDB
        </span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
      </div>
    </div>
  );
};

export default Header;
