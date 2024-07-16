import Image from "next/image";
import jsonData from "../../../public/data/ktPlayer/coachData.json"

export default async function PlayerPage() {
  
  const jsonPlayerData = jsonData.data.list;
  console.log(jsonPlayerData);


  return <></>;
}
