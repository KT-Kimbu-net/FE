"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import report from "@/img/Chatting/report.svg";
import { TMessageType } from "@/types/chatting";
import { useUserState } from "@/store/user";
import { useModalState } from "@/store/modal";
import { useReportMsgState } from "@/store/chatting";

export default function Message(props: TMessageType) {
  const [isShow, setIsShow] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const { userData } = useUserState((state) => ({
    userData: state.userData,
  }));

  const { setModalName } = useModalState((state) => ({
    setModalName: state.setModalName,
  }));

  const { setInfo } = useReportMsgState((state) => ({
    setInfo: state.setInfo,
  }));

  useEffect(() => {
    if (isShow) {
      const timer = setTimeout(() => {
        setIsHidden(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isShow]);

  if (isHidden) return null;

  return (
    <li className={`flex flex-col gap-1 ${isShow ? "animate-fadeOut" : ""}`}>
      <section className="font-[Pretendard-Medium] text-gray-500 text-xs">
        {props.nickname}
      </section>
      <section className="flex gap-2">
        <section
          className={`text-xs rounded-[5px] py-2 px-3 ${
            userData?.userId === props.userId
              ? "bg-[#e3e3e3] text-gray-800"
              : "bg-[#71717a] text-white"
          } font-[Pretendard-Medium] text-left break-words whitespace-pre-line max-w-[60%] ${
            props.type === "IMAGE" ? "cursor-pointer" : ""
          }`}
        >
          {props.type === "MESSAGE" ? (
            props.message
          ) : (
            <Image
              src={props.message}
              alt="chat message imgae"
              width={180}
              height={160}
            />
          )}
        </section>
        <section className="flex items-end gap-1">
          <span className="text-gray-500 text-xs">오후 10:59</span>
          {props.userId !== userData?.userId && (
            <Image
              src={report}
              alt="message report"
              className="w-4 h-4 cursor-pointer duration-300 hover:scale-125"
              onClick={() => {
                setModalName("reportMessage");
                setInfo({
                  nickname: props.nickname,
                  message: props.message,
                  msgId: props.msgId,
                  userId: userData?.userId,
                  type: props.type,
                  setIsShow: () => setIsShow(true),
                });
              }}
            />
          )}
        </section>
      </section>
    </li>
  );
}
