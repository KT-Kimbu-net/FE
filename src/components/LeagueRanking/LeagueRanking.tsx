import Kt from "@/img/TeamLogo/Kt.svg";
import Kia from "@/img/TeamLogo/Kia.svg";
import Lg from "@/img/TeamLogo/Lg.svg";
import Samsung from "@/img/TeamLogo/Samsung.svg";
import Doosan from "@/img/TeamLogo/Doosan.svg";
import Ssg from "@/img/TeamLogo/ssg.svg";
import Nc from "@/img/TeamLogo/nc.svg";
import Hanwha from "@/img/TeamLogo/Hanwha.svg";
import Lotte from "@/img/TeamLogo/Lotte.svg";
import Kiwoom from "@/img/TeamLogo/Kiwoom.svg";
import RankingList from "./RankingList";
import HighLights from "../HighLights/HighLights";

const LeagueRankingDummyData = [
  {
    rank: 1,
    teamLogo: Kia,
    teamName: "KIA",
    totalGames: 81,
    win: 46,
    draw: 2,
    lose: 33,
    winRate: 0.582,
  },
  {
    rank: 2,
    teamLogo: Lg,
    teamName: "LG",
    totalGames: 84,
    win: 45,
    draw: 2,
    lose: 37,
    winRate: 0.549,
  },
  {
    rank: 3,
    teamLogo: Samsung,
    teamName: "삼성",
    totalGames: 83,
    win: 44,
    draw: 2,
    lose: 39,
    winRate: 0.543,
  },
  {
    rank: 4,
    teamLogo: Doosan,
    teamName: "두산",
    totalGames: 85,
    win: 44,
    draw: 2,
    lose: 39,
    winRate: 0.543,
  },
  {
    rank: 5,
    teamLogo: Ssg,
    teamName: "SSG",
    totalGames: 82,
    win: 41,
    draw: 1,
    lose: 40,
    winRate: 0.506,
  },
  {
    rank: 6,
    teamLogo: Nc,
    teamName: "NC",
    totalGames: 81,
    win: 38,
    draw: 1,
    lose: 41,
    winRate: 0.481,
  },
  {
    rank: 7,
    teamLogo: Lotte,
    teamName: "롯데",
    totalGames: 78,
    win: 35,
    draw: 3,
    lose: 40,
    winRate: 0.467,
  },
  {
    rank: 8,
    teamLogo: Kt,
    teamName: "KT",
    totalGames: 83,
    win: 37,
    draw: 2,
    lose: 44,
    winRate: 0.457,
  },
  {
    rank: 9,
    teamLogo: Hanwha,
    teamName: "한화",
    totalGames: 80,
    win: 35,
    draw: 2,
    lose: 43,
    winRate: 0.449,
  },
  {
    rank: 10,
    teamLogo: Kiwoom,
    teamName: "키움",
    totalGames: 79,
    win: 34,
    draw: 0,
    lose: 45,
    winRate: 0.431,
  },
];

export default function LeagueRanking() {
  return (
    <section className="w-full flex">
      <HighLights />
      <section className="w-1/3 bg-black p-10">
        <section className="text-white text-2xl font-[Leferi]">
          League Ranking
        </section>
        <table className="mt-6 w-full border-collapse">
          <thead>
            <tr className="text-white">
              <th scope="col" className="py-4 text-center">
                순위
              </th>
              <th scope="col">구단명</th>
              <th scope="col">경기수</th>
              <th scope="col">승</th>
              <th scope="col">무</th>
              <th scope="col">패</th>
              <th scope="col">승률</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {[
              ...LeagueRankingDummyData.filter(
                (team) => team.teamName === "KT"
              ),
              ...LeagueRankingDummyData.filter(
                (team) => team.teamName !== "KT"
              ),
            ].map((team, index) => (
              <RankingList
                rank={team.rank}
                teamLogo={team.teamLogo}
                teamName={team.teamName}
                totalGames={team.totalGames}
                win={team.win}
                draw={team.draw}
                lose={team.lose}
                winRate={team.winRate}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}
