import { TUserWithChat } from "@/types";
import React from "react";
import User from "./User";

interface ContactsProps {
  users: TUserWithChat;
  currentUser: TUserWithChat;
  setLayout: (layout: boolean) => void;
  setReceiver: (receiver: {
    receiverId: string;
    receiverName: string;
    receiverImage: string;
  }) => void;
}

const Contacts = ({
  users,
  currentUser,
  setLayout,
  setReceiver,
}: ContactsProps) => {
  return (
    <div className=" w-full overflow-auto h-[calc(100vh_-_56px)] border-[1px]">
      <h1 className=" m-4 text-2xl font-semibold">Chat</h1>
      <hr />
      <div className=" flex flex-col"></div>
    </div>
  );
};

export default Contacts;