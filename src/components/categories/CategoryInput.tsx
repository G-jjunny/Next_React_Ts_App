"use client";

import React from "react";
import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  path: string;
  onClick: (value: string) => void;
}

const CategoryInput = ({
  icon: Icon,
  label,
  selected,
  onClick,
  path,
}: CategoryInputProps) => {
  return (
    <div
      onClick={() => onClick(path)}
      className={`rounded-xl border-2 p-2 md:p-4 flex md:flex-col gap-3 md:gap-0 hover:border-greenAurora transition cursor-pointer ${
        selected
          ? "border-greenAurora text-greenAurora"
          : "border-neutral-200  text-neutral-700"
      }`}
    >
      <Icon
        size={40}
        // className={selected ? " text-greenAurora" : "text-neutral-700"}
      />
      <div className=" font-semibold font-noto">{label}</div>
    </div>
  );
};

export default CategoryInput;
