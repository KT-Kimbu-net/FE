import Image from "next/image";
import prevArrow from "@/img/prevArrow.svg";
import subseArrow from "@/img/subseArrow.svg";
import Kt from "@/img/TeamLogo/Kt.svg";
import Kia from "@/img/TeamLogo/Kia.svg";

export default function MatchScore() {
  return (
    <>
      <section className="text-xl font-[Leferi]">Match</section>
      <section className="w-full flex justify-between">
        <Image src={prevArrow} alt="prev game match" />
        <section className="flex gap-2 items-center">
          <section className="text-base font-[Pretendard-ExtraBold]">
            06.25 ( 화 ) 18:30
          </section>
          <span className="text-sm font-[Pretendard-SemiBold] text-[#1B1B1B]">
            수원 Kt wiz 파크
          </span>
          <section className="border-[1px] rounded-md border-[#e0e0e0]">
            60%
          </section>
        </section>
        <Image src={subseArrow} alt="next game match" />
      </section>
      <section className="w-full">
        <section className="w-full bg-[#1b1b1b] rounded-t-xl p-4 flex flex-col items-center">
          <section className="text-center text-[#d6d6d6] w-fit py-1 px-3 rounded-xl bg-[#3a3a3a] font-[Pretendard-Bold]">
            2회말
          </section>
          <section className="flex gap-8 w-full justify-between items-center">
            <section className="flex items-center justify-between w-1/3">
              <strong className="text-white text-lg font-[Pretendard-Bold]">
                KT Wiz
              </strong>
              <Image src={Kt} alt="Kt" />
            </section>
            <section className="w-1/3 text-center flex justify-between items-center text-white">
              <span className="text-[2rem] font-[Pretendard-ExtraBold]">3</span>
              <span className="text-lg font-[Leferi] text-gray-500">vs</span>
              <span className="text-[2rem] font-[Pretendard-ExtraBold]">0</span>
            </section>
            <section className="w-1/3 flex items-center justify-between">
              <Image src={Kia} alt="Kia" />
              <strong className="text-white text-lg font-[Pretendard-Bold]">
                Kia Tigers
              </strong>
            </section>
          </section>
        </section>
        <section className="w-full flex justify-between">
          <section className="bg-main px-4 py-3 rounded-bl-xl text-white w-[64%] font-[Pretendard-ExtraBold]">
            64.6%
          </section>
          <section className="bg-[#4b4b4b] px-4 py-3 rounded-br-xl text-white w-[36%] text-end font-[Pretendard-ExtraBold]">
            35.4%
          </section>
        </section>
      </section>
    </>
  );
}
