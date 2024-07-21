"use client";

import { useLiveScoreState } from "@/store/liveScore";

type TDetailScoreProps = {
  ktScore: number[];
  opponentScore: number[];
};

export default function DetailScore(props: TDetailScoreProps) {
  const { kt, opponent } = useLiveScoreState();
  const inningThStyle = "w-10 font-medium";
  const inningTdStyle = "px-2 text-center";

  const fullKtScore = Array.from({ length: 17 }, (_, i) => kt.score[i] ?? "");
  const fullOpponentScore = Array.from(
    { length: 17 },
    (_, i) => opponent.score[i] ?? ""
  );

  return (
    <section className="w-full flex flex-col gap-6 justify-center mt-4">
      <section className="relative border-t-[2px] border-black w-full">
        <span className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white px-2 ">
          스코어
        </span>
      </section>
      <table className="border-collapse w-full">
        <thead className="bg-gray-800">
          <tr className="text-white">
            <th scope="col" className="rounded-tl-xl w-20"></th>
            {Array.from({ length: 12 }, (_, i) => (
              <th scope="col" className={inningThStyle} key={i + 1}>
                {i + 1}
              </th>
            ))}
            <th scope="col" className="w-10">
              <span>R</span>
            </th>
            <th scope="col" className="w-10">
              <span>H</span>
            </th>
            <th scope="col" className="w-10">
              <span>E</span>
            </th>
            <th scope="col" className="w-10">
              <span>B</span>
            </th>
            <th scope="col" className="w-10 rounded-tr-xl"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#f3f3f3]">
            <td className="px-2 border-r-[1px] border-white">KT</td>
            {fullKtScore.map((score, index) => (
              <td className={inningTdStyle} key={index}>
                {score}
              </td>
            ))}
          </tr>
          <tr className="bg-[#f3f3f3] border-t-[1px] border-white">
            <td className="px-2 rounded-bl-xl border-r-[1px] border-white">
              Kia
            </td>
            {fullOpponentScore.map((score, index) => (
              <td
                className={`${inningTdStyle} ${
                  index === fullOpponentScore.length - 1 ? "rounded-br-xl" : ""
                }`}
                key={index}
              >
                {score}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
  );
}
