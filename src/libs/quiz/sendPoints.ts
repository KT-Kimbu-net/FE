export type PointsResponse = {
  pointAmount: number; // 변경된 포인트 총량
};

export async function sendPoints(amount: number): Promise<PointsResponse> {
  const url = `${process.env.NEXT_PUBLIC_BASEURL}/user/edit_point`;
  console.log("Sending points to URL:", url); // URL 확인

  const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기
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
