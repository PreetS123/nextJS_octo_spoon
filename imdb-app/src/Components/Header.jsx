import React from "react";
import MenuItem from "./common/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-1">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href={"/"} className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg text-amber-50">
          IMDB
        </span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
    </div>
  );
};

export default Header;
