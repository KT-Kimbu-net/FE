"use client";

import { useModalState } from "@/store/modal";
import Image from "next/image";
import quizRank from "@/img/Floating/quizRank.svg";
import ticket from "@/img/Floating/ticket.svg";
import parking from "@/img/Floating/parking.svg";
import stadium from "@/img/Floating/stadium.svg";
import shop from "@/img/Floating/shop.svg";
import chat from "@/img/Floating/chat.svg";
import { useChatState } from "@/store/chatting";
import { getCookie } from "cookies-next";
import Link from "next/link";

export default function Floating() {
  const { setIsShow } = useChatState((state) => ({
    setIsShow: state.setIsShow,
  }));
  const { setModalName } = useModalState((state) => ({
    setModalName: state.setModalName,
  }));

  const listStyle =
    "h-1/5 flex flex-col items-center py-4 cursor-pointer hover:scale-110 duration-300 gap-2";
  const iconStyle = "w-8 h-8";
  const titleStyle = "text-sm";

  const isLoginCheckHandler = () => {
    if (getCookie("token")) setIsShow();
    else setModalName("alertLogin");
  };

  return (
    <section className="fixed top-[10%] right-0 h-fit bg-[rgba(0,0,0,0.7)] text-white px-1 z-20">
      <ul className="flex flex-col justify-betweenitems-center h-full">
        <li className={listStyle}>
          <Image
            src={ticket}
            alt="ticket"
            className={iconStyle}
            width={15}
            height={15}
          />
          <span className={titleStyle}>티켓예매</span>
        </li>
        <li className={listStyle}>
          <Link
            href="https://www.ktwiz.co.kr/wizpark/parking"
            target="_blank"
            className="flex flex-col items-center gap-2"
          >
            <Image
              src={parking}
              alt="parking"
              className={iconStyle}
              width={15}
              height={15}
            />
            <span className={titleStyle}>주차안내</span>
          </Link>
        </li>
        <li
          className={listStyle}
          onClick={() => {
            setModalName("quizStart");
          }}
        >
          <Image
            src={quizRank}
            alt="quiz and Rank"
            className={iconStyle}
            width={15}
            height={15}
          />
          <span className={titleStyle}>데일리퀴즈/랭킹</span>
        </li>
        <li className={listStyle}>
          <Link href="/wizpark/congestion">
            <Image
              src={stadium}
              alt="stadium"
              className={iconStyle}
              width={15}
              height={15}
            />
            <span className={titleStyle}>구장 혼잡도</span>
          </Link>
        </li>
        <li className={listStyle}>
          <Link
            href="https://www.ktwizstore.co.kr/"
            target="_blank"
            className="flex flex-col items-center gap-2"
          >
            <Image
              src={shop}
              alt="kt wiz shop"
              className={iconStyle}
              width={15}
              height={15}
            />
            <span className={titleStyle}>KT Wiz상점</span>
          </Link>
        </li>
        <li className={listStyle} onClick={isLoginCheckHandler}>
          <Image
            src={chat}
            alt="kt wiz chatting"
            className={iconStyle}
            width={15}
            height={15}
          />
          <span className={titleStyle}>KT Wiz응원톡</span>
        </li>
      </ul>
    </section>
  );
}
