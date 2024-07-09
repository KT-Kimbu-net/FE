"use client";

import WeekSchedule from "@/components/WeekSchedule/WeekSchedule";
import LeagueRanking from "@/components/LeagueRanking/LeagueRanking";
import Notice from "@/components/Notice/Notice";
import GameInfo from "@/components/GameInfo/GameInfo";
import Shortcuts from "@/components/Shortcuts/Shortcuts";
import MatchBet from "@/components/MatchBet/MatchBet";
import Sponsor from "@/components/Sponsor/Sponsor";
import Chatting from "@/components/Chatting/Chatting";
import Floating from "@/components/Floating/Floating";
import Header from "@/components/header/Header";
import Image from "next/image";
import { useModalState } from "@/store/modal";

export default function Page() {
  const { setModalName } = useModalState();
  return (
    <>
      <section>
        <section className="p-10 w-full flex flex-col gap-12 bg-[url('/img/BgImage.svg')]">
          <section className="flex gap-14">
            <GameInfo />
            <Chatting />
          </section>
          <section className="flex gap-14">
            <Shortcuts />
            <MatchBet />
          </section>
        </section>
      </section>
      <WeekSchedule />
      <LeagueRanking />
      <Notice />
      <Sponsor />
      <Floating />
    </>
  );
}
