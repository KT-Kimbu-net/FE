"use client";

import { RefObject, FormEvent, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type TMessageInput = {
  messageRef: RefObject<HTMLTextAreaElement>;
  msgSubmitSocketHandler: (message: string) => void;
};

export default function MessageInput(props: TMessageInput) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim()) {
      props.msgSubmitSocketHandler(message);
      setMessage("");
      if (props.messageRef.current) {
        props.messageRef.current.value = "";
      }
    }
    props.messageRef.current?.focus();
  };

  const pressEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form
      className="flex items-center w-full px-3 gap-10 relative"
      onSubmit={handleSubmit}
      onKeyPress={pressEnter}
    >
      <textarea
        maxLength={200}
        rows={2}
        className="w-5/6 resize-none outline-none scrollbar-hide rounded-md bg-gray-700 px-3 py-0.5 text-white text-sm"
        ref={props.messageRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <FaArrowRightLong
        className="absolute right-2 w-6 h-6 text-white self-end cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(e as any);
        }}
      />
    </form>
  );
}
