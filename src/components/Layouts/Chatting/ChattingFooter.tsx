"use client";

import { useRef } from "react";
import { useModalState } from "@/store/modal";
import Image from "next/image";
import image from "@/img/Chatting/image.svg";
import userSetting from "@/img/Chatting/userSetting.svg";
import MessageInput from "./MessageInput";
import { useUserState } from "@/store/user";
import { chatSocket } from "@/socket/ChatSocket";
import { useChatState } from "@/store/chatting";
import { nanoid } from "nanoid";
import { formatMessageDate } from "@/utils/date";
import { resizeImageFile } from "@/utils/img/imgResizer";
import { imageResizerSocketHandler } from "@/utils/socketHandler";

export default function ChattingFooter() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const { setModalName } = useModalState((state) => ({
    setModalName: state.setModalName,
  }));

  const { userData } = useUserState((state) => ({
    userData: state.userData,
  }));

  const { cleanChat, setCleanChat } = useChatState((state) => ({
    cleanChat: state.cleanChat,
    setCleanChat: state.setCleanChat,
  }));

  const iconStyle = "w-6 h-6";

  const msgSubmitSocketHandler = async () => {
    if (messageRef.current?.value) {
      const trimmedMessage = messageRef.current?.value.trim();
      const resultTime = formatMessageDate();
      if (trimmedMessage) {
        const sendMessage = {
          nickname: userData?.nickname,
          message: messageRef.current?.value,
          time: resultTime,
          report: [],
          msgId: nanoid(),
          userId: userData?.userId,
          type: "MESSAGE",
        };
        chatSocket.emit("chatting", sendMessage);
        messageRef.current.value = "";
      }
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (userData) await imageResizerSocketHandler(e, userData);
  };

  return (
    <section className="relative h-[20%] rounded-b-2xl bg-black flex flex-col gap-2 px-2 py-2 border-t-[1px] border-gray-700">
      <section className="flex gap-2 items-center justify-between px-3 w-5/6">
        <section className="flex items-center">
          <span className="text-gray-500 font-[Pretendard-Medium] text-sm mr-4">
            {userData?.nickname}
          </span>
          <section className="flex gap-2">
            <Image
              src={userSetting}
              alt="user nickname setting"
              className={`${iconStyle} text-white cursor-pointer`}
              onClick={() => {
                setModalName("nickChange");
              }}
            />
            <Image
              src={image}
              alt="image send"
              className={`${iconStyle} text-white cursor-pointer`}
              onClick={handleImageClick}
            />
            <input
              ref={fileInputRef}
              type="file"
              id="profileImage"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </section>
        </section>
        <section className="text-white text-sm flex gap-2">
          <span>클린봇</span>
          <section
            className={`relative w-[3rem] rounded-xl flex items-center px-1 cursor-pointer ${
              cleanChat ? "bg-[#25ff71]" : "bg-white"
            }`}
            onClick={() => {
              setCleanChat();
            }}
          >
            <section
              className={`w-[1rem] h-[1rem] rounded-full absolute duration-300 ${
                cleanChat ? "bg-white right-1" : "bg-black left-1"
              }`}
            />
          </section>
        </section>
      </section>
      <MessageInput
        messageRef={messageRef}
        msgSubmitSocketHandler={msgSubmitSocketHandler}
      />
    </section>
  );
}
