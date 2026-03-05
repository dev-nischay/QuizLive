import type { ShowQuestionRequest } from "../../live.types";

export const showQuestion = (): ShowQuestionRequest => {
  return {
    type: "SHOW_QUESTION",
  };
};
