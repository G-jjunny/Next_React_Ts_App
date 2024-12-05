"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { User } from "@prisma/client";
import { FaPlus, FaMinus } from "react-icons/fa";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className=" fixed top-0 min-h-[60px] z-10 w-full text-white bg-[#00b493] z-50">
      <div className=" flex h-[60px] items-center justify-between mx-5 sm:mx-10 lg:mx-20">
        <div className="flex items-center text-2xl h-14">
          <Link href="/">Logo</Link>
        </div>
        <div className=" flex text-2xl sm:hidden items-center">
          {menu === false ? (
            <button onClick={handleMenu} className="items-center ">
              <FaPlus size={25} />
            </button>
          ) : (
            <button onClick={handleMenu}>
              <FaMinus size={25} />
            </button>
          )}
        </div>
        <div className="hidden sm:block">
          <NavItem currentUser={currentUser} />
        </div>
      </div>
      <div className="block sm:hidden">
        {menu === false ? null : <NavItem mobile currentUser={currentUser} />}
      </div>
    </nav>
  );
};

export default Navbar;
