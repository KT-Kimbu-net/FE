"use client";
import Image from "next/image";
import RadarChart from "../RadarChart";
import { useEffect } from "react";

type TPlayer = {
  backnum: string;
  energybar: number;
  energybarName: string;
  gyear: string;
  hasFanpage: string;
  hittype: string;
  mobilePlayerImg: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  position: string;
  rank: number;
  rankName: string;
  teamName: string;
  index: number;
};

// backnum: '59',
//   energybar: 8,
//   energybarName: '8 점',
//   gyear: '2024',
//   hasFanpage: 'N',
//   hittype: '우투우타',
//   mobilePlayerImg: 'https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51058_2024-03-08_100708.jpg',
//   mobilePlayerImg1: 'https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51058_2024-03-08_100743.jpg',
//   mobilePlayerImg2: 'https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51058_2024-03-08_100756.jpg',
//   pcode: '51058',
//   playerName: '한차현',
//   playerPrvwImg: 'https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51058_2024-03-08_100726.jpg',
//   position: '투수',
//   rank: 51,
//   rankName: '51 위',
//   teamName: 'KT'
const data = {
  labels: ["타율", "안타수", "홈런", "도루", "타점", "WAR"],
  datasets: [
    {
      label: "선수 A",
      data: [50, 108, 22, 30, 10, 139.2],
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
      pointBackgroundColor: "rgba(153, 102, 255, 1)",
      pointRadius: 7,
      pointStyle: "star",
    },
    {
      label: "선수 B",
      data: [110, 20, 100, 150, 150, 10],
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 1,
      pointBackgroundColor: "rgba(255, 206, 86, 1)",
      pointRadius: 7,
      pointStyle: "cross",
    },
  ],
};

const options = {
  scales: {
    r: {
      ticks: {
        display: false,
        // stepSize: 20,
        // maxTicksLimit: 100
      },

      beginAtZero: true,
      grid: {
        color: "rgba(0, 128, 0, 0.3)",
      },
    },
  },
};

export default function PlayerBox(props: TPlayer) {
  const getPlayerData = async () => {
    // const playerData = await fetch(
    //   `http://3.35.50.52:5002/player_data?pcode=${props.pcode}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    // const playerData = import("../../../public/data/ktPlayer/")
  };
  useEffect(() => {
    getPlayerData();
  }, []);

  return (
    <>
      <li
        key={props.index}
        className="bg-white rounded-lg shadow-md overflow-hidden relative w-[300px] h-[300px] group"
      >
        <Image
          src={props.playerPrvwImg}
          alt={`${props.playerName} 이미지`}
          width={300}
          height={300}
          className="w-full hidden md:block transition-opacity duration-300 group-hover:opacity-30"
        />
        <Image
          src={props.mobilePlayerImg2}
          alt={`${props.playerName} 이미지`}
          width={300}
          height={300}
          className="w-full md:hidden block"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {props.playerName}
          </h2>
          <p className="text-sm text-gray-600">{props.position}</p>
        </div>
        <span className="absolute inset-0 opacity-0 scale-0  transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 flex items-center justify-center">
          <RadarChart data={data} options={options} />
        </span>
      </li>
    </>
  );
}
