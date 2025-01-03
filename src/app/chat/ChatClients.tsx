"use client";
import Chat from "@/components/chat/Chat";
import Contacts from "@/components/chat/Contacts";
import { TUserWithChat } from "@/types";
import { User } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

interface CahtClientProps {
  currentUser?: User | null;
}

const ChatClients = ({ currentUser }: CahtClientProps) => {
  const [receiver, setReceiver] = useState({
    receiverId: "",
    receiverName: "",
    receiverImage: "",
  });

  const [layout, setLayout] = useState(false);
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const {
    data: users,
    error,
    isLoading,
  } = useSWR(`/api/chat`, fetcher, {
    refreshInterval: 1000,
  });
  const currentUserWithMessage = users?.find(
    (user: TUserWithChat) => user.email === currentUser?.email
  );

  if (error) return <p>ERROR!</p>;
  if (isLoading) return <p>Loading...</p>;

  // useEffect(() => {
  //   axios.get(`/api/chat`).then((res) => console.log("res", res));
  // }, []);

  return (
    <main>
      <div className=" grid grid-cols-[1fr] md:grid-cols-[300px_1fr]">
        <section className={` md:flex ${layout && "hidden"}`}>
          {/* contact Components */}
          <Contacts
            users={users}
            currentUser={currentUserWithMessage}
            setLayout={setLayout}
            setReceiver={setReceiver}
          />
        </section>
        <section className={` md:flex ${!layout && "hidden"}`}>
          {/* chat Conponents */}
          <Chat
            currentUser={currentUserWithMessage}
            receiver={receiver}
            setLayout={setLayout}
          />
        </section>
      </div>
    </main>
  );
};

export default ChatClients;
