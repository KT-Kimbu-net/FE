import Image from "next/image";
import { TDaySchedule } from "@/types/weekSchdule";
import { formatDate, getCurrentDay } from "@/utils/date";
import { getTeamLogo } from "@/utils/gameInfo";

export default function DaySchedule(props: TDaySchedule) {
  const teamLogoStyle = "w-14 h-12";
  const locationStyle = "font-[Pretendard-SemiBold] text-lg text-gray-600";
  const dateStyle = `font-[Leferi] text-2xl`;

  const getTeamLogoHandler = () => {
    if (props.stadium === "수원") {
      return getTeamLogo(props.visit);
    } else {
      return getTeamLogo(props.stadium);
    }
  };

  const currentDateCheck =
    formatDate(props.displayDate) === formatDate(getCurrentDay());

  const scheduleListStyle = `
    px-3 py-4 bg-white h-52 w-[15%] flex flex-col justify-between gap-4 items-center 
    transition-transform duration-300 transform origin-center
    ${currentDateCheck ? "scale-y-110 border-main border-[1px]" : ""}
  `;

  return (
    <li className={scheduleListStyle}>
      <section className="flex w-full justify-between">
        <span className={dateStyle}>{formatDate(props.displayDate)}</span>
        <span className={locationStyle}>{props.stadium}</span>
      </section>
      {props.status !== "monday" && (
        <Image
          src={getTeamLogoHandler()}
          alt={"team logo"}
          className={teamLogoStyle}
          width={48}
          height={40}
        />
      )}
      {props.status === "3" && (
        <section className="font-[Pretendard-ExtraBold] text-3xl">
          <span className={`${props.stadium === "수원" ? "text-main" : ""}`}>
            {props.homeScore}
          </span>
          <span> : </span>
          <span className={`${props.stadium === "수원" ? "" : "text-main"}`}>
            {props.visitScore}
          </span>
        </section>
      )}
      {props.status === "4" && (
        <section className="font-[Pretendard-Bold] text-2xl">우천취소</section>
      )}
      {props.status === "2" && (
        <section className="font-[Pretendard-Bold] text-2xl">경기중</section>
      )}
      {!props.status && (
        <button className="w-full bg-[#f3f3f3] py-3 font-[Pretendard-SemiBold] text-sm rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
          예매하기
        </button>
      )}
    </li>
  );
}
