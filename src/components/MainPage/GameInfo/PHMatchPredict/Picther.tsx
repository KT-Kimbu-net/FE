"use client";

import Image from "next/image";
import ktPitcher from "#/data/gameInfo/ktPlayer/pictherData.json";
import ncPitcher from "#/data/gameInfo/ncPlayer/pictherData.json";

import { useSelectPictherRecord } from "@/store/gameInfo";
import { useSelectHitterState } from "@/store/hitterSelect";

export default function Picther() {
  const { selectPictherRecord, setSelectPitcherRecord } =
    useSelectPictherRecord((state) => ({
      selectPictherRecord: state.selectPitcherRecord,
      setSelectPitcherRecord: state.setSelectPitcherRecord,
    }));

  const { select } = useSelectHitterState((state) => ({
    select: state.select,
  }));

  const player = select.selectTeam === "KT" ? ncPitcher : ktPitcher;

  const indicatorStyle = "w-full flex items-center justify-between px-4";
  const indicatorTitleStyle = "text-sm font-[Pretendard-SemiBold]";
  const indicatorContentStyle = "font-[Pretendard-SemiBold]";

  return (
    <section className="w-1/2 bg-[#FFF4F4] rounded-2xl flex flex-col items-center py-6 px-5 before:content-['등판투수기록'] before:font-[Pretendard-Bold] before:border-[1px] before:py-3 before:px-8 before:rounded-xl before:text-[#242424] before:bg-white before:absolute before:top-[-2rem]">
      <section className="flex gap-4 items-center">
        <Image
          src={player.data.image}
          alt="pitcher"
          width={48}
          height={64}
          style={{ width: 48, height: 64 }}
        />
        <strong className="text-2xl">{player.data.name}</strong>
      </section>
      <ul className="flex gap-8 mt-4">
        <li
          className={`font-[Pretendard-SemiBold] text-lg cursor-pointer ${
            selectPictherRecord === "CURRENT" ? "text-main" : ""
          }`}
          onClick={() => {
            setSelectPitcherRecord("CURRENT");
          }}
        >
          현재시즌
        </li>
        <li
          className={`font-[Pretendard-SemiBold] text-lg cursor-pointer ${
            selectPictherRecord === "RELATIVE" ? "text-main" : ""
          }`}
          onClick={() => {
            setSelectPitcherRecord("RELATIVE");
          }}
        >
          상대전적
        </li>
      </ul>
      <ul className="w-full mt-2 flex flex-col gap-2">
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>등판횟수</span>
          <span className={indicatorContentStyle}>{player.data.G}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>시즌성적</span>
          <span className={indicatorContentStyle}>
            {player.data.W}승 {player.data.L}패
          </span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>방어율</span>
          <span className={indicatorContentStyle}>{player.data.ERA}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>피안타율</span>
          <span className={indicatorContentStyle}>{player.data.AVG}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>WHIP</span>
          <span className={indicatorContentStyle}>{player.data.WHIP}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>탈삼진/볼넷</span>
          <span className={indicatorContentStyle}>
            {player.data.SO}/{player.data.BB}
          </span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>이닝소화</span>
          <span className={indicatorContentStyle}>{player.data.IP}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>WAR</span>
          <span className={indicatorContentStyle}>{player.data.WAR}</span>
        </li>
      </ul>
    </section>
  );
}
