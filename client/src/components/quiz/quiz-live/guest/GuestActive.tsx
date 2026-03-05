import { useEffect, useState } from "react";
import { useLiveStore } from "../../../../store/liveStore";
import { Users, CheckCircle, XCircle, Clock } from "lucide-react";
import { useQuizStore } from "../../../../store/quizStore";
import { useShallow } from "zustand/shallow";
import { socketService } from "../../../../live/socket-client";
import { submitAnswer } from "../../../../live/handlers/guest/submitAnswer";
import type { OptionIndex } from "../../quiz.types";

export default function GuestActive() {
  const [gameState, setGameState] = useState<"active" | "answered">("active");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [counter, setCoutner] = useState(1);
  const [question, answer, liveUsers] = useLiveStore(
    useShallow((state) => [state.currentQuestion, state.currentAnswer, state.liveUsers]),
  );

  const quizData = useQuizStore(
    useShallow((state) => ({ title: state.title, totalQuestions: state.questionCount, hostName: state.hostedBy })),
  );

  const handleAnswerSelect = (index: number) => {
    if (gameState !== "active") return;
    socketService.sendMessage(submitAnswer(index as OptionIndex)!);
    setSelectedAnswer(index);
    setGameState("answered");
    setCoutner((counter) => counter + 1);
  };

  useEffect(() => {
    setGameState("active");
    setSelectedAnswer(null);
  }, [question]);

  const showResult = gameState === "answered";

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {/* Question Header */}
          <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-emerald-500/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-xs font-mono text-emerald-400 mb-2">
                  QUESTION {counter} OF {quizData.totalQuestions}
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Users className="w-4 h-4" />
                  <span className="font-mono pt-2">{liveUsers.length} players answering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-emerald-500/30 rounded-2xl p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-relaxed mb-8">{question?.text}</h2>

            {/* Answer Options */}
            <div className="grid gap-4">
              {question!.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === answer?.correctAnswerIndex;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      showResult && isCorrect
                        ? "bg-emerald-500/20 border-emerald-500"
                        : showResult && isSelected && !isCorrect
                          ? "bg-red-500/20 border-red-500"
                          : isSelected && !showResult
                            ? "bg-emerald-500/20 border-emerald-500 scale-[1.02]"
                            : "bg-black/50 border-gray-700 hover:border-emerald-500/50 hover:bg-black/70"
                    } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-lg font-mono transition-all ${
                          showResult && isCorrect
                            ? "bg-emerald-500 text-white"
                            : showResult && isSelected && !isCorrect
                              ? "bg-red-500 text-white"
                              : isSelected && !showResult
                                ? "bg-emerald-500 text-white"
                                : "bg-gray-800 text-gray-400"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-white font-medium text-base sm:text-lg flex-1">{option}</span>
                      {showResult && isCorrect && <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Answer Status */}
            {showResult && (
              <div className="mt-6 p-4 bg-black/50 border border-gray-800 rounded-xl">
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <Clock className="w-5 h-5" />
                  <span className="font-mono text-sm">Waiting for host to display next question </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
