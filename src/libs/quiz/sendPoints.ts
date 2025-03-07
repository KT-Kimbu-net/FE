"use server";

import { cookies } from "next/headers";

export type PointsResponse = {
  pointAmount: number; // 변경된 포인트 총량
};

export async function sendPoints(amount: number): Promise<PointsResponse> {
  const url = `${process.env.NEXT_PUBLIC_BASEURL}/user/edit_point`;

  const token = cookies().get("token")?.value;
  if (!token) {
    throw new Error("Token is missing in localStorage");
  }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `${token}`, // 인증 토큰 추가
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "add",
        amount: amount,
        content: "데일리 퀴즈 완료~",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        "Failed to send points:",
        response.statusText,
        errorData.message
      );
      throw new Error(`Failed to send points: ${errorData.message}`);
    }

    const data: PointsResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending points:", error);
    throw error;
  }
}
