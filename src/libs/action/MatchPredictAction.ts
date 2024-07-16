"use server";

export async function matchPredictAction() {
  const testData = {
    info: {
      opponentTeam: "NC 0.42",
      pastWinRate: "0.666",
      recentWinRate: "0.589",
      stadiumInformation: "수원구장 0.7",
      startingPitcherInformation: "고영표 0.999",
      weather: "우천 0.7",
    },
  };

  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });
    const data = await result.json();
    return { predictData: data.predictWinRate };
  } catch (error) {
    console.log(error);
  }
}
