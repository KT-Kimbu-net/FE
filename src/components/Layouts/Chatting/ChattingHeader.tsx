"use client";

import Image from "next/image";
import ddory from "@/img/ddory.svg";
import { useChatState } from "@/store/chatting";
import closeButton from "@/img/Chatting/closeBtn.svg";

export default function ChattingHeader() {
  const { userCount, setIsShow } = useChatState((state) => ({
    userCount: state.userCount,
    setIsShow: state.setIsShow,
  }));

  return (
    <header className="flex justify-between h-[10%] w-full border-b-[1px] border-gray-700 py-5 px-2">
      <section className="flex items-center justify-between w-full">
        <strong className="font-[Pretendard-ExtraBold] text-2xl text-white flex items-center gap-2">
          <Image
            src={ddory}
            alt="ddory"
            width={32}
            height={24}
            className="h-auto"
          />
          KT Wiz 응원톡
        </strong>
        <div className="flex items-center gap-2">
          <span className="font-[Pretendard-Medium] text-main text-sm">
            {userCount}명
          </span>
          <Image
            src={closeButton}
            alt="chat close btn"
            width={24}
            height={24}
            className="w-6 h-6 cursor-pointer duration-300 hover:scale-125"
            onClick={() => {
              setIsShow();
            }}
          />
        </div>
      </section>
    </header>
  );
}
