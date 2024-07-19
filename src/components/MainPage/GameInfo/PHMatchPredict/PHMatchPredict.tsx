"use client";

import Image from "next/image";
import Kia from "@/img/TeamLogo/Kia.svg";
import Kt from "@/img/TeamLogo/Kt.svg";
import { ktPicther, opponentPicther } from "@/data/gameInfo/pictherDummy";
import ddory from "@/img/ddory.svg";
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

const data = {
  labels: ["안타", "홈런", "삼진", "볼넷"],
  datasets: [
    {
      label: "My First Dataset",
      data: [40, 20, 20, 20],
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

export default function PHMatchPredict() {
  return (
    <section className="flex flex-col w-2/5 items-center">
      <section className="font-[Leferi] text-lg">투수 vs 타자 예측</section>
      <section className="flex flex-col items-center mt-3.5 w-full">
        <section className="relative w-full flex justify-center">
          <section className="absolute left-0 flex items-center">
            <strong className="font-[Pretendard-Bold]">KT Wiz</strong>
            <Image src={Kt} alt="Kt" className="ml-5" />
          </section>
          <section className="font-[Leferi] text-lg text-gray-500">vs</section>
          <section className="absolute right-0 flex items-center">
            <Image src={Kia} alt="Kia" className="mr-5" />
            <strong className="font-[Pretendard-Bold]">Kia Tigers</strong>
          </section>
        </section>
        <section className="relative flex w-full pt-5">
          <section className="bg-main w-[100%] flex items-center rounded-2xl px-4 py-3">
            <Image
              src={ktPicther.image}
              alt="picther"
              className="mr-2"
              width={40}
              height={40}
            />
            <strong className="text-white">{ktPicther.name}</strong>
            <span className="text-[#FFBEC1]">35%</span>
          </section>
          <section className="absolute right-0 bg-[#242424] w-[65%] flex items-center justify-end rounded-r-2xl [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)] px-4 py-3 ">
            <span className="text-[#ABABAB]">65%</span>
            <strong className="text-white">고영표</strong>
            <Image
              src={opponentPicther.image}
              alt="picther"
              className="rounded-ful ml-2"
              width={40}
              height={40}
            />
          </section>
        </section>
      </section>
      <section className="relative flex mt-10 w-full gap-2.5">
        <Picther />
        <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-[Pretendard-Bold] text-[#3e3e3e] text-2xl">
          vs
        </span>
        <Hitter />
      </section>
      <section className="relative mt-3 w-full h-full rounded-xl flex justify-between">
        <section className="flex items-center ml-5 top-[-0.5rem] self-start">
          <Image src={ddory} alt="ddory" className="" />
          <span className="text-main font-[Pretendard-Bold]">
            선택타자 예측
          </span>
        </section>
        <Pie data={data} options={options} />
      </section>
    </section>
  );
}
