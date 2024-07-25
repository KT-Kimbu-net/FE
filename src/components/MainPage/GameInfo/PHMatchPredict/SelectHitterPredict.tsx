"use client";

import { useCallback } from "react";
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
import ddory from "@/img/ddory.svg";
import Image from "next/image";
import { useSelectHitterState } from "@/store/hitterSelect";
import { usePHPredictState } from "@/store/phPredict";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function SelectHitterPredict() {
  const { select } = useSelectHitterState((state) => ({
    select: state.select,
  }));

  const { pWinPercent, tWinPercent } = usePHPredictState((state) => ({
    pWinPercent: state.pWinPercent,
    tWinPercent: state.tWinPercent,
  }));

  const generateArray = useCallback((): number[] => {
    const getRandomInt = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const homeRun = getRandomInt(1, 10);
    const remainingPPercent = tWinPercent - homeRun;

    const hit = getRandomInt(10, remainingPPercent);
    const baseOnBalls = remainingPPercent - hit;

    return [homeRun, hit, pWinPercent, baseOnBalls];
  }, [select, tWinPercent, pWinPercent]);

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

  const data = {
    labels: ["홈런", "안타", "아웃", "볼넷"],
    datasets: [
      {
        label: "타자 예측",
        data: generateArray(),
        backgroundColor: [
          "rgb(30, 0, 255)",
          "rgb(54, 162, 235)",
          "rgb(255, 0, 0)",
          "rgb(0, 129, 2)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <section className="relative mt-3 w-full h-full rounded-xl flex">
      <section className="flex items-center ml-5 top-[-0.5rem] self-start">
        <Image
          src={ddory}
          alt="ddory"
          width={40}
          height={40}
          className="w-auto h-auto"
        />
        <span className="text-main font-[Pretendard-Bold]">선택타자 예측</span>
      </section>
      <Pie data={data} options={options} />
    </section>
  );
}
