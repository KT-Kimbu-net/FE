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

  const generateArray = useCallback((): number[] => {
    const first = Math.floor(Math.random() * 10) + 1;
    const remainSum = 100 - first;
    const second = Math.floor(Math.random() * (remainSum - 30)) + 15;
    const third = Math.floor(Math.random() * (remainSum - second - 15)) + 15;
    const fourth = remainSum - second - third;

    return [first, second, third, fourth];
  }, [select]);

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
