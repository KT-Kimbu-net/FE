import Image from "next/image";
import player from "@/img/Player/Player.svg";

export default function Lineup() {
  return (
    <section className="flex flex-col items-center w-fit">
      <section className="font-[Leferi] text-lg">LineUp</section>
      {/* 컴포넌트화 필수 */}
      <section className="flex flex-col gap-2 mt-3 w-full">
        <ul className="flex py-3.5 flex-col gap-1 border-[1px] border-[rgba(0,0,0,0.25)] rounded-2xl items-end">
          <li className="relative flex py-2 px-3.5">
            <Image src={player} alt="player" className="relative left-2" />
            <section className="py-3 pl-4 pr-8 bg-[#F3F3F3] rounded text-sm font-[Pretendard-SemiBold]">
              1. 서건창
            </section>
          </li>
          <li className="relative flex py-2 px-3.5">
            <Image src={player} alt="player" className="relative left-2" />
            <section className="py-3 pl-4 pr-8 bg-[#F3F3F3] rounded text-sm font-[Pretendard-SemiBold]">
              1. 서건창
            </section>
          </li>
          <li className="relative flex py-2 px-3.5">
            <Image src={player} alt="player" className="relative left-2" />
            <section className="py-3 pl-4 pr-8 bg-[#F3F3F3] rounded text-sm font-[Pretendard-SemiBold]">
              1. 서건창
            </section>
          </li>
          <li className="relative flex py-2 px-3.5">
            <Image src={player} alt="player" className="relative left-2" />
            <section className="py-3 pl-4 pr-8 bg-[#F3F3F3] rounded text-sm font-[Pretendard-SemiBold]">
              1. 서건창
            </section>
          </li>
          <li className="relative flex py-2 px-3.5">
            <Image src={player} alt="player" className="relative left-2" />
            <section className="py-3 pl-4 pr-8 bg-[#F3F3F3] rounded text-sm font-[Pretendard-SemiBold]">
              1. 서건창
            </section>
          </li>
        </ul>
      </section>
      {/* 컴포넌트화 필수 */}
      <section className="flex flex-col gap-2 mt-3 w-full">
        <ul className="flex py-3.5 flex-col gap-1 border-[1px] border-[rgba(0,0,0,0.25)] rounded-2xl items-end overflow-y-auto">
          <li className="relative flex py-2 px-3.5">
            <Image src={player} alt="player" className="relative left-2" />
            <section className="py-3 pl-4 pr-8 bg-[#FFF4F4] rounded text-sm font-[Pretendard-SemiBold]">
              1. 서건창
            </section>
          </li>
          <li className="relative flex py-2 px-3.5">
            <Image src={player} alt="player" className="relative left-2" />
            <section className="py-3 pl-4 pr-8 bg-[#FFF4F4] rounded text-sm font-[Pretendard-SemiBold]">
              1. 서건창
            </section>
          </li>
          <li className="relative flex py-2 px-3.5">
            <Image src={player} alt="player" className="relative left-2" />
            <section className="py-3 pl-4 pr-8 bg-[#FFF4F4] rounded text-sm font-[Pretendard-SemiBold]">
              1. 서건창
            </section>
          </li>
          <li className="relative flex py-2 px-3.5">
            <Image src={player} alt="player" className="relative left-2" />
            <section className="py-3 pl-4 pr-8 bg-[#FFF4F4] rounded text-sm font-[Pretendard-SemiBold]">
              1. 서건창
            </section>
          </li>
          <li className="relative flex py-2 px-3.5">
            <Image src={player} alt="player" className="relative left-2" />
            <section className="py-3 pl-4 pr-8 bg-[#FFF4F4] rounded text-sm font-[Pretendard-SemiBold]">
              1. 서건창
            </section>
          </li>
        </ul>
      </section>
    </section>
  );
}
