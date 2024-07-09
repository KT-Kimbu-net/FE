"use client";

import Image from "next/image";
import Lg from "@/img/TeamLogo/Lg.svg";

export default function WeekSchedule() {
  const scheduleListStyle =
    "px-3 py-4 bg-white h-52 w-[15%] flex flex-col justify-between gap-4 items-center border-r-2 border-black";

  const teamLogoStyle = "w-1/3";

  return (
    <section className="w-full p-10 bg-black flex flex-col gap-10">
      <section className="text-white text-2xl font-[Leferi]">
        Weekend Schedule
      </section>
      <ul className="flex h-full [&>:first-child]:rounded-tl-xl [&>:first-child]:rounded-bl-xl  [&>:last-child]:rounded-br-xl [&>:last-child]:rounded-tr-xl">
        <li className={scheduleListStyle}>
          <section className="flex w-full justify-between">
            <span>6.24</span>
            <span>잠실</span>
          </section>
          <Image src={Lg} alt={"team logo"} className={teamLogoStyle} />
          <section>
            <span>2</span>
            <span> : </span>
            <span>7</span>
          </section>
        </li>
        <li className={scheduleListStyle}>
          <section className="flex w-full justify-between">
            <span>6.24</span>
            <span>잠실</span>
          </section>
          <Image src={Lg} alt={"team logo"} className={teamLogoStyle} />
          <section>
            <span>2</span>
            <span> : </span>
            <span>7</span>
          </section>
        </li>
        <li className={scheduleListStyle}>
          <section className="flex w-full justify-between">
            <span>6.24</span>
            <span>잠실</span>
          </section>
          <Image src={Lg} alt={"team logo"} className={teamLogoStyle} />
          <section>
            <span>2</span>
            <span> : </span>
            <span>7</span>
          </section>
        </li>
        <li className={`${scheduleListStyle}`}>
          <section className="flex w-full justify-between">
            <span>6.24</span>
            <span>잠실</span>
          </section>
          <Image src={Lg} alt={"team logo"} className={teamLogoStyle} />
          <section>
            <span>2</span>
            <span> : </span>
            <span>7</span>
          </section>
        </li>
        <li className={scheduleListStyle}>
          <section className="flex w-full justify-between">
            <span>6.24</span>
            <span>잠실</span>
          </section>
          <Image src={Lg} alt={"team logo"} className={teamLogoStyle} />
          <button>예매하기</button>
          {/* <section>
              <span>2</span>
              <span> : </span>
              <span>7</span>
            </section> */}
        </li>
        <li className={scheduleListStyle}>
          <section className="flex w-full justify-between">
            <span>6.24</span>
            <span>잠실</span>
          </section>
          <Image src={Lg} alt={"team logo"} className={teamLogoStyle} />
          <section>
            <span>2</span>
            <span> : </span>
            <span>7</span>
          </section>
        </li>
        <li className={scheduleListStyle}>
          <section className="flex w-full justify-between">
            <span>6.24</span>
            <span>잠실</span>
          </section>
          <Image src={Lg} alt={"team logo"} className={teamLogoStyle} />
          <section>
            <span>2</span>
            <span> : </span>
            <span>7</span>
          </section>
        </li>
      </ul>
    </section>
  );
}
