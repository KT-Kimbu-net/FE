"use server";

export async function getLeagueRanking() {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/today_rank`);
    if (result.ok) {
      const data = await result.json();
      return { data, status: result.status };
    }
  } catch (error) {
    console.log(error);
  }
}
