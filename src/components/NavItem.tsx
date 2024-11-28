import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const NavItem = ({ mobile }: { mobile?: boolean }) => {
  const { data: session, status } = useSession();
  console.log({ session }, status);
  return (
    <ul
      className={`text-md justify-center flex w-full items-center ${
        mobile ? "gap-0 flex-col h-full bg-orange-400 " : "gap-4"
      }`}
    >
      <li
        className={`text-center cursor-pointer w-full ${
          mobile ? "border-b-2 py-3" : "border-b-4 py-2"
        }`}
      >
        <Link href={"/admin"}>Admin</Link>
      </li>
      <li
        className={`py-2 text-center cursor-pointer w-full ${
          mobile ? "border-b-2" : "border-b-4"
        }`}
      >
        <Link href={"/user"}>User</Link>
      </li>
      {session?.user ? (
        <li
          className={`py-2 text-center cursor-pointer w-full ${
            mobile ? "border-b-2" : "border-b-4"
          }`}
        >
          <button onClick={() => signOut()}>SignOut</button>
        </li>
      ) : (
        <li
          className={`py-2 text-center cursor-pointer w-full ${
            mobile ? "border-b-2" : "border-b-4"
          }`}
        >
          <button onClick={() => signIn()}>SignIn</button>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
