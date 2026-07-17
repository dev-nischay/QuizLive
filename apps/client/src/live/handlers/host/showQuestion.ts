import type { ShowQuestionRequest } from "@common/contracts";

export const showQuestion = (): ShowQuestionRequest => {
  return {
    type: "SHOW_QUESTION",
  };
};
