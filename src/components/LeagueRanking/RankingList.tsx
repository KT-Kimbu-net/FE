import Image, { StaticImageData } from "next/image";

type TRankingList = {
  rank: number;
  teamLogo: StaticImageData;
  teamName: string;
  totalGames: number;
  win: number;
  draw: number;
  lose: number;
  winRate: number;
};

export default function RankingList(props: TRankingList) {
  const trStyle = props.teamName === "KT" ? " border-[3px] bg-gray-800" : "";
  const tdStyle = "text-center py-3";
  const teamLogoStyle =
    "absolute left-[-0.5rem] top-1/2 translate-y-[-50%] w-8 h-8";

  return (
    <tr className={`text-white text-lg ${trStyle} font-[Leferi]`}>
      <td className={tdStyle}>{props.rank}</td>
      <td className="text-center relative text-base">
        <Image
          src={props.teamLogo}
          alt={props.teamName}
          className={teamLogoStyle}
        />
        {props.teamName}
      </td>
      <td className="text-center">{props.totalGames}</td>
      <td className="text-center">{props.win}</td>
      <td className="text-center">{props.draw}</td>
      <td className="text-center">{props.lose}</td>
      <td className="text-center">{props.winRate}</td>
    </tr>
  );
}
