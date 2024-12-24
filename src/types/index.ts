import { Message, User } from "@prisma/client";

export type TUserWithChat = User & {
  conversations: TConversations[];
};

export type TConversations = {
  id: string;
  messages: Message[];
  users: User[];
};
