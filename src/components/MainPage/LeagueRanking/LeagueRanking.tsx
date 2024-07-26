import RankingList from "./RankingList";
import HighLights from "../HighLights/HighLights";
import { TLeagueRankingInfo } from "@/types/teams";

type TLeagueRanking = {
  leagueRanking: TLeagueRankingInfo[];
};

export default function LeagueRanking(props: TLeagueRanking) {
  return (
    <section className="relative w-full flex justify-center lg:px-10 before:bg-[url('/img/bgImage2.png')] before:w-full before:h-full before:bg-cover before:opacity-[0.07] before:absolute before:left-0 before:top-0">
      <section className="w-full 3xl:w-3/4 flex flex-col lg:flex-row justify-center gap-5 z-10">
        <HighLights />
        <section className="bg-[#161616] sm:px-4 py-3 sm:py-10 w-full lg:w-1/3">
          <section className="text-white text-base md:text-lg xl:text-xl 2xl:text-2xl font-[Leferi] pt-1 px-4 sm:px-0">
            League Ranking
          </section>
          <table className="mt-6 border-collapse w-full">
            <thead>
              <tr className="text-white">
                <th scope="col" className="py-4 text-center text-xs sm:text-sm">
                  순위
                </th>
                <th scope="col" className="text-xs sm:text-sm">
                  구단명
                </th>
                <th scope="col" className="text-xs sm:text-sm">
                  경기수
                </th>
                <th scope="col" className="text-xs sm:text-sm">
                  승
                </th>
                <th scope="col" className="text-xs sm:text-sm">
                  무
                </th>
                <th scope="col" className="text-xs sm:text-sm">
                  패
                </th>
                <th scope="col" className="text-xs sm:text-sm">
                  승률
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ...props.leagueRanking.filter((team) => team.팀 === "KT"),
                ...props.leagueRanking.filter((team) => team.팀 !== "KT"),
              ].map((team, index) => (
                <RankingList
                  rank={team.순위}
                  teamName={team.팀}
                  totalGames={team.G}
                  win={team.승}
                  draw={team.무}
                  lose={team.패}
                  winRate={team.승률}
                  key={index}
                />
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </section>
  );
}
