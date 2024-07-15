import Image from "next/image";
import Lg from "@/img/TeamLogo/Lg.svg";

export default function WeekSchedule() {
  const scheduleListStyle =
    "px-3 py-4 bg-white h-52 w-[15%] flex flex-col justify-between gap-4 items-center border-r-2 border-black";
  const teamLogoStyle = "w-1/4";
  const dateStyle = "font-[Leferi] text-2xl";
  const locationStyle = "font-[Pretendard-SemiBold] text-lg text-gray-600";

  return (
    <section className="w-full p-10 bg-black flex flex-col items-center">
      <section className="w-3/4 flexjustify-between items-center">
        <section className="text-white text-2xl font-[Leferi]">
          Weekend Schedule
        </section>
        <ul className="w-full flex [&>:first-child]:rounded-tl-xl [&>:first-child]:rounded-bl-xl  [&>:last-child]:rounded-br-xl [&>:last-child]:rounded-tr-xl mt-8">
          <li className={scheduleListStyle}>
            <section className="flex w-full justify-between">
              <span className={dateStyle}>6.24</span>
            </section>
          </li>
          <li className={scheduleListStyle}>
            <section className="flex w-full justify-between">
              <span className={dateStyle}>6.24</span>
              <span className={locationStyle}>잠실</span>
            </section>
            <Image src={Lg} alt={"team logo"} className={teamLogoStyle} />
            <section className="font-[Pretendard-ExtraBold] text-3xl py-3">
              <span className="text-main">2</span>
              <span> : </span>
              <span>7</span>
            </section>
          </li>
          <li className={scheduleListStyle}>
            <section className="flex w-full justify-between">
              <span className={dateStyle}>6.24</span>
              <span className={locationStyle}>잠실</span>
            </section>
            <Image src={Lg} alt={"team logo"} className={teamLogoStyle} />
            <section className="font-[Pretendard-ExtraBold] text-3xl py-3">
              <span className="text-main">2</span>
              <span> : </span>
              <span>7</span>
            </section>
          </li>
          <li className={`${scheduleListStyle} scale-y-110`}>
            <section className="flex w-full justify-between">
              <span className={dateStyle}>6.24</span>
              <span className={locationStyle}>잠실</span>
            </section>
            <Image src={Lg} alt={"team logo"} className={teamLogoStyle} />
            <section className="font-[Pretendard-ExtraBold] text-2xl py-3 ">
              경기중
            </section>
          </li>
          <li className={scheduleListStyle}>
            <section className="flex w-full justify-between">
              <span className={dateStyle}>6.24</span>
              <span className={locationStyle}>잠실</span>
            </section>
            <Image src={Lg} alt={"team logo"} className={teamLogoStyle} />
            <button className="w-full bg-[#f3f3f3] py-3 font-[Pretendard-SemiBold] text-sm rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
              예매하기
            </button>
          </li>
          <li className={scheduleListStyle}>
            <section className="flex w-full justify-between">
              <span className={dateStyle}>6.24</span>
              <span className={locationStyle}>잠실</span>
            </section>
            <Image src={Lg} alt={"team logo"} className={teamLogoStyle} />
            <button className="w-full bg-[#f3f3f3] py-3 font-[Pretendard-SemiBold] text-sm rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
              예매하기
            </button>
          </li>
          <li className={scheduleListStyle}>
            <section className="flex w-full justify-between">
              <span className={dateStyle}>6.24</span>
              <span className={locationStyle}>잠실</span>
            </section>
            <Image src={Lg} alt={"team logo"} className={teamLogoStyle} />
            <button className="w-full bg-[#f3f3f3] py-3 font-[Pretendard-SemiBold] text-sm rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
              예매하기
            </button>
          </li>
        </ul>
      </section>
    </section>
  );
}
