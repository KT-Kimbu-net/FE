import Image from "next/image";
import player from "@/img/Player/Player.svg";

export default function Lineup() {
  return (
    <section className="flex flex-col items-center w-fit h-full gap-3">
      <section className="font-[Leferi] text-lg">LineUp</section>
      {/* 컴포넌트화 필수 */}
      <section className="flex flex-col gap-1">
        <ul className="flex py-3.5 flex-col gap-1 border-[1px] border-[rgba(0,0,0,0.25)] rounded-2xl items-end relative mt-3 w-full after:absolute after:w-8 after:h-8 after:bg-[url('/img/kt.svg')] after:bg-contain after:top-0 after:translate-y-[-50%] after:translate-x-[-50%] after:left-1/2">
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
        {/* 컴포넌트화 필수 */}
        <ul className="flex py-3.5 flex-col gap-1 border-[1px] border-[rgba(0,0,0,0.25)] rounded-2xl items-end relative mt-3 w-full after:absolute after:w-8 after:h-8 after:bg-[url('/img/kia.svg')] after:bg-contain after:top-0 after:translate-y-[-50%] after:translate-x-[-50%] after:left-1/2">
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
