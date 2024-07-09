import { NextResponse } from "next/server";

const problems: { [key: string]: { question: string; answer: number } } = {
  1: {
    question:
      "2024년부터 KBO에서는 경기가 진행 중일 때 주자가 베이스를 돌고 있을 때, 상대 수비수가 주자를 고의로 방해하면 주자에게 추가 진루가 허용된다.",
    answer: 1, // true
  },
  2: {
    question:
      "2024년 개정된 규칙에 따르면, 경기가 진행 중일 때 투수가 공을 던지지 않고 1루로 발을 움직이면 보크가 선언된다",
    answer: 1, // true
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id || !problems[id]) {
    return NextResponse.json({ error: "Problem not found" }, { status: 404 });
  }

  return NextResponse.json(problems[id]);
}
