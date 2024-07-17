import Image from "next/image";
import ddory from "@/img/ddory.svg";
import { useChatState } from "@/store/chatting";

export default function ChattingHeader() {
  const { userCount } = useChatState((state) => ({
    userCount: state.userCount,
  }));

  return (
    <header className="flex justify-between h-[10%] w-full border-b-[1px] border-gray-700 p-5">
      <section className="flex items-center justify-between w-full">
        <strong className="font-[Pretendard-ExtraBold] text-2xl text-white flex items-center gap-2">
          <Image src={ddory} alt="ddory" className="w-8 h-8" />
          KT Wiz 응원톡
          <section className="text-white">클린봇</section>
        </strong>
        <span className="font-[Pretendard-Medium] text-main text-sm">
          {userCount}명
        </span>
      </section>
    </header>
  );
}
