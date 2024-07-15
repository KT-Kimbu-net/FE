"use client";

import { IoTicket, IoChatbubbleSharp } from "react-icons/io5";
import { MdLocalParking } from "react-icons/md";
import { TbBuildingStadium } from "react-icons/tb";
import { SiShopee } from "react-icons/si";
import { MdOutlineQuiz } from "react-icons/md";
import { useModalState } from "@/store/modal";
import { MdQuiz } from "react-icons/md";
import Image from "next/image";
import quizRank from "@/img/Floating/quizRank.svg";
import { useChatState } from "@/store/chatting";
import Tooltip from "../Layouts/Tooltip";

export default function Floating() {
  const { setIsShow } = useChatState();

  const listStyle =
    "h-1/5 flex flex-col items-center py-4 cursor-pointer hover:scale-110 duration-300 gap-2";
  const iconStyle = "w-8 h-8";

  const { setModalName } = useModalState();

  const titleStyle = "text-sm";

  return (
    <section className="fixed top-[10%] right-0 h-fit bg-[rgba(0,0,0,0.7)] text-white px-1">
      <ul className="flex flex-col justify-betweenitems-center h-full">
        <li className={listStyle}>
          <IoTicket className={iconStyle} />
          <span className={titleStyle}>티켓예매</span>
        </li>
        <li className={listStyle}>
          <MdLocalParking className={iconStyle} />
          <span className={titleStyle}>주차안내</span>
        </li>
        <li className={listStyle}>
          <Image
            src={quizRank}
            alt="quiz and Rank"
            onClick={() => {
              setModalName("quizStart");
            }}
            className={iconStyle}
          />
          <span className={titleStyle}>데일리퀴즈/랭킹</span>
        </li>
        <li className={listStyle}>
          <TbBuildingStadium className={iconStyle} />
          <span className={titleStyle}>구장 혼잡도</span>
        </li>
        <li className={listStyle}>
          <SiShopee className={iconStyle} />
          <span className={titleStyle}>KT Wiz상점</span>
        </li>
        <li
          className={listStyle}
          onClick={() => {
            setIsShow();
          }}
        >
          <IoChatbubbleSharp className={iconStyle} />
          <span className={titleStyle}>KT Wiz응원톡</span>
        </li>
      </ul>
    </section>
  );
}
