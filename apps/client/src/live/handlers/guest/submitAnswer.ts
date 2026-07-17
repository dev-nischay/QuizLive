import type { SubmitAnswerRequest, Options } from "@common/contracts";

export const submitAnswer = (selectedOptionIndex: Options): SubmitAnswerRequest | void => {
  if (typeof selectedOptionIndex !== "number") {
    return console.error("Invalid data");
  }

  return {
    type: "SUBMIT_ANSWER",
    selectedOptionIndex,
  };
};
