import one from "/public/img/rankOne.svg";
import two from "/public/img/rankTwo.svg";
import three from "/public/img/rankThree.svg";
import Image from "next/image";
type TRankItem = {
  rank: number;
  nickname: string;
  score: string;
};

export default function RankItem(props: TRankItem) {
  const itemStyle = ["text-[#737373] bor"];
  const rankImg = [one, two, three];
  return (
    <>
      <li className="w-[350px] h-[50px] flex justify-between border-[1px] px-5 py-2 items-center rounded-[10px] border-[#ABABAB] text-[#737373] font-[600]">
        <p className="w-[10%] text-center">
          {props.rank < 4 ? (
            <Image
              src={rankImg[props.rank - 1]}
              width={30}
              height={30}
              alt="rankImg"
            />
          ) : (
            props.rank
          )}
        </p>
        <p className="w-[50%] text-left">{props.nickname}</p>
        <p className="w-[30%] text-right">{props.score}</p>
      </li>
    </>
  );
}
