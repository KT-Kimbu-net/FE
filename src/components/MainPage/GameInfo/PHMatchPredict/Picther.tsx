"use client";

import Image from "next/image";
import { ktPicther, opponentPicther } from "@/data/gameInfo/pictherDummy";
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

  const player = select.selectTeam === "KT" ? opponentPicther : ktPicther;

  return (
    <section className="w-1/2 bg-[#FFF4F4] rounded-2xl flex flex-col items-center py-6 px-5 before:content-['등판투수기록'] before:font-[Pretendard-Bold] before:border-[1px] before:py-3 before:px-8 before:rounded-xl before:text-[#242424] before:bg-white before:absolute before:top-[-2rem]">
      <section className="flex gap-4 items-center">
        <Image
          src={player.image}
          alt="pitcher"
          width={48}
          height={64}
          style={{ width: 48, height: 64 }}
        />
        <strong className="text-2xl">{player.name}</strong>
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
        <li className="w-full flex justify-between px-4">
          <span>방어율</span>
          <span className="font-[Pretendard-SemiBold]">3.12</span>
        </li>
        <li className="w-full flex justify-between px-4">
          <span>방어율</span>
          <span className="font-[Pretendard-SemiBold]">3.12</span>
        </li>
        <li className="w-full flex justify-between px-4">
          <span>방어율</span>
          <span className="font-[Pretendard-SemiBold]">3.12</span>
        </li>
        <li className="w-full flex justify-between px-4">
          <span>방어율</span>
          <span className="font-[Pretendard-SemiBold]">3.12</span>
        </li>
        <li className="w-full flex justify-between px-4">
          <span>방어율</span>
          <span className="font-[Pretendard-SemiBold]">3.12</span>
        </li>
        <li className="w-full flex justify-between px-4">
          <span>방어율</span>
          <span className="font-[Pretendard-SemiBold]">3.12</span>
        </li>
        <li className="w-full flex justify-between px-4">
          <span>방어율</span>
          <span className="font-[Pretendard-SemiBold]">3.12</span>
        </li>
        <li className="w-full flex justify-between px-4">
          <span>방어율</span>
          <span className="font-[Pretendard-SemiBold]">3.12</span>
        </li>
      </ul>
    </section>
  );
}
