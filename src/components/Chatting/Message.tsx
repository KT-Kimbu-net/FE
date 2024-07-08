import Image from "next/image";
import report from "@/img/Chatting/report.svg";

type TMessage = {
  content: string;
};

export default function Message(props: TMessage) {
  return (
    <li className="flex flex-col gap-1">
      <section className="font-[Pretendard-Medium] text-black">
        잠자는 강백호
      </section>
      <section className="flex gap-2">
        <section className="rounded-[5px] py-2 px-3 bg-[#FFF4F4] text-black font-[Pretendard-Medium] text-left break-words whitespace-pre-line max-w-[60%]">
          {props.content}
        </section>
        <section className="flex items-end gap-1">
          <span className="text-gray-500">오후 10:59</span>
          <Image src={report} alt="message report" className="w-6 h-6" />
        </section>
      </section>
    </li>
  );
}
