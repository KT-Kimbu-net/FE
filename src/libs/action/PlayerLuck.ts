"use server";

import { cookies } from "next/headers";

export async function playerLuck() {
  const token = cookies().get("token")?.value;
  const sendData = {
    seasonsummary: {
      babip: "0",
      bb: 1,
      bf: 98,
      bk: 0,
      bs: 0,
      er: 15,
      era: "6.14",
      err: 0,
      fip: "0",
      fo: 19,
      gamenum: 4,
      go: 32,
      gyear: "2024",
      havg: "0.000",
      hit: 31,
      hold: 0,
      hp: 0,
      hr: 0,
      ib: 0,
      inn2: 66,
      innDisplay: "26",
      kbb: "15.000",
      kk: 15,
      l: 2,
      oavg: "0.323",
      pcode: "64001",
      playerName: "고영표",
      qs: 2,
      qsPlus: 1,
      r: 15,
      ravg: "0.000",
      sf: 1,
      sh: 0,
      sho: 0,
      start: 4,
      sv: 0,
      svo: 0,
      tugucount: 343,
      turfSave: 0,
      w: 2,
      wCg: 0,
      war: "0",
      whip: "1.45",
      winShares: "0",
      wl: "2-2",
      wp: 0,
      wra: "0.500",
    },
  };
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/event/today_fortune`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(sendData),
      }
    );
    if (result.ok) {
      const data = await result.json();
      return { data, status: result.status };
    }
  } catch (error) {
    console.log(error);
  }
}
