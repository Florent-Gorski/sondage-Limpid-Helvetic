import { useState } from "react";

import WelcomeScreen from "./components/WelcomeScreen";
import EmotionQuestion from "./components/EmotionQuestion";
import PriorityQuestion from "./components/PriorityQuestion";
import ClarityQuestion from "./components/ClarityQuestion";
import VisionQuestion from "./components/VisionQuestion";
import FinalScreen from "./components/FinalScreen";

type Step = "welcome" | "emotion" | "priority" | "clarity" | "vision" | "final";

export default function App()
{
  const [step, setStep] = useState<Step>("welcome");
  const [answers, setAnswers] = useState<{
    emotion?: string;
    priority?: string;
    clarity?: number;
    vision?: string;
  }>({});

  switch (step) {
    case "welcome":
      return <WelcomeScreen onStart={() => setStep("emotion")} />;

    case "emotion":
      return (
        <EmotionQuestion
          value={answers.emotion ?? null}
          onBack={() => setStep("welcome")}
          onValidate={(v) =>
          {
            setAnswers((a) => ({ ...a, emotion: v }));
            setStep("priority");
          }}
        />
      );

    case "priority":
      return (
        <PriorityQuestion
          value={answers.priority ?? null}
          onBack={() => setStep("emotion")}
          onValidate={(v) =>
          {
            setAnswers((a) => ({ ...a, priority: v }));
            setStep("clarity");
          }}
        />
      );

    case "clarity":
      return (
        <ClarityQuestion
          value={answers.clarity ?? null}
          onBack={() => setStep("priority")}
          onValidate={(v) =>
          {
            setAnswers((a) => ({ ...a, clarity: v }));
            setStep("vision");
          }}
        />
      );

    case "vision":
      return (
        <VisionQuestion
          value={answers.vision ?? null}
          onBack={() => setStep("clarity")}
          onValidate={(v) =>
          {
            setAnswers((a) => ({ ...a, vision: v }));
            setStep("final");
          }}
        />
      );

    default:
      return <FinalScreen onRestart={() => setStep("welcome")} />;
  }
}
