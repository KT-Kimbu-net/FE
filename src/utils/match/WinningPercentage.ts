export const calculateWinProbability = (
  initialProb: number, //초기 승률
  currentInning: number, //현재 이닝
  isLeading: boolean //이기고 있는지) =>{
) => {
  // 이닝별 가중치 (후반으로 갈수록 증가)
  const inningWeights: { [key: number]: number } = {
    1: 0.55,
    2: 0.6,
    3: 0.65,
    4: 0.7,
    5: 0.75,
    6: 0.8,
    7: 0.85,
    8: 0.9,
    9: 0.95,
  };

  // 입력값 유효성 검사
  if (initialProb < 0 || initialProb > 1) {
    throw new Error("초기 승률은 0에서 1 사이의 값이어야 합니다.");
  }
  if (
    currentInning < 1 ||
    currentInning > 9 ||
    !Number.isInteger(currentInning)
  ) {
    throw new Error("현재 이닝은 1에서 9 사이의 정수여야 합니다.");
  }

  // 현재 이닝의 가중치
  const currentWeight: number = inningWeights[currentInning];

  // 현재 상황에 기반한 승률
  const scoreBadedProb: number = isLeading ? currentWeight : 1 - currentWeight;

  // 초기 예측 승률의 영향력 계산 (후반으로 갈수록 감소)
  const initialWeight: number = 1 - (currentInning - 1) / 8;

  // 최종 승률 계산
  const finalProb: number =
    initialProb * initialWeight + scoreBadedProb * (1 - initialWeight);

  return finalProb;
};

// 사용 예시
// try {
//   const initialProb: number = 0.6; // 초기 승률 60%
//   const currentInning: number = 7; // 현재 7회
//   const isLeading: boolean = true; // 현재 이기고 있음

//   const winProb: number = calculateWinProbability(
//     initialProb,
//     currentInning,
//     isLeading
//   );
//   console.log(`현재 승률: ${(winProb * 100).toFixed(2)}%`);
// } catch (error) {
//   console.error("에러 발생:", (error as Error).message);
// }
