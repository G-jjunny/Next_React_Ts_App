"use client";
import { PRODUCTS_PER_PAGE } from "@/constants";
import { useSearchParams } from "next/navigation";
import React, { PropsWithChildren } from "react";
import qs from "query-string";
import Link from "next/link";

interface PaginationLinkProps {
  page?: number | string;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const PaginationLink = ({
  page,
  active,
  children,
  disabled,
}: PaginationLinkProps) => {
  const params = useSearchParams();
  const limit = PRODUCTS_PER_PAGE;
  const skip = page ? (Number(page) - 1) * limit : 0;
  //   console.log(params?.toString());
  let currentQuery = {};
  if (params) {
    currentQuery = qs.parse(params?.toString());
  }

  const updatedQuery = {
    ...currentQuery,
    page,
    skip,
  };

  return (
    <Link
      className={`p-2 text-2xl
        ${active ? " font-bold text-greenAurora" : " text-gray-500"}
        ${disabled ? " pointer-events-none text-gray-200" : ""}
    `}
      href={{ query: updatedQuery }}
    >
      {children}
    </Link>
  );
};

export default PaginationLink;
