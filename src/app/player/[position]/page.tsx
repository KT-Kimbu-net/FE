"use client";
import dynamic from "next/dynamic";
import { Radar } from "react-chartjs-2";
const RadarChart = dynamic(() => import("@/components/RadarChart"), {
  ssr: false,
});

type TPageProps = {
  params: {
    position: string;
  };
};

export default async function PositionPage(props: TPageProps) {
  const jsonData =
    await import(`/public/data/ktPlayer/${props.params.position}Data.json`);
  const jsonPlayerData = jsonData.data.list;
  const data = {
    labels: ["타율", "안타수", "홈런", "도루", "타점", "WAR"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 10,
        pointLabels: {
          font: {
            size: 32, // 축 레이블의 폰트 크기
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: { size: 16 },
        },
      },
      tooltip: {
        bodyFont: { size: 14 },
        titleFont: { size: 16 },
      },
      title: {
        display: true,
        text: "레이더 차트 예시",
        font: { size: 40 },
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutBounce",
    },
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <RadarChart data={data} options={options} />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {jsonPlayerData.map((player: any, index: number) => (
            <li
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden "
            >
              <img
                src={player.playerPrvwImg}
                alt={`${player.playerName} 이미지`}
                className="w-full hidden md:block"
              />
              <img
                src={player.mobilePlayerImg2}
                alt={`${player.playerName} 이미지`}
                className="w-full md:hidden block"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {player.playerName}
                </h2>
                <p className="text-sm text-gray-600">{player.position}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
