"use client";

import Image from "next/image";
import kt from "@/img/TeamLogo/kt.png";
import nc from "@/img/TeamLogo/nc.png";
import ktHitterPlayer from "#/data/gameInfo/ktPlayer/hitterData.json";
import ncHitterPlayer from "#/data/gameInfo/ncPlayer/hitterData.json";
import ktPitcherPlayer from "#/data/gameInfo/ktPlayer/pictherData.json";
import ncPitcherPlayer from "#/data/gameInfo/ncPlayer/pictherData.json";

import HitterList from "./HitterList";
import { THitterInfo } from "@/types/selectHitter";

type TLineup = {
  ktPitcher: string;
  opponentPitcher: string;
};

export default function Lineup(props: TLineup) {
  const ktPitcher = ktPitcherPlayer.data.find(
    (pitcher) => props.ktPitcher === pitcher.name
  );
  const opponentPitcher = ncPitcherPlayer.data.find(
    (pitcher) => props.opponentPitcher === pitcher.name
  );

  return (
    <section className="relative flex flex-col items-center h-[45rem]">
      <section className="font-[Leferi] text-lg">LineUp</section>
      <section className="flex flex-col flex-1 h-full">
        <section className="relative w-full flex flex-col h-1/2">
          <ul className="flex py-3.5 flex-col border-[1px] border-[rgba(0,0,0,0.25)] items-center mt-3 w-full rounded-2xl overflow-y-auto scrollbar-hide h-full">
            <li className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10">
              <Image
                src={kt}
                alt="kt"
                width={48}
                height={40}
                className="w-auto h-auto"
              />
            </li>
            {ktHitterPlayer.data.map((hitter: THitterInfo, index) => (
              <HitterList key={index} hData={hitter} pData={ktPitcher!} />
            ))}
          </ul>
        </section>
        <section className="relative w-full h-1/2">
          <ul className="flex py-3.5 flex-col border-[1px] border-[rgba(0,0,0,0.25)] items-center mt-3 w-full rounded-2xl overflow-y-auto overflow-x-visible scrollbar-hide h-full">
            <li className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10">
              <Image
                src={nc}
                alt="nc"
                width={48}
                height={40}
                className="w-auto h-auto"
              />
            </li>
            {ncHitterPlayer.data.map((hitter: THitterInfo, index) => (
              <HitterList key={index} hData={hitter} pData={opponentPitcher!} />
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
}
