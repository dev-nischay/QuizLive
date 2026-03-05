import type { StartQuizRequest } from "../../live.types";

export const startQuiz = (): StartQuizRequest => {
  return {
    type: "START_QUIZ",
  };
};
