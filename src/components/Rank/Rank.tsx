import Image from "next/image";
import RankItem from "./RankItem";
import vicImg from "/public/img/vic.svg";
import dorriImg from "/public/img/dorri.svg";
import Tooltip from "../Layouts/Tooltip";

const dummyData = [
  {
    rank: 1,
    nickname: "asd",
    score: "10개",
  },
  {
    rank: 2,
    nickname: "asdfe",
    score: "9개",
  },
  {
    rank: 3,
    nickname: "asdvfr",
    score: "8개",
  },
  {
    rank: 4,
    nickname: "cvvbgtrr",
    score: "7개",
  },
  {
    rank: 5,
    nickname: "asdfewrqw",
    score: "6개",
  },
  {
    rank: 6,
    nickname: "cvsdf",
    score: "12345개",
  },
  {
    rank: 7,
    nickname: "sa",
    score: "4개",
  },
  {
    rank: 8,
    nickname: "asdwq",
    score: "3개",
  },
  {
    rank: 9,
    nickname: "grg",
    score: "1234개",
  },
  {
    rank: 10,
    nickname: "zxczx",
    score: "123개",
  },
];

export default function Rank() {
  return (
    <>
      <div className="flex items-center w-full justify-center mt-20">
        <Tooltip tooltipContent={<div>asdfasdfasdasdf</div>} position="top">
          <Image
            src={dorriImg}
            width={500}
            height={500}
            alt="dorriImage"
            className="md:block hidden"
          />
        </Tooltip>
        {/* <Image src={dorriImg} width={500} height={500} alt="dorriImage" /> */}
        <ul className="items-center flex flex-col min-w-[350px] ">
          <li className="w-[100%] h-[50px] flex justify-between border-[1px] px-5 py-2 items-center border-[#ABABAB] text-[#737373] font-[600] bg-[#EFEFEF] mb-1">
            <p className="w-[10%] text-center">랭크</p>
            <p className="w-[50%] text-left">닉네임</p>
            <p className="w-[30%] text-right">스코어</p>
          </li>
          {dummyData.map((data) => (
            <RankItem key={data.rank} {...data} />
          ))}
        </ul>
        <Image
          src={vicImg}
          width={500}
          height={500}
          alt="vicImage"
          className="md:block hidden"
        />
      </div>
    </>
  );
}
