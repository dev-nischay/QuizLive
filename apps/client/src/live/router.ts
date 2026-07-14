import type { ServerResponse } from "./live.types";
import { useLiveStore } from "../store/liveStore";

export const messageRouter = (response: ServerResponse) => {
  const { phase, setQuestion, setLivePlayers, setLeaderBoard, setAnswer, setPhase } = useLiveStore.getState();

  switch (response.type) {
    case "QUESTION":
      if (phase === "lobby") {
        setPhase("active");
      }
      const { text, options, correctOptionIndex } = response; // correctOptionIndex only available for host will remain undefined for other
      setQuestion({ text, options, correctOptionIndex });
      break;

    case "ANSWER_RESULT":
      const { accepted, correct, yourScore, message, correctAnswerIndex } = response;
      setAnswer({ correctAnswerIndex, accepted, yourScore, correct, message });
      break;

    case "LOBBY":
      setLivePlayers(response.users);
      // update lobby
      break;

    case "QUIZ_COMPLETED":
      setPhase("results");
      // handle quiz completed
      break;

    case "QUIZ_STARTED":
      // redirect to live page
      break;

    case "QUIZ_STOPPED":
      setPhase("results");
      break;

    case "ERROR":
      console.log(response.error);
      // redirect error
      break;

    case "LEADERBOARD":
      const { data } = response;
      setLeaderBoard(data);
      // update leaderboard
      break;

    default:
      // handle unkown response
      break;
  }
};
