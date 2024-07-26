"use client";

import { RefObject } from "react";

import { FaArrowRightLong } from "react-icons/fa6";

type TMessageInput = {
  messageRef: RefObject<HTMLTextAreaElement>;
  msgSubmitSocketHandler: () => void;
};

export default function MessageInput(props: TMessageInput) {
  const pressEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      props.msgSubmitSocketHandler();
    }
  };

  return (
    <form
      className="flex items-center w-full px-3 gap-10 relative"
      onSubmit={props.msgSubmitSocketHandler}
      onKeyPress={pressEnter}
    >
      <textarea
        maxLength={200}
        rows={2}
        className="w-5/6 resize-none outline-none scrollbar-hide rounded-md bg-gray-700 px-3 py-0.5 text-white text-sm"
        ref={props.messageRef}
      />
      <FaArrowRightLong
        className="absolute right-2 w-6 h-6 text-white self-end cursor-pointer"
        onClick={props.msgSubmitSocketHandler}
      />
    </form>
  );
}
