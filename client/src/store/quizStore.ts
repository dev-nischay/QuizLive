import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type QuizStoreType = {
  totalQuestions: number;
  roomCode: string;
  title: string;

  setQuiz: (questions: number, roomCode: string, title: string) => void;
};

export const useAuthStore = create<QuizStoreType>()(
  persist(
    (set) => ({
      totalQuestions: 0,
      roomCode: "",
      title: "",

      setQuiz: (questions, roomCode, title) => {
        set({ totalQuestions: questions, roomCode, title });
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
