import Image from "next/image";
import Kt from "@/img/TeamLogo/Kt.svg";
import Kia from "@/img/TeamLogo/Kia.svg";

export default function MatchBet() {
  return (
    <section className="bg-white w-1/3 rounded-2xl flex flex-col items-center p-5">
      <section className="font-[Pretendard-Bold] text-xl">
        오늘의 경기 결과를 예측하고 크레딧을 받아가세요!
      </section>
      <section className="font-[Pretendard-SemiBold] text-[#8a8a8a]">
        경기 시작 10분전 마감됩니다.
      </section>
      <section className="relative w-full p-5 h-fit mt-5 flex justify-between items-center">
        <section className="w-1/2 bg-[#FFD0D0] p-1 rounded-l-2xl flex items-center gap-2 px-3 ">
          <Image src={Kt} alt="kt" />
          <section className="flex flex-col font-[Pretendard-Bold]">
            <strong className="font-[Pretendard-SemiBold]">KT</strong>
            <span className="font-[Pretendard-Bold]">62%</span>
          </section>
        </section>
        <section className="absolute right-0 left-1/2 translate-x-[-50%] [clip-path:polygon(0_0,80%_0%,100%_100%,20%_100%)] bg-[#EFECEC] p-1 translate-y-[-50%] top-1/2 w-1/3">
          <section className="flex flex-col font-[Pretendard-Bold] text-[#242424] items-center">
            <strong>무</strong>
            <span>2%</span>
          </section>
        </section>
        <section className="bg-[#B8B2B2] w-1/2 p-1 rounded-r-2xl text-end text-white flex items-center gap-2 px-3 justify-end">
          <section className="flex flex-col">
            <strong className="font-[Pretendard-SemiBold]">KIA</strong>
            <span className="font-[Pretendard-Bold]">36%</span>
          </section>
          <Image src={Kia} alt="kia" />
        </section>
      </section>
    </section>
  );
}
