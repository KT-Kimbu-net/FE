"use server";

import { cookies } from "next/headers";

export async function nickChangeAction(formData: FormData) {
  const nickname = {
    nickname: "",
  };

  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  const changeNickname = formData.get("nickname");
  nickname.nickname = changeNickname as string;

  if (!nickname.nickname.trim()) return { errorType: "NO_INPUT" };
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/user/nick`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(nickname),
    });
    if (result.ok) {
      const data = await result.json();
      return { data, status: result.status };
    }
  } catch (error) {
    console.log(error);
  }
}
