"use client";

import { TDaySchedule } from "@/types/weekSchdule";
import { useState, useEffect } from "react";
import { calculateTimeLeft } from "@/utils/date";
import Image from "next/image";
import clock from "@/img/clock.webp";
import ddory from "@/img/ddory.svg";

type TTimeLeftInfo = {
  hours: number;
  minutes: number;
  seconds: number;
};

type TTimeLefeProps = {
  todaySchedule: TDaySchedule;
};

export function TimeLeft(props: TTimeLefeProps) {
  const [timeLeft, setTimeLeft] = useState<TTimeLeftInfo | undefined>(
    calculateTimeLeft(props.todaySchedule.gtime)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(props.todaySchedule.gtime));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <section className="font-[Pretendard-SemiBold] text-[#8a8a8a] flex items-center gap-2">
      <span className="text-base">
        {timeLeft
          ? "경기 시작 10분 전 마감됩니다"
          : "아쉽게도 오늘의 경기는 마감되었습니다"}
      </span>
      {timeLeft && (
        <section className="text-black border-[1px] rounded-xl px-2 flex items-center gap-2">
          {`${timeLeft.hours}시간 ${timeLeft.minutes}분 ${timeLeft.seconds}초`}
          <Image
            src={clock}
            alt="clock"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </section>
      )}
    </section>
  );
}
