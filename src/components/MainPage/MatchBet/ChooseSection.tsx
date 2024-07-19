import kt from "@/img/TeamLogo/Kt.svg";
import Image from "next/image";
import { selectBet } from "./MatchBet";
import { Dispatch, SetStateAction } from "react";

type TChooseSectionProps = {
  selectBet: selectBet;
  setSelectBet: Dispatch<SetStateAction<selectBet>>;
  type: selectBet;
  team: string;
};

export default function ChooseSection(props: TChooseSectionProps) {
  return (
    <section
      className={`w-1/2 ${
        props.selectBet === "WIN"
          ? "bg-main text-white"
          : "bg-[#ffd0d0] text-black"
      } p-1 rounded-l-2xl flex items-center gap-2 px-3 cursor-pointer`}
      onClick={() => {
        props.setSelectBet(props.type);
      }}
    >
      <Image src={kt} alt="kt" />
      <section
        className={`flex flex-col font-[Pretendard-Bold] ${
          props.type === "DRAW" ? "items-center p-2" : ""
        }`}
      >
        <strong className="font-[Pretendard-SemiBold]">{props.team}</strong>
      </section>
    </section>
  );
}
