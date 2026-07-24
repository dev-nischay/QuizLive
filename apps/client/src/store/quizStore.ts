import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type QuizStoreType = {
  questionCount: number;
  title: string;
  hostedBy: string;

  setQuiz: (questionCount: number, title: string, hostedBy: string) => void;
  reset: () => void;
};
const initialState = {
  questionCount: 0,
  roomCode: "",
  title: "",
  hostedBy: "",
};

export const useQuizStore = create<QuizStoreType>()(
  persist(
    (set) => ({
      ...initialState,

      setQuiz: (questions, title, hostedBy) => {
        set({ questionCount: questions, title, hostedBy });
      },

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: "quiz-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        state,
      }),
    },
  ),
);
