import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface CategoriesBoxProps {
  label: string;
  path: string;
  icon: IconType;
  selected: boolean;
}

const CategoriesBox = ({
  label,
  path,
  icon: Icon,
  selected,
}: CategoriesBoxProps) => {
  return (
    <Link
      href={`/?category=${path}`}
      className={` flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected
          ? " border-b-neutral-800 text-neutral-800"
          : " border-b-transparent text-neutral-500"
      }`}
    >
      <Icon size={20} />
      <div>{label}</div>
    </Link>
  );
};

export default CategoriesBox;
