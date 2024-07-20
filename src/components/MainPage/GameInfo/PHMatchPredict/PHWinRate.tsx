import Image from "next/image";
import ktPitcher from "#/data/gameInfo/ktPlayer/pictherData.json";
import ncPitcher from "#/data/gameInfo/ncPlayer/pictherData.json";
import ktHitterPlayer from "#/data/gameInfo/ktPlayer/hitterData.json";
import ncHitterPlayer from "#/data/gameInfo/ncPlayer/hitterData.json";
import { THitterInfo } from "@/types/selectHitter";
import { useSelectHitterState } from "@/store/hitterSelect";
import { usePHPredictState } from "@/store/phPredict";

export default function PHWinRate() {
  const { select } = useSelectHitterState((state) => ({
    select: state.select,
  }));

  const { pWinPercent, tWinPercent } = usePHPredictState((state) => ({
    pWinPercent: state.pWinPercent,
    tWinPercent: state.tWinPercent,
  }));

  const player = (
    select.selectTeam === "KT" ? ktHitterPlayer.data : ncHitterPlayer.data
  ).find((hitter: THitterInfo) => hitter.name === select.selectHitter.name);

  return (
    <section className="flex flex-col items-center mt-3.5 w-full">
      <section className="relative flex w-full pt-5">
        <section className="bg-main w-[100%] flex items-center rounded-2xl px-4 py-3 duration-500 ease-in-out">
          <Image
            src={
              select.selectTeam === "OPPONENT"
                ? ktPitcher.data.image
                : ncPitcher.data.image
            }
            alt="picther"
            width={40}
            height={52}
            className="mr-2 w-10 h-13"
          />
          <strong className="text-white">
            {select.selectTeam === "OPPONENT"
              ? ktPitcher.data.name
              : ncPitcher.data.name}
          </strong>
          <span className="text-[#FFBEC1] ml-2">{pWinPercent}%</span>
        </section>
        <section
          className="absolute right-0 bg-[#242424] w-[55%] flex items-center justify-end rounded-r-2xl [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)] px-4 py-3 duration-500 ease-in-out"
          style={{ width: `${tWinPercent}%` }}
        >
          <span className="text-[#ABABAB] mr-2">{tWinPercent}%</span>
          <strong className="text-white">{player?.name}</strong>
          <Image
            src={player?.image!}
            alt="picther"
            width={40}
            height={52}
            className="ml-2 w-10 h-13"
          />
        </section>
      </section>
    </section>
  );
}
