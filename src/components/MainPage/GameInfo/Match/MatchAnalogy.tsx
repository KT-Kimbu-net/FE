"use client";

import Image from "next/image";
import Kt from "@/img/TeamLogo/Kt.svg";
import Kia from "@/img/TeamLogo/Kia.svg";
import luck from "@/img/luck.svg";
import { Tooltip } from "react-tooltip";

export default function MatchAnalogy(props: any) {
  return (
    <section className="w-full flex justify-center mt-4 flex-col">
      <section className="relative border-t-[2px] border-black w-full">
        <span className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white px-2">
          팀 전력비교
        </span>
      </section>
      {/* 컴포넌트화 필수 */}
      <table className="border-collapse mt-4">
        <thead></thead>
        <tbody>
          <tr>
            <td className="flex items-center flex-col">
              <Image src={Kt} alt="kt" />
              <strong className="text-lg mt-2">KT Wiz</strong>
            </td>
            <th className="align-bottom font-[Leferi] text-gray-500 text-lg">
              vs
            </th>
            <td className="flex items-center flex-col">
              <Image src={Kia} alt="kia" />
              <strong className="text-lg mt-2">Kia Tigers</strong>
            </td>
          </tr>
          <tr className="bg-[#f3f3f3]">
            <td className="text-center py-2 font-[Pretendard-SemiBold] bg-[#f3f3f3] text-lg rounded-tl-xl">
              9
            </td>
            <th className="py-2">현재순위</th>
            <td className="text-center py-2 font-[Pretendard-SemiBold] text-lg text-main rounded-tr-xl">
              1
            </td>
          </tr>
          <tr className="bg-[#f3f3f3]">
            <td className="text-center py-2 text-gray-700 font-[Pretendard-Medium]">
              33승 1무 43패
            </td>
            <th className="py-2">시즌 성적</th>
            <td className="text-center py-2 text-gray-700 font-[Pretendard-Medium]">
              45승 2무 30패
            </td>
          </tr>
          <tr className="bg-[#f3f3f3]">
            <td className="text-center py-2 text-gray-700 font-[Pretendard-Medium]">
              5승 2패
            </td>
            <th className="py-2">상대 전적</th>
            <td className="text-center py-2 text-gray-700 font-[Pretendard-Medium]">
              2승 5패
            </td>
          </tr>
          <tr className="bg-[#f3f3f3]">
            <td className="text-center py-2 text-gray-700 font-[Pretendard-Medium]">
              0.434
            </td>
            <th className="py-2">승률</th>
            <td className="text-center py-2 text-gray-700 font-[Pretendard-Medium]">
              0.600
            </td>
          </tr>
          <tr className="bg-[#f3f3f3]">
            <td className="text-center relative rounded-bl-xl">
              <span className="font-[Pretendard-ExtraBold] text-gray-700">
                고영표
              </span>
              <Image
                src={luck}
                alt="luck"
                className="absolute right-8 top-1/2 translate-y-[-50%]"
                data-tooltip-id="kt-pitcher-tooltip"
                data-tooltip-content={props.kt.text}
              />
              <Tooltip
                id="kt-pitcher-tooltip"
                place="top"
                style={{ width: "20rem" }}
              />
            </td>
            <th className="py-2">선발투수</th>
            <td className="text-center relative rounded-br-xl">
              <Image
                src={luck}
                alt="luck"
                className="absolute left-8 top-1/2 translate-y-[-50%]"
                data-tooltip-id="kia-pitcher-tooltip"
                data-tooltip-content={props.opponent.text}
              />
              <Tooltip
                id="kia-pitcher-tooltip"
                place="top"
                className="example"
                style={{ width: "20rem" }}
              />
              <span className="font-[Pretendard-ExtraBold] text-gray-700">
                양현종
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
