import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import ChatClients from "./ChatClients";

const ChatPage = async () => {
  const currentUser = await getCurrentUser();
  return <ChatClients currentUser={currentUser} />;
};

export default ChatPage;
