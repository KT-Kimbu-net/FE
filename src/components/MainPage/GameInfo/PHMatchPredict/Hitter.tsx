import Image from "next/image";
import player2 from "@/img/Player/player2.svg";
import { useSelectHitterRecord } from "@/store/gameInfo";
import { useSelectHitterState } from "@/store/hitterSelect";
import ktHitters from "#/data/gameInfo/ktPlayer/hitterData.json";
import ncHitters from "#/data/gameInfo/ncPlayer/hitterData.json";

export default function Hitter() {
  const { selectHitterRecord, setSelectHitterRecord } = useSelectHitterRecord(
    (state) => ({
      selectHitterRecord: state.selectHitterRecord,
      setSelectHitterRecord: state.setSelectHitterRecord,
    })
  );

  const { select } = useSelectHitterState((state) => ({
    select: state.select,
  }));

  const player = (
    select.selectTeam === "KT" ? ktHitters.data : ncHitters.data
  ).find((hitter) => hitter.name === select.selectHitter.name);

  const indicatorStyle = "w-full flex items-center justify-between px-4";
  const indicatorTitleStyle = "text-sm font-[Pretendard-SemiBold]";
  const indicatorContentStyle = "font-[Pretendard-SemiBold]";

  return (
    <section className="w-1/2 bg-[#D4D4D4] rounded-2xl flex flex-col items-center py-6 px-5 before:content-['선택타자기록'] before:font-[Pretendard-Bold] before:border-[1px] before:py-3 before:px-8 before:rounded-xl before:text-[#242424] before:bg-white before:absolute before:top-[-2rem] before:shadow-md">
      <section className="flex gap-4 items-center">
        <Image
          src={player!.image}
          alt="pitcher"
          width={48}
          height={64}
          className="w-12 h-16"
        />
        <strong className="text-2xl">{player!.name}</strong>
      </section>
      <ul className="flex gap-8 mt-4">
        <li
          className={`font-[Pretendard-SemiBold] text-lg cursor-pointer ${
            selectHitterRecord === "CURRENT" ? "text-main" : ""
          }`}
          onClick={() => {
            setSelectHitterRecord("CURRENT");
          }}
        >
          현재시즌
        </li>
        <li
          className={`font-[Pretendard-SemiBold] text-lg cursor-pointer ${
            selectHitterRecord === "RELATIVE" ? "text-main" : ""
          }`}
          onClick={() => {
            setSelectHitterRecord("RELATIVE");
          }}
        >
          상대전적
        </li>
      </ul>
      <ul className="w-full mt-2 flex flex-col gap-2">
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>타율</span>
          <span className={indicatorContentStyle}>{player?.AVG}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>홈런</span>
          <span className={indicatorContentStyle}>{player?.HR}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>타점</span>
          <span className={indicatorContentStyle}>{player?.RBI}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>출루율</span>
          <span className={indicatorContentStyle}>{player?.OBP}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>득점</span>
          <span className={indicatorContentStyle}>{player?.R}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>OPS</span>
          <span className={indicatorContentStyle}>{player?.OPS}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>WRC+</span>
          <span className={indicatorContentStyle}>{player?.["WRC+"]}</span>
        </li>
        <li className={indicatorStyle}>
          <span className={indicatorTitleStyle}>WAR</span>
          <span className={indicatorContentStyle}>{player?.WAR}</span>
        </li>
      </ul>
    </section>
  );
}
