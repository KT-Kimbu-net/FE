import Header from "@/components/header/Header";
import ModalContainer from "@/components/ModalContainer";

import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Footer from "@/components/footer/Footer";
const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

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
      <body className={notoSansKr.className}>
        <div id="modalLayout" />
        <div id="modalContent" />
        <Header />
        {children}
        <ModalContainer />
        <Footer />
      </body>
    </html>
  );
}
