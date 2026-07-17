import type { StopQuizRequest } from "@common/contracts";

export const endQuiz = (): StopQuizRequest => {
  return {
    type: "STOP_QUIZ",
  };
};
