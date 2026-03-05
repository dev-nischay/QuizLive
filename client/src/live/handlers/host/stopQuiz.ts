import type { StopQuizRequest } from "../../live.types";

export const endQuiz = (): StopQuizRequest => {
  return {
    type: "STOP_QUIZ",
  };
};
