import Image from "next/image";
import lg from "@/img/TeamLogo/lg.png";
import kia from "@/img/TeamLogo/kia.png";
import nc from "@/img/TeamLogo/nc.png";
import samsung from "@/img/TeamLogo/samsung.png";
import kiwoom from "@/img/TeamLogo/kiwoom.png";
import ssg from "@/img/TeamLogo/ssg.png";
import doosan from "@/img/TeamLogo/doosan.png";
import hanwha from "@/img/TeamLogo/hanwha.png";
import lotte from "@/img/TeamLogo/lotte.png";

import { TDaySchedule } from "@/types/weekSchdule";

export default function DaySchedule(props: TDaySchedule) {
  const scheduleListStyle =
    "px-3 py-4 bg-white h-52 w-[15%] flex flex-col justify-between gap-4 items-center border-r-2 border-black";
  const teamLogoStyle = "w-1/4";
  const dateStyle = "font-[Leferi] text-2xl";
  const locationStyle = "font-[Pretendard-SemiBold] text-lg text-gray-600";

  const teamLogos: { [key: string]: any } = {
    LG: lg,
    KIA: kia,
    NC: nc,
    Samsung: samsung,
    Kiwoom: kiwoom,
    SSG: ssg,
    Doosan: doosan,
    Hanwha: hanwha,
    Lotte: lotte,
  };

  const teamLogosHome: { [key: string]: any } = {
    잠실: lg,
    광주: kia,
    창원: nc,
    대구: samsung,
    고척: kiwoom,
    문학: ssg,
    모르: doosan,
    대전: hanwha,
    사직: lotte,
  };
  const getTeamLogo = () => {
    if (props.stadium === "수원") {
      return teamLogos[props.visit] || "";
    } else {
      return teamLogosHome[props.stadium] || "";
    }
  };

  return (
    <li className={scheduleListStyle}>
      <section className="flex w-full justify-between">
        <span className={dateStyle}>
          {props.displayDate.slice(4, 6)}.{props.displayDate.slice(6, 8)}
        </span>
        <span className={locationStyle}>{props.stadium}</span>
      </section>
      {props.status !== "monday" && (
        <Image
          src={getTeamLogo()}
          alt={"team logo"}
          className={teamLogoStyle}
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
        <section className="font-[Pretendard-ExtraBold] text-3xl py-3">
          <span>우천취소</span>
        </section>
      )}
      {props.status === "2" && (
        <section className="font-[Pretendard-ExtraBold] text-2xl py-3 ">
          경기중
        </section>
      )}
      {!props.status && (
        <button className="w-full bg-[#f3f3f3] py-3 font-[Pretendard-SemiBold] text-sm rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
          예매하기
        </button>
      )}
    </li>
  );
}
