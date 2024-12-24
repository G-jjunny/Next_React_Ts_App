"use client";
import { User } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    axios.get(`/api/chat`).then((res) => console.log("res", res));
  }, []);

  return (
    <main>
      <div className=" grid grid-cols-[1fr] md:grid-cols-[300px_1fr]">
        <section className={` md:flex ${layout && "hidden"}`}>
          {/* contact Components */}
          contact
        </section>
        <section className={` md:flex ${!layout && "hidden"}`}>
          chat Conponents
        </section>
      </div>
    </main>
  );
};

export default ChatClients;
