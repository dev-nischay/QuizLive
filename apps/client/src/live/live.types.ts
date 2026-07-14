import type { OptionIndex, Question } from "../components/quiz/quiz.types";

export type JoinResponse = {
  type: "USER_JOINED";
  message: string;
};

export type StartResponse = {
  type: "QUIZ_STARTED";
  quizId: string;
  message: string;
};

export type QuestionResponse = Pick<Question, "text" | "options"> & {
  type: "QUESTION";
  quizId: string;
  questionId: string;
  correctOptionIndex?: OptionIndex;
};

export type SubmitAnswerResponse = {
  type: "ANSWER_RESULT";
  accepted: boolean;
  correct?: boolean;
  correctAnswerIndex: OptionIndex;
  yourScore: number;
  message: string;
};

export type ServerError = {
  type: "ERROR";
  error: string;
  details?: {};
};

export type LeaderboardUpdates = {
  type: "LEADERBOARD";
  message: string;
  data: LeaderBoard[];
};

export type LobbyUpdates = {
  type: "LOBBY";
  users: string[];
};

export type QuizCompleted = {
  type: "QUIZ_COMPLETED";
  message: string;
};

export type GeneralResponse = {
  type: "RESPONSE";
  message: string;
};

export type StopQuizResponse = {
  type: "QUIZ_STOPPED";
  message: string;
};

export type ServerResponse =
  | JoinResponse
  | StartResponse
  | QuestionResponse
  | SubmitAnswerResponse
  | ServerError
  | LeaderboardUpdates
  | QuizCompleted
  | GeneralResponse
  | LobbyUpdates
  | StopQuizResponse;

export type LeaderBoard = {
  name: string;
  score: number;
};

export type JoinQuizRequest = {
  type: "JOIN_ROOM";
  name: string;
};

export type StartQuizRequest = {
  type: "START_QUIZ";
};

export type StopQuizRequest = {
  type: "STOP_QUIZ";
};

export type ShowQuestionRequest = {
  type: "SHOW_QUESTION";
};

export type SubmitAnswerRequest = {
  type: "SUBMIT_ANSWER";
  // questionId: string;
  selectedOptionIndex: 0 | 1 | 2 | 3;
};

export type ShowResultRequest = {
  type: "SHOW_RESULT";
  questionId: string;
};

export type LeaverQuizRequest = {
  type: "LEAVE_QUIZ";
};

export type ClientResponse =
  | JoinQuizRequest
  | ShowQuestionRequest
  | SubmitAnswerRequest
  | ShowResultRequest
  | StartQuizRequest
  | StopQuizRequest;
