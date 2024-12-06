import type { Metadata } from "next";
// import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import "./globals.css";
import getCurrentUser from "./actions/getCurrentUser";
import Script from "next/script";
// import { Noto_Sans_KR, Poppins } from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
// const noto = Noto_Sans_KR({
//   subsets: ["latin"], // 또는 preload: false
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });
// const poppin = Poppins({
//   subsets: ["latin"], // 또는 preload: false
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  const KakaoMapApiKey = process.env.KAKAO_MAP_JS_KEY;
  return (
    <html lang="en">
      <body
        className=" pt-[60px]"
        // className={`${noto.className} ${poppin.className}`}
        // className={`
        //   ${geistSans.variable}
        //   ${geistMono.variable}
        //   antialiased`}
      >
        <Navbar currentUser={currentUser} />
        {children}
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=67d231925f9cdc49c486f87e2ab587b9&libraries=services,clusterer&autoload=false`}
        />
      </body>
    </html>
  );
}
