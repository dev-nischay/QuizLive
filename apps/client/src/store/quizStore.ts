import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type QuizStoreType = {
  questionCount: number;
  title: string;
  hostedBy: string;

  setQuiz: (questionCount: number, title: string, hostedBy: string) => void;
};

export const useQuizStore = create<QuizStoreType>()(
  persist(
    (set) => ({
      questionCount: 0,
      roomCode: "",
      title: "",
      hostedBy: "",

      setQuiz: (questions, title, hostedBy) => {
        set({ questionCount: questions, title, hostedBy });
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
