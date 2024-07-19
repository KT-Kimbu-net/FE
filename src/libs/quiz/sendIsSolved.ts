"use server";
import { cookies } from "next/headers";

export type isSolvedRequest = {
  userId: string; // 유저 아이디
};

export async function sendIsSolved(userId: string): Promise<isSolvedRequest> {
  const url = `${process.env.NEXT_PUBLIC_BASEURL}/event/solved`;
  console.log("Sending isSolved to URL:", url); // URL 확인

  const token = cookies().get("token")?.value;
  if (!token) {
    throw new Error("Token is missing in cookiea");
  }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `${token}`, // 인증 토큰 추가
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        "Failed to send points:",
        response.statusText,
        errorData.message
      );
      throw new Error(`Failed to isSolved: ${errorData.message}`);
    }

    const data: isSolvedRequest = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending isSolved:", error);
    throw error;
  }
}
