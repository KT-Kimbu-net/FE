"use server";

import next from "next";

export async function getLiveInfo() {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_CHAT_BASEURL}/liveinfo`,
      {
        next: { revalidate: 0 },
      }
    );
    if (result.ok) {
      const data = await result.json();
      return { data: data, status: result.status };
    }
  } catch (error) {
    console.log(error);
  }
}
