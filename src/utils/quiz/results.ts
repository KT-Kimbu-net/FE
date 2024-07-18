type TAnswers = {
  question: string;
  answer: string; // O,X로 들어옴
  explanation: string;
  userAnswer: boolean | null;
};

export const getResults = (answers: TAnswers[]): (boolean | null)[] => {
  const results = [null, false, false]; // 0번 인덱스를 비워두고, 초기값을 false로 설정
  if (answers[1]) {
    results[1] = (answers[1].answer === "O") === answers[1].userAnswer;
  }
  if (answers[2]) {
    results[2] = (answers[2].answer === "O") === answers[2].userAnswer;
  }
  return results;
};

export const calculatePoints = (answers: TAnswers[]): number => {
  const results = getResults(answers);
  let points = 30; // 기본 참여 포인트

  if (results[1]) {
    points += 30;
  }
  if (results[2]) {
    points += 40;
  }

  return points;
};
