import ModalContainer from "@/components/Container/ModalContainer";
import Header from "@/components/Header/Header";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Floating from "@/components/Layouts/Floating/Floating";
import Chatting from "@/components/Layouts/Chatting/Chatting";
import { Metadata } from "next";
import SocketConnectHandler from "@/components/Socket/SocketConnectHandler";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

export function generateMetadata(): Metadata {
  return {
    title: "WINNING KT : WE ARE GREAT MAGIC",
    description: "한국 야구의 10번째 심장 kt wiz 야구단 공식 홈페이지입니다",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${notoSansKr.className} min-h-svh flex flex-col`}>
        <div id="modalLayout" />
        <div id="modalContent" />
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <ModalContainer />
        <Floating />
        <Chatting />
        <SocketConnectHandler />
        <Footer />
      </body>
    </html>
  );
}
