export const countUntilEmpty = (arr: string[]): number => {
  const index = arr.findIndex((el) => el === "");
  return index === -1 ? arr.length : index;
};

export const calculateInningAndHalf = (kt: string[], opponent: string[]) => {
  const countKt = countUntilEmpty(kt);
  const countOpponent = countUntilEmpty(opponent);
  const totalCount = countKt + countOpponent;
  const inning = Math.ceil(totalCount / 2);
  const half = totalCount % 2 === 0 ? "bottom" : "top";
  return `${inning}회${half === "top" ? "초" : "말"}`;
};

export const calculateWinProbability = (
  ktScore: number,
  opponentScore: number,
  currentInning: number,
  ktInitialWinPercent: number
): number => {
  const inningWeights: { [inning: number]: number } = {
    1: 0.05,
    2: 0.1,
    3: 0.15,
    4: 0.2,
    5: 0.25,
    6: 0.3,
    7: 0.35,
    8: 0.4,
    9: 0.45,
  };

  if (currentInning === 0) return ktInitialWinPercent;
  const initialProb = ktInitialWinPercent / 100;
  const inningWeight = inningWeights[currentInning];
  const scoreDifference = ktScore - opponentScore;
  const maxScoreDifference = 10;
  const scoreAdjustmentFactor = Math.abs(scoreDifference) / maxScoreDifference; // 점수 차이에 따라 0 ~ 1 범위의 조정 비율

  let winProbability: number;
  if (scoreDifference > 0) {
    winProbability =
      initialProb + inningWeight * scoreAdjustmentFactor * (1 - initialProb);
  } else if (scoreDifference < 0) {
    winProbability =
      initialProb - inningWeight * scoreAdjustmentFactor * initialProb;
  } else {
    winProbability = initialProb;
  }

  // 승리 확률을 0 ~ 1 사이로 제한
  winProbability = Math.max(0, Math.min(winProbability, 1));

  // 승리 확률을 0 ~ 100 사이로 반환
  return Math.round(winProbability * 100);
};
