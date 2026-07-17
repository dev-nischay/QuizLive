import type { StartQuizRequest } from "@common/contracts";

export const startQuiz = (): StartQuizRequest => {
  return {
    type: "START_QUIZ",
  };
};
