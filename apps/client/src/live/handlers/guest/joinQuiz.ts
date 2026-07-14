import type { JoinQuizRequest } from "../../live.types";

export const joinQuiz = (name: string): JoinQuizRequest => {
  return {
    type: "JOIN_ROOM",
    name,
  };
};
