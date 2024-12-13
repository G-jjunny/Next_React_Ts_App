import Link from "next/link";
import React from "react";

interface FloatingButtonProps {
  children: React.ReactNode;
  href: string;
}

const FloatingButton = ({ children, href }: FloatingButtonProps) => {
  return (
    <Link
      className=" fixed flex bottom-5 right-5 bg-greenAurora w-14 text-white items-center justify-center border-0 border-transparent rounded-full shadow-xl cursor-pointer aspect-square hover:bg-slate-400 transition-colors"
      href={href}
    >
      {children}
    </Link>
  );
};

export default FloatingButton;
