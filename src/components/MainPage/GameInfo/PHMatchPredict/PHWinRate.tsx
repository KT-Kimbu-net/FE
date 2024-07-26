import Image from "next/image";
import ktPitcher from "#/data/gameInfo/ktPlayer/pictherData.json";
import ncPitcher from "#/data/gameInfo/ncPlayer/pictherData.json";
import ktHitterPlayer from "#/data/gameInfo/ktPlayer/hitterData.json";
import ncHitterPlayer from "#/data/gameInfo/ncPlayer/hitterData.json";
import { THitterInfo } from "@/types/selectHitter";
import { useSelectHitterState } from "@/store/hitterSelect";
import { usePHPredictState } from "@/store/phPredict";

type TPHWinRate = {
  ktPitcher: string;
  opponentPitcher: string;
};

export default function PHWinRate(props: TPHWinRate) {
  const { select } = useSelectHitterState((state) => ({
    select: state.select,
  }));

  const { pWinPercent, tWinPercent } = usePHPredictState((state) => ({
    pWinPercent: state.pWinPercent,
    tWinPercent: state.tWinPercent,
  }));

  const hitterPlayer = (
    select.selectTeam === "KT" ? ktHitterPlayer.data : ncHitterPlayer.data
  ).find((hitter: THitterInfo) => hitter.name === select.selectHitter.name);

  const pitcherPlayer =
    select.selectTeam === "KT"
      ? ncPitcher.data.find((pitcher) => pitcher.name === props.opponentPitcher)
      : ktPitcher.data.find((pitcher) => pitcher.name === props.ktPitcher);

  const pitcherPercentStyle = `text-white ml-2 duration-300 text-sm sm:text-base ${
    pWinPercent > tWinPercent ? "scale-110" : ""
  }`;

  const hitterPercentStyle = `text-[#ABABAB] mr-2 duration-300 text-sm sm:text-base ${
    pWinPercent < tWinPercent ? "scale-110" : ""
  }`;

  return (
    <section className="flex flex-col items-center mt-3.5 w-full relative pt-5">
      <section className="bg-main w-full flex items-center rounded-2xl px-4 py-3 duration-500 ease-in-out">
        <Image
          src={pitcherPlayer?.image!}
          alt="picther"
          width={40}
          height={52}
          className="mr-1 sm:mr-2 w-6 h-9 sm:w-10 sm:h-13"
        />
        <strong className="text-white text-sm sm:text-base">
          {pitcherPlayer?.name}
        </strong>
        <span className={pitcherPercentStyle}>{pWinPercent}%</span>
      </section>
      <section
        className="absolute right-0 bg-[#242424] w-[60%] flex items-center justify-end rounded-r-2xl [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)] px-4 py-3 duration-500 ease-in-out"
        style={{ width: `${tWinPercent + 5}%` }}
      >
        <span className={hitterPercentStyle}>{tWinPercent}%</span>
        <strong className="text-white text-sm sm:text-base">
          {hitterPlayer?.name}
        </strong>
        <Image
          src={hitterPlayer?.image!}
          alt="picther"
          width={40}
          height={52}
          className="ml-1 sm:ml-2 w-6 h-9 sm:w-10 sm:h-13"
        />
      </section>
    </section>
  );
}
