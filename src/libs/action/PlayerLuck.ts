"use server";

import { cookies } from "next/headers";

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

export async function playerLuck(player: any) {
  const token = cookies().get("token")?.value;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/event/today_fortune`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(player),
        }
      );
      if (result.ok) {
        const data = await result.json();
        return { data, status: result.status };
      } else if (result.status === 500) {
        if (attempt === MAX_RETRIES - 1) {
          return { status: result.status };
        }
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        continue;
      } else {
        return { status: result.status };
      }
    } catch (error) {
      console.log(error);
    }
  }

  return { status: 500, error: "Max api call " };
}
