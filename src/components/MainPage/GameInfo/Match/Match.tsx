import Image from "next/image";
import prevArrow from "@/img/prevArrow.svg";
import subseArrow from "@/img/subseArrow.svg";
import Kt from "@/img/TeamLogo/Kt.svg";
import Kia from "@/img/TeamLogo/Kia.svg";
import luck from "@/img/luck.svg";

export default function Match() {
  const inningThStyle = "w-10 font-medium";
  const inningTdStyle = "px-2 text-center";

  return (
    <section className="flex flex-col w-2/5 items-center gap-6">
      <section className="text-xl font-[Leferi]">Match</section>
      <section className="w-full flex justify-between">
        <Image src={prevArrow} alt="prev game match" />
        <section className="flex gap-2 items-center">
          <section className="text-base font-[Pretendard-ExtraBold]">
            06.25 ( 화 ) 18:30
          </section>
          <span className="text-sm font-[Pretendard-SemiBold] text-[#1B1B1B]">
            수원 Kt wiz 파크
          </span>
          <section className="border-[1px] rounded-md border-[#e0e0e0]">
            60%
          </section>
        </section>
        <Image src={subseArrow} alt="next game match" />
      </section>
      <section className="w-full">
        <section className="w-full bg-[#1b1b1b] rounded-t-xl p-4 flex flex-col items-center">
          <section className="text-center text-[#d6d6d6] w-fit py-1 px-3 rounded-xl bg-[#3a3a3a] font-[Pretendard-Bold]">
            2회말
          </section>
          <section className="flex gap-8 w-full justify-between items-center">
            <section className="flex items-center justify-between w-1/3">
              <strong className="text-white text-lg font-[Pretendard-Bold]">
                KT Wiz
              </strong>
              <Image src={Kt} alt="Kt" />
            </section>
            <section className="w-1/3 text-center flex justify-between items-center text-white">
              <span className="text-[2rem] font-[Pretendard-ExtraBold]">3</span>
              <span className="text-lg font-[Leferi] text-gray-500">vs</span>
              <span className="text-[2rem] font-[Pretendard-ExtraBold]">0</span>
            </section>
            <section className="w-1/3 flex items-center justify-between">
              <Image src={Kia} alt="Kia" />
              <strong className="text-white text-lg font-[Pretendard-Bold]">
                Kia Tigers
              </strong>
            </section>
          </section>
        </section>
        <section className="w-full flex justify-between">
          <section className="bg-main px-4 py-3 rounded-bl-xl text-white w-[64%] font-[Pretendard-ExtraBold]">
            64.6%
          </section>
          <section className="bg-[#4b4b4b] px-4 py-3 rounded-br-xl text-white w-[36%] text-end font-[Pretendard-ExtraBold]">
            35.4%
          </section>
        </section>
      </section>
      <section className="w-full flex flex-col gap-6 justify-center mt-4">
        <section className="relative border-t-[2px] border-black w-full">
          <span className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white px-2 ">
            스코어
          </span>
        </section>
        {/* 라이브스코어 컴포넌트화 필수 */}
        <table className="border-collapse w-full">
          <thead className="bg-gray-800">
            <tr className="text-white">
              <th scope="col" className="rounded-tl-xl w-20"></th>
              <th scope="col" className={inningThStyle}>
                1
              </th>
              <th scope="col" className={inningThStyle}>
                2
              </th>
              <th scope="col" className={inningThStyle}>
                3
              </th>
              <th scope="col" className={inningThStyle}>
                4
              </th>
              <th scope="col" className={inningThStyle}>
                5
              </th>
              <th scope="col" className={inningThStyle}>
                6
              </th>
              <th scope="col" className={inningThStyle}>
                7
              </th>
              <th scope="col" className={inningThStyle}>
                8
              </th>
              <th scope="col" className={inningThStyle}>
                9
              </th>
              <th scope="col" className={inningThStyle}>
                <span>10</span>
              </th>
              <th scope="col" className={inningThStyle}>
                <span>11</span>
              </th>
              <th scope="col" className={inningThStyle}>
                <span>12</span>
              </th>
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
              <td className={inningTdStyle}>2</td>
              <td className={inningTdStyle}>10</td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
            </tr>
            <tr className="bg-[#f3f3f3] border-t-[1px] border-white">
              <td className="px-2 rounded-bl-xl border-r-[1px] border-white">
                Kia
              </td>
              <td className={inningTdStyle}>2</td>
              <td className={inningTdStyle}>1</td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className={inningTdStyle}></td>
              <td className="px-2 rounded-br-xl"></td>
            </tr>
          </tbody>
        </table>
      </section>
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
                />
              </td>
              <th className="py-2">선발투수</th>
              <td className="text-center relative rounded-br-xl">
                <Image
                  src={luck}
                  alt="luck"
                  className="absolute left-8 top-1/2 translate-y-[-50%]"
                />
                <span className="font-[Pretendard-ExtraBold] text-gray-700">
                  양현종
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}
