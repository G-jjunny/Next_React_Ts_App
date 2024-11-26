import { DefaultSelection } from "@prisma/client/runtime/library";

// next auth를 위한 type 선언 파일
declare module "next-auth" {
  interface Session {
    user?: {
      id?: string;
      role?: string;
    } & DefaultSelection["user"];
  }
}
