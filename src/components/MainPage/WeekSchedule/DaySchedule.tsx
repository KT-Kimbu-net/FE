import Image from "next/image";
import Lg from "@/img/TeamLogo/Lg.svg";
import { TDaySchedule } from "@/types/weekSchdule";

export default function DaySchedule(props: TDaySchedule) {
  const scheduleListStyle =
    "px-3 py-4 bg-white h-52 w-[15%] flex flex-col justify-between gap-4 items-center border-r-2 border-black";
  const teamLogoStyle = "w-1/4";
  const dateStyle = "font-[Leferi] text-2xl";
  const locationStyle = "font-[Pretendard-SemiBold] text-lg text-gray-600";

  return (
    <li className={scheduleListStyle}>
      <section className="flex w-full justify-between">
        <span className={dateStyle}>{props.date}</span>
        <span className={locationStyle}>{props.location}</span>
      </section>
      {props.result.state !== "NOT_SCHEDULED" && (
        <Image src={Lg} alt={"team logo"} className={teamLogoStyle} />
      )}
      {props.result.state === "END" && (
        <section className="font-[Pretendard-ExtraBold] text-3xl py-3">
          <span className="text-main">{props.result.score?.myScore}</span>
          <span> : </span>
          <span>{props.result.score?.opponentScore}</span>
        </section>
      )}
      {props.result.state === "ING" && (
        <section className="font-[Pretendard-ExtraBold] text-2xl py-3 ">
          경기중
        </section>
      )}
      {props.result.state === "SCHEDULED" && (
        <button className="w-full bg-[#f3f3f3] py-3 font-[Pretendard-SemiBold] text-sm rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
          예매하기
        </button>
      )}
    </li>
  );
}
