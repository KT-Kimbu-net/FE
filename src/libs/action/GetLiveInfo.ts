"use server";

export async function getLiveInfo() {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_CHAT_BASEURL}/liveinfo`
    );
    if (result.ok) {
      const data = await result.json();
      return { data: data, status: result.status };
    }
  } catch (error) {
    console.log(error);
  }
}
