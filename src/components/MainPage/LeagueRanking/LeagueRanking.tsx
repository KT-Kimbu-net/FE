import RankingList from "./RankingList";
import HighLights from "@/components/HighLights/HighLights";

type TLeagueRankingInfo = {
  G: string;
  무: string;
  순위: string;
  승: string;
  승률: string;
  승차: string;
  팀: string;
  패: string;
};

type TLeagueRanking = {
  leagueRanking: TLeagueRankingInfo[];
};

export default function LeagueRanking(props: TLeagueRanking) {
  return (
    <section className="relative w-full flex justify-center px-10 before:bg-[url('/img/bgImage2.png')] before:w-full before:h-full before:bg-cover before:opacity-[0.07] before:absolute before:left-0 before:top-0">
      <section className="w-3/4 flex justify-center gap-5 z-10">
        <HighLights />
        <section className="bg-[#161616] px-4 py-10 w-1/3">
          <section className="text-white text-2xl font-[Leferi]">
            League Ranking
          </section>
          <table className="mt-6 border-collapse w-full">
            <thead>
              <tr className="text-white">
                <th scope="col" className="py-4 text-center text-sm">
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
