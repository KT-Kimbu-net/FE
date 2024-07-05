import ModalContainer from "@/components/ModalContainer";
import "./globals.css";

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
      <body>
        <div id="modalLayout" />
        <div id="modalContent" />
        {children}
        <ModalContainer />
      </body>
    </html>
  );
}
