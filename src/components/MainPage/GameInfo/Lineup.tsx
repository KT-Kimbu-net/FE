"use client";

import Image from "next/image";
import kt from "@/img/TeamLogo/kt.png";
import nc from "@/img/TeamLogo/nc.png";
import { useSelectHitterState } from "@/store/hitterSelect";
import ktHitterPlayer from "#/data/gameInfo/ktPlayer/hitterData.json";
import ncHitterPlayer from "#/data/gameInfo/ncPlayer/hitterData.json";

export default function Lineup() {
  const { setSelectHitter } = useSelectHitterState((state) => ({
    setSelectHitter: state.setSelectHitter,
  }));

  return (
    <section className="relative flex flex-col items-center h-[45rem]">
      <section className="font-[Leferi] text-lg">LineUp</section>
      <section className="flex flex-col flex-1 h-full">
        <section className="relative w-full flex flex-col h-1/2">
          <ul className="flex py-3.5 flex-col border-[1px] border-[rgba(0,0,0,0.25)] items-center mt-3 w-full rounded-2xl overflow-y-auto scrollbar-hide h-full">
            <li className="absolute top-1/2 left-0 translate-x-[-50%] translate-y-[-50%] z-10">
              <Image src={kt} alt="kt" width={48} height={40} />
            </li>
            {ktHitterPlayer.data.map((hitter: any, index) => (
              <li
                className="relative flex py-2 px-3.5 cursor-pointer w-full"
                key={index}
                onClick={() => {
                  setSelectHitter({
                    selectTeam: "KT",
                    selectHitter: hitter.name,
                  });
                }}
              >
                <Image
                  src={hitter.image}
                  alt="player"
                  className="relative left-2 w-9 h-12 shadow-md"
                  width={32}
                  height={32}
                />
                <section className="py-3 pl-4 pr-8 bg-[#F3F3F3] text-sm font-[Pretendard-SemiBold] flex-1">
                  {index + 1}. {hitter.name}
                </section>
              </li>
            ))}
          </ul>
        </section>
        <section className="relative w-full h-1/2">
          <ul className="flex py-3.5 flex-col border-[1px] border-[rgba(0,0,0,0.25)] items-center mt-3 w-full rounded-2xl overflow-y-auto overflow-x-visible scrollbar-hide h-full">
            <li className="absolute top-1/2 left-0 translate-x-[-50%] translate-y-[-50%] z-10">
              <Image src={nc} alt="nc" width={48} height={40} />
            </li>
            {ncHitterPlayer.data.map((hitter: any, index) => (
              <li
                className="relative flex py-2 px-3.5 cursor-pointer w-full"
                key={index}
                onClick={() => {
                  setSelectHitter({
                    selectTeam: "OPPONENT",
                    selectHitter: hitter.name,
                  });
                }}
              >
                <Image
                  src={hitter.image}
                  alt="player"
                  className="relative left-2 w-9 h-12 shadow-md"
                  width={32}
                  height={32}
                />
                <section className="py-3 pl-4 pr-8 bg-[#F3F3F3] text-sm font-[Pretendard-SemiBold] flex-1">
                  {index + 1}. {hitter.name}
                </section>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
}
