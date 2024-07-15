import ModalContainer from "@/components/Container/ModalContainer";
import Header from "@/components/Header/Header";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Footer from "@/components/Footer/Footer";
const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });
import Floating from "@/components/Floating/Floating";
import Chatting from "@/components/Chatting/Chatting";

export const metadata = {
  title: "WINNING KT : WE ARE GREAT MAGIC",
  description: "한국 야구의 10번째 심장 kt wiz 야구단 공식 홈페이지입니다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSansKr.className} min-h-svh flex flex-col`}>
        <div id="modalLayout" />
        <div id="modalContent" />
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        {/* <ModalContainer /> */}
        <Floating />
        <Chatting />
        <Footer />
      </body>
    </html>
  );
}
