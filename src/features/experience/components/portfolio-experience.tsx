"use client";

import { useState } from "react";

import { AssessmentHome } from "@/features/assessment";
import { IntroScreen } from "@/features/intro";

export function PortfolioExperience() {
  const [currentScreen, setCurrentScreen] = useState<"intro" | "assessment">(
    "intro",
  );

  if (currentScreen === "assessment") {
    return <AssessmentHome />;
  }

  return <IntroScreen onBeginAssessment={() => setCurrentScreen("assessment")} />;
}
