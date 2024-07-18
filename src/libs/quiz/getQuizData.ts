"use server";

import { cookies } from "next/headers";

export async function getQuizData() {
  const url = `${process.env.NEXT_PUBLIC_BASEURL}/event/today_quiz`;
  console.log("Fetching URL:", url); // URL 확인

  // const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기
  const token = cookies().get("token")?.value;

  if (!token) {
    throw new Error("Token is missing in localStorage");
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `${token}`, // 인증 토큰 추가
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        "Failed to fetch quiz data:",
        response.statusText,
        errorData.message
      );
      throw new Error(`Failed to fetch quiz data: ${errorData.message}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    throw error;
  }
}
