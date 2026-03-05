import type { OptionIndex } from "../../../components/quiz/quiz.types";
import type { SubmitAnswerRequest } from "../../live.types";

export const submitAnswer = (selectedOptionIndex: OptionIndex): SubmitAnswerRequest | void => {
  if (typeof selectedOptionIndex !== "number") {
    return console.error("Invalid data");
  }

  return {
    type: "SUBMIT_ANSWER",
    selectedOptionIndex,
  };
};
