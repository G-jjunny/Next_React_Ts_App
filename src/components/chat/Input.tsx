"use client";
import axios from "axios";
import React, { FormEvent, useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { RiSendPlaneLine } from "react-icons/ri";

interface InputProps {
  receiverId: string;
  currentUserId: string;
}

const Input = ({ receiverId, currentUserId }: InputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const imageUrl = "";
    if (message || imageUrl) {
      try {
        await axios.post("/api/chat", {
          text: message,
          image: imageUrl,
          receiverId: receiverId,
          senderId: currentUserId,
        });
      } catch (error) {
        console.log(error);
      }
    }
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" relative flex items-center justify-between w-full gap-4 p-2 pl-4 border-[1px] border-gray-300 rounded-md shadow-sm"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className=" w-full text-base outline-none"
        placeholder="메세지를 입력해주세요."
      />
      <div className=" text-2xl text-gray-200 cursor-pointer">
        <IoImageOutline />
      </div>
      <button
        type="submit"
        className=" flex items-center justify-center p-2 text-gray-900 bg-greenAurora rounded-lg cursor-pointer hover:bg-slate-500 disabled:opacity-50"
      >
        <RiSendPlaneLine className=" text-white" />
      </button>
    </form>
  );
};

export default Input;
