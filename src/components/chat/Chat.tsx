import { TUserWithChat } from "@/types";
import React, { useEffect, useRef } from "react";
import Input from "./Input";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

interface ChatProps {
  currentUser: TUserWithChat;
  receiver: {
    receiverId: string;
    receiverName: string;
    receiverImage: string;
  };
  setLayout: (layout: boolean) => void;
}

const Chat = ({ currentUser, receiver, setLayout }: ChatProps) => {
  // scroll을 위한 hook
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToBottom();
  });

  const conversation = currentUser?.conversations.find((conversation) =>
    conversation.users.find((user) => user.id === receiver.receiverId)
  );

  if (!receiver.receiverName || !currentUser) {
    return <div className=" w-full h-full">Chat</div>;
  }
  return (
    <div className="w-full">
      <div>
        {/* chat header */}
        <ChatHeader
          setLayout={setLayout}
          receiverName={receiver.receiverName}
          receiverImage={receiver.receiverImage}
          lastMessageTime={
            conversation?.messages
              .filter((message) => message.receiverId === currentUser.id)
              .slice(-1)[0]?.createdAt
          }
        />
      </div>
      <div className=" flex flex-col gap-8 p-4 overflow-auto h-[calc(100vh_-_60px_-_70px_-_80px)]">
        {/* chat message */}
        {conversation &&
          conversation.messages.map((message) => {
            return (
              <Messages
                key={message.id}
                isSender={message.senderId === currentUser.id}
                messageText={message.text}
                messageImage={message.image}
                receiverName={receiver.receiverName}
                receiverImage={receiver.receiverImage}
                senderImage={currentUser?.image}
                time={message.createdAt}
              />
            );
          })}
        <div ref={messagesEndRef} />
      </div>
      <div>
        <Input
          receiverId={receiver?.receiverId}
          currentUserId={currentUser?.id}
        />
      </div>
    </div>
  );
};

export default Chat;
