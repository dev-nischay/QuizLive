import { create } from "zustand";
import type { LeaderBoard, SubmitAnswerResponse } from "@common/contracts";
import type { Options, Question } from "@common/contracts";

type CurrentQuestion = Pick<Question, "text" | "options"> & { correctOptionIndex?: Options };
type LivePhase = "lobby" | "active" | "results";
type LiveSession = {
  phase: LivePhase;
  currentQuestion: CurrentQuestion | null;
  liveUsers: string[];
  leaderBoard: LeaderBoard[];
  currentAnswer: Omit<SubmitAnswerResponse, "type"> | null;
  setPhase: (phase: LivePhase) => void;
  setAnswer: (answer: Omit<SubmitAnswerResponse, "type">) => void;
  setQuestion: (question: CurrentQuestion) => void;
  setLeaderBoard: (leaderBoard: LeaderBoard[]) => void;
  setLivePlayers: (users: string[]) => void;
};

export const useLiveStore = create<LiveSession>((set) => ({
  phase: "lobby",
  currentAnswer: null,
  currentQuestion: null,
  liveUsers: [],
  leaderBoard: [],

  setQuestion: (question) => {
    set({ currentQuestion: question });
  },

  setLeaderBoard: (leaderBoard) => {
    set({ leaderBoard: leaderBoard });
  },

  setLivePlayers: (liveUsers) => {
    set({ liveUsers: liveUsers });
  },

  setAnswer: (answer) => {
    set({ currentAnswer: answer });
  },
  setPhase: (phase) => {
    set({ phase });
  },
}));
