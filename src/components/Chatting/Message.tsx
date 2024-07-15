import Image from "next/image";
import report from "@/img/Chatting/report.svg";

type TMessage = {
  nickname: string;
  message: string;
  time: string;
  msgId: string;
};

export default function Message(props: TMessage) {
  return (
    <li className="flex flex-col gap-1">
      <section className="font-[Pretendard-Medium] text-gray-500 text-xs">
        잠자는 강백호
      </section>
      <section className="flex gap-2">
        <section className="text-xs rounded-[5px] py-2 px-3 bg-[#71717a] text-white font-[Pretendard-Medium] text-left break-words whitespace-pre-line max-w-[60%]">
          {props.message}
        </section>
        <section className="flex items-end gap-1">
          <span className="text-gray-500 text-xs">오후 10:59</span>
          <Image
            src={report}
            alt="message report"
            className="w-4 h-4 cursor-pointer duration-300 hover:scale-125"
          />
        </section>
      </section>
    </li>
  );
}
