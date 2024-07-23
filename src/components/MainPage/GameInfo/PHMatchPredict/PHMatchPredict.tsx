"use client";

import PHWinRate from "./PHWinRate";
import Picther from "./Picther";
import Hitter from "./Hitter";
import { TLiveInfo } from "@/types/liveScore";
import { useLiveScoreState } from "@/store/liveScore";
import SelectHitterPredict from "./SelectHitterPredict";
import { Tooltip } from "react-tooltip";
import detailExcla from "@/img/detailExcla.svg";
import Image from "next/image";

type TPHMatchPredictProps = {
  data: TLiveInfo;
};

export default function PHMatchPredict(props: TPHMatchPredictProps) {
  const { kt, opponent } = useLiveScoreState();

  return (
    <section className="flex flex-col w-2/5 items-center">
      <div className="flex items-center gap-2">
        <section className="font-[Leferi] text-lg">투수 vs 타자 예측</section>
        <Image
          src={detailExcla}
          alt="투수 vs 타자 예측 ai 설명"
          width={24}
          height={24}
          className="h-auto"
          data-tooltip-id="pitcher-hitter-predict"
          data-tooltip-html={
            "투수와 타자의 현재 시즌 기록을 토대로 타자가 출루할지 혹은 투수가 타자를 아웃시킬지에 대한 예상 확률을 AI를 통해 예측한 결과입니다."
          }
        />
        <Tooltip
          place="left"
          id="pitcher-hitter-predict"
          style={{ width: "20rem", zIndex: "10" }}
        />
      </div>
      <PHWinRate
        ktPitcher={kt.pitcher ? kt.pitcher : props.data.kt.pitcher}
        opponentPitcher={
          opponent.pitcher ? opponent.pitcher : props.data.opponent.pitcher
        }
      />
      <section className="relative flex mt-10 w-full gap-2.5">
        <Picther
          ktPitcher={kt.pitcher ? kt.pitcher : props.data.kt.pitcher}
          opponentPitcher={
            opponent.pitcher ? opponent.pitcher : props.data.opponent.pitcher
          }
        />
        <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-[Pretendard-Bold] text-[#3e3e3e] text-2xl">
          vs
        </span>
        <Hitter />
      </section>
      <SelectHitterPredict />
    </section>
  );
}
