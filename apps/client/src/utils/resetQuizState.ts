import { useAuthStore } from "../store/authStore";
import { useQuizStore } from "../store/quizStore";
import { useLiveStore } from "../store/liveStore";
import { useRoomStore } from "../store/roomStore";

export const resetQuizState = () => {
  const resetRole = useAuthStore.getState().setRole;
  const resetLiveSession = useLiveStore.getState().reset;
  const resetQuiz = useQuizStore.getState().reset;
  const resetRoomCode = useRoomStore.getState().reset;
  console.log("reset ran");
  resetRole(null);
  resetLiveSession();
  resetQuiz();
  resetRoomCode();
  window.location.replace("/home");
  // local storage cleanup + redirecting user back to home
};
