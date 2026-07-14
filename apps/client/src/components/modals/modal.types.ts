import type { Question } from "../quiz/quiz.types";

export type QuizCreateModalProps = {
  roomCode: string;
  questionCount: number;
  onClose: () => void;
  quizData: { title: string; questions: Question[] };
};

export type JoinQuizModalProps = {
  roomCode: string;
  onClose: () => void;
  onJoin: () => void;
};
