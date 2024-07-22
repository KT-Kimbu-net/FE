"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import PHWinRate from "./PHWinRate";
import ddory from "@/img/ddory.svg";
import { useSelectHitterState } from "@/store/hitterSelect";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import Picther from "./Picther";
import Hitter from "./Hitter";
import { TLiveInfo } from "@/types/liveScore";
import { useLiveScoreState } from "@/store/liveScore";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const options = {
  responsive: false,
  maintainAspectRatio: false,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  plugins: {
    legend: {
      position: "right" as const,
    },
  },
};

type TPHMatchPredictProps = {
  data: TLiveInfo;
};
export default function PHMatchPredict(props: TPHMatchPredictProps) {
  const { select } = useSelectHitterState((state) => ({
    select: state.select,
  }));

  const { kt, opponent } = useLiveScoreState();

  const generateArray = useCallback((): number[] => {
    const first = Math.floor(Math.random() * 10) + 1;
    const remainSum = 100 - first;
    const second = Math.floor(Math.random() * (remainSum - 30)) + 15;
    const third = Math.floor(Math.random() * (remainSum - second - 15)) + 15;
    const fourth = remainSum - second - third;

    return [first, second, third, fourth];
  }, [select]);

  const data = {
    labels: ["홈런", "안타", "삼진", "볼넷"],
    datasets: [
      {
        label: "pitcher vs hitter",
        data: generateArray(),
        backgroundColor: [
          "rgb(255, 242, 155)",
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <section className="flex flex-col w-2/5 items-center">
      <section className="font-[Leferi] text-lg">투수 vs 타자 예측</section>
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
      <section className="relative mt-3 w-full h-full rounded-xl flex">
        <section className="flex items-center ml-5 top-[-0.5rem] self-start">
          <Image
            src={ddory}
            alt="ddory"
            width={40}
            height={40}
            className="w-auto h-auto"
          />
          <span className="text-main font-[Pretendard-Bold]">
            선택타자 예측
          </span>
        </section>
        <Pie data={data} options={options} />
      </section>
    </section>
  );
}
