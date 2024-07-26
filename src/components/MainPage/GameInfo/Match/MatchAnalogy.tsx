"use client";

import Image from "next/image";
import luck from "@/img/luck.svg";
import { Tooltip } from "react-tooltip";
import { getTeamLogo } from "@/utils/gameInfo";
import { TLeagueRankingInfo } from "@/types/teams";

type TMatchAnalogy = {
  vsTeamData?: TLeagueRankingInfo;
  ktTeamData?: TLeagueRankingInfo;
};

export default function MatchAnalogy(props: TMatchAnalogy) {
  const titleStyle = "py-1 sm:py-2 text-sm sm:text-base";
  const contentStyle =
    "text-center text-sm sm:text-base sm:py-2 text-gray-700 font-[Pretendard-Medium]";

  return (
    <section className="w-full flex justify-center sm:mt-4 flex-col">
      <section className="relative sm:border-t-[2px] border-black w-full">
        <span className="hidden sm:block absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white px-2">
          팀 전력비교
        </span>
      </section>
      {/* 컴포넌트화 필수 */}
      <table className="border-collapse mt-4">
        <thead></thead>
        <tbody>
          <tr>
            <td className="flex items-center flex-col">
              {props.ktTeamData && (
                <Image
                  src={getTeamLogo(props.ktTeamData.팀)}
                  alt="kt"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:h-10 sm:w-10"
                />
              )}
              <strong className="text-lg mt-2">{props.ktTeamData?.팀}</strong>
            </td>
            <th className="align-bottom font-[Leferi] text-gray-500 text-lg">
              vs
            </th>
            <td className="flex items-center flex-col">
              {props.vsTeamData?.팀 && (
                <Image
                  src={getTeamLogo(props.vsTeamData?.팀)}
                  alt="nc"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:h-10 sm:w-10"
                />
              )}
              <strong className="text-lg mt-2">{props.vsTeamData?.팀}</strong>
            </td>
          </tr>
          <tr className="bg-[#f3f3f3]">
            <td className="text-center sm:py-2 font-[Pretendard-SemiBold] bg-[#f3f3f3] text-base sm:text-lg rounded-tl-xl  text-main">
              {props.ktTeamData?.순위}
            </td>
            <th className={titleStyle}>현재순위</th>
            <td className={contentStyle}>{props.vsTeamData?.순위}</td>
          </tr>
          <tr className="bg-[#f3f3f3]">
            <td className={contentStyle}>
              {props.ktTeamData?.승}승 {props.ktTeamData?.무}무{" "}
              {props.ktTeamData?.패}패
            </td>
            <th className={titleStyle}>시즌 성적</th>
            <td className={contentStyle}>
              {props.vsTeamData?.승}승 {props.vsTeamData?.무}무{" "}
              {props.vsTeamData?.패}패
            </td>
          </tr>
          <tr className="bg-[#f3f3f3]">
            <td className={contentStyle}>5승 2패</td>
            <th className={titleStyle}>상대 전적</th>
            <td className={contentStyle}>2승 5패</td>
          </tr>
          <tr className="bg-[#f3f3f3]">
            <td className={contentStyle}>{props.ktTeamData?.승률}</td>
            <th className={titleStyle}>승률</th>
            <td className={contentStyle}>{props.vsTeamData?.승률}</td>
          </tr>
          <tr className="bg-[#f3f3f3] align-baseline">
            <td className="flex relative rounded-bl-xl justify-center">
              <span className="font-[Pretendard-ExtraBold] text-sm sm:text-base text-gray-700">
                고영표
              </span>
              <Image
                src={luck}
                alt="luck"
                className="absolute right-4 sm:right-8 top-1/2 translate-y-[-50%] w-4 h-4 sm:w-8 sm:h-8"
                data-tooltip-id="kt-pitcher-tooltip"
                data-tooltip-content={"테스트"}
              />
              <Tooltip
                id="kt-pitcher-tooltip"
                place="top"
                style={{ width: "20rem" }}
              />
            </td>
            <th className={titleStyle}>선발투수</th>
            <td className="flex text-center relative rounded-br-xl justify-center">
              <Image
                src={luck}
                alt="luck"
                className="absolute left-4 sm:left-8 top-1/2 translate-y-[-50%] w-4 h-4 sm:w-8 sm:h-8"
                data-tooltip-id="kia-pitcher-tooltip"
                data-tooltip-content={"테스트"}
              />
              <Tooltip
                id="kia-pitcher-tooltip"
                place="top"
                className="example"
                style={{ width: "20rem" }}
              />
              <span className="font-[Pretendard-ExtraBold] text-gray-700 text-sm sm:text-base">
                양현종
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
