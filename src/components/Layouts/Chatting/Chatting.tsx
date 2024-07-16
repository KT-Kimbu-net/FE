"use client";

import { useEffect, useRef, useState } from "react";

import { FaUserEdit } from "react-icons/fa";
import { FcAddImage, FcVideoCall } from "react-icons/fc";

import { useChatState } from "@/store/chatting";
import { chatSocket } from "@/socket/ChatSocket";

import Message from "./Message";
import MessageInput from "./MessageInput";
import ChattingHeader from "./ChattingHeader";

export default function Chatting() {
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const messageEndRef = useRef<HTMLLIElement>(null);

  const { isShow, chatLog, setChatLog, setAllChatLog } = useChatState(
    (state) => ({
      isShow: state.isShow,
      chatLog: state.chatLog,
      setChatLog: state.setChatLog,
      setAllChatLog: state.setAllChatLog,
    })
  );

  const [isVisible, setIsVisible] = useState(isShow);
  const [animate, setAnimate] = useState(false);

  const iconStyle = "w-4 h-4";

  const msgSubmitSocketHandler = async () => {
    if (messageRef.current?.value) {
      const trimmedMessage = messageRef.current?.value.trim();
      if (trimmedMessage) {
        const sendMessage = {
          nickname: "홈런치는 강백호",
          message: messageRef.current?.value,
          time: "오후 11:09",
          report: [],
          msgId: "1",
        };
        chatSocket.emit("chatting", sendMessage);
        messageRef.current.value = "";
      }
    }
  };

  const getChatLogs = async () => {
    const data = await (await fetch("http://localhost:5000/chatLogs")).json();
    setAllChatLog(data);
  };

  useEffect(() => {
    getChatLogs();
  }, []);

  useEffect(() => {
    const scrollToEnd = () => {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    if (chatLog.length > 0) {
      scrollToEnd();
    }
  }, [chatLog]);

  useEffect(() => {
    // const chatMsgSocketHandler = (message: any) => {
    //   setChatLog(message);
    // };
    // chatSocket.on("chatting", chatMsgSocketHandler);
    // return () => {
    //   chatSocket.off("chatting", chatMsgSocketHandler);
    // };
  }, []);

  useEffect(() => {
    if (isShow) {
      setIsVisible(true);
      setAnimate(true);
    } else {
      setAnimate(false);
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [isShow]);

  return (
    <>
      {isVisible && (
        <section
          className={`bg-black border-[2px] rounded-2xl flex flex-col w-1/5 fixed bottom-[3%] h-2/5 right-4 z-20 ${
            animate ? "animate-fadeIn" : "animate-fadeOut"
          }`}
        >
          <ChattingHeader />
          <ul className="h-4/5 text-white flex flex-col gap-3 overflow-y-auto px-5 py-3 scrollbar-hide">
            {chatLog &&
              chatLog.map((message, index) => (
                <Message
                  key={index} // 추가: 각 메시지에 키를 추가합니다.
                  nickname={message.nickname}
                  message={message.message}
                  time={message.time}
                  msgId={message.msgId}
                />
              ))}
            <li ref={messageEndRef}></li>
          </ul>
          <section className="h-[20%] rounded-b-2xl bg-black flex flex-col gap-2 px-2 py-2 border-t-[1px] border-gray-700">
            <section className="flex gap-2 items-center justify-between px-3">
              <section className="flex items-center">
                <span className="text-gray-500 font-[Pretendard-Medium] text-sm mr-4">
                  홈런타자 강백호
                </span>
                <FaUserEdit className={`${iconStyle} text-white`} />
              </section>
              <section className="flex gap-2">
                {/* <FcAddImage className={iconStyle} /> */}
                {/* <FcVideoCall className={iconStyle} /> */}
              </section>
            </section>
            <MessageInput
              messageRef={messageRef}
              msgSubmitSocketHandler={msgSubmitSocketHandler}
            />
          </section>
        </section>
      )}
    </>
  );
}
