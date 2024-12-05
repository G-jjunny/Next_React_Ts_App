import Link from "next/link";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { User } from "@prisma/client";

interface NavItemProps {
  mobile?: boolean;
  currentUser?: User | null;
}

const NavItem = ({ mobile, currentUser }: NavItemProps) => {
  return (
    <ul
      className={`text-md justify-center flex w-full items-center ${
        mobile ? "gap-0 flex-col h-full bg-greenAurora " : "gap-4"
      }`}
    >
      {/* Nav 1 */}
      <li
        className={`text-center cursor-pointer w-full ${
          mobile ? "border-b-2 " : "border-b-4"
        }`}
      >
        <Link href={"/admin"} className={mobile ? " block py-4" : ""}>
          Admin
        </Link>
      </li>
      {/* Nav 2 */}
      <li
        className={`text-center cursor-pointer w-full ${
          mobile ? "border-b-2 " : "border-b-4"
        }`}
      >
        <Link href={"/user"} className={mobile ? " block py-4" : ""}>
          User
        </Link>
      </li>
      {/* Nav 3 */}
      {currentUser ? (
        <li
          className={`text-center cursor-pointer w-full ${
            mobile ? "border-b-2" : "border-b-4"
          }`}
        >
          <button
            onClick={() => signOut()}
            className={mobile ? " block py-4" : ""}
          >
            SignOut
          </button>
        </li>
      ) : (
        <li
          className={`text-center cursor-pointer w-full ${
            mobile ? "border-b-2" : "border-b-4"
          }`}
        >
          <button
            onClick={() => signIn()}
            className={mobile ? " block py-4 w-full" : ""}
          >
            SignIn
          </button>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
