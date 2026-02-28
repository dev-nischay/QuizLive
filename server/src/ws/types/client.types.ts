export type JoinQuizRequest = {
  type: "JOIN_ROOM";
  name: string;
};

export type StartQuizRequest = {
  type: "START_QUIZ";
};

export type ShowQuestionRequest = {
  type: "SHOW_QUESTION";
};

export type StopQuizRequest = {
  type: "STOP_QUIZ";
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
