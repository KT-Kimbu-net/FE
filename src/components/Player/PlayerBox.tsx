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
    //   `{process.env.NEXT_PUBLIC_BASEURL}/player_data?pcode=${props.pcode}`
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
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 10;
  }
  const data = {
    labels: ["공격력", "방어력", "힘", "민첩", "지능", "매력"],
    datasets: [
      {
        label: "지난 시즌",
        data: [
          generateRandomNumber(),
          generateRandomNumber(),
          generateRandomNumber(),
          generateRandomNumber(),
          generateRandomNumber(),
          generateRandomNumber(),
        ],
        backgroundColor: "rgba(117, 184, 201, 0.2)",
        borderColor: "rgba(117, 184, 201, 1)",
        borderWidth: 1,
        pointBackgroundColor: "rgba(117, 184, 201, 1)",
        pointRadius: 2,
        // pointStyle: "star",
      },
      {
        label: "현재 시즌",
        data: [
          generateRandomNumber(),
          generateRandomNumber(),
          generateRandomNumber(),
          generateRandomNumber(),
          generateRandomNumber(),
          generateRandomNumber(),
        ],
        backgroundColor: "rgba(206, 60, 125, 0.2)",
        borderColor: "rgba(206, 60, 125, 1)",
        borderWidth: 1,
        pointBackgroundColor: "rgba(206, 60, 125, 1)",
        pointRadius: 2,
        // pointStyle: "cross",
      },
    ],
  };

  return (
    <>
      <li
        key={props.index}
        className="bg-white rounded-lg shadow-md overflow-hidden relative sm:w-[400px] md:w-[300px] xl:w-[250px]  w-[300px] h-auto p-3 group"
      >
        <Image
          src={props.playerPrvwImg}
          alt={`${props.playerName} 이미지`}
          width={300}
          height={300}
          className="w-full block transition-opacity duration-300 group-hover:opacity-10"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {props.playerName}
          </h2>
          <p className="text-sm text-gray-600 absolute z-1000">
            {props.position}
          </p>
        </div>
        <span className="absolute inset-0 opacity-0 scale-0  transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 flex items-center justify-center">
          <RadarChart data={data} options={options} />
        </span>
      </li>
    </>
  );
}
