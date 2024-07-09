import Image from "next/image";

export default async function PlayerPage() {
  const jsonData = await require("/public/data/ktPlayer/coachData.json");
  const jsonPlayerData = jsonData.data.list;
  console.log(jsonPlayerData);

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
  return <></>;
}
