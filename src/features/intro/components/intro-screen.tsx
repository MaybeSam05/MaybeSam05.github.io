"use client";

import { useCallback, useEffect, useState } from "react";

import { getProbabilityStyles } from "@/features/shared/lib/probability";

import { TypewriterText } from "./typewriter-text";

const introLines = [
  "Welcome to Samarth's case file.",
  "Explore projects, credentials, and experience to reduce the probability of unemployment.",
  "Begin the assessment when ready.",
];

const unemploymentProbability = 92;
const moduleRevealDelay = 650;

type IntroScreenProps = {
  onBeginAssessment?: () => void;
};

export function IntroScreen({ onBeginAssessment }: IntroScreenProps) {
  const [showOuterFrame, setShowOuterFrame] = useState(false);
  const [showInnerScreen, setShowInnerScreen] = useState(false);
  const [showHeaderText, setShowHeaderText] = useState(false);
  const [showCaseFileText, setShowCaseFileText] = useState(false);
  const [showTerminalPanel, setShowTerminalPanel] = useState(false);
  const [showTerminalText, setShowTerminalText] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [visibleModules, setVisibleModules] = useState(0);
  const [showProbabilityFill, setShowProbabilityFill] = useState(false);
  const probabilityStyles = getProbabilityStyles(unemploymentProbability);

  const handleHeaderComplete = useCallback(() => {
    setShowCaseFileText(true);
  }, []);

  const handleCaseFileComplete = useCallback(() => {
    setShowTerminalPanel(true);
  }, []);

  const handleIntroComplete = useCallback(() => {
    setShowActions(true);
    setVisibleModules(1);
  }, []);

  useEffect(() => {
    const outerFrameTimer = setTimeout(() => {
      setShowOuterFrame(true);
    }, 300);

    const innerScreenTimer = setTimeout(() => {
      setShowInnerScreen(true);
    }, 1100);

    const headerTimer = setTimeout(() => {
      setShowHeaderText(true);
    }, 1950);

    return () => {
      clearTimeout(outerFrameTimer);
      clearTimeout(innerScreenTimer);
      clearTimeout(headerTimer);
    };
  }, []);

  useEffect(() => {
    if (visibleModules === 0) {
      return;
    }

    if (visibleModules >= 3) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setVisibleModules((currentValue) => currentValue + 1);
    }, moduleRevealDelay);

    return () => clearTimeout(timeoutId);
  }, [visibleModules]);

  useEffect(() => {
    if (!showTerminalPanel) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setShowTerminalText(true);
    }, 900);

    return () => clearTimeout(timeoutId);
  }, [showTerminalPanel]);

  useEffect(() => {
    if (visibleModules < 1) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setShowProbabilityFill(true);
    }, 320);

    return () => clearTimeout(timeoutId);
  }, [visibleModules]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-emerald-50">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#020202_0%,_#000000_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(110,231,183,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(110,231,183,0.035)_1px,transparent_1px)] bg-[size:88px_88px] opacity-20" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-8 sm:px-8 lg:px-12">
        <div
          className={`w-full rounded-[1.95rem] border border-emerald-300/12 bg-black/20 p-3 shadow-[0_0_80px_rgba(16,185,129,0.08)] transition-all duration-700 sm:p-5 ${
            showOuterFrame
              ? "scale-100 opacity-100"
              : "scale-[0.985] opacity-0"
          }`}
        >
          <div
            className={`rounded-[1.6rem] border border-emerald-300/12 bg-[linear-gradient(180deg,rgba(5,5,5,0.98),rgba(0,0,0,0.99))] p-4 transition-all duration-700 sm:p-6 lg:p-8 ${
              showInnerScreen
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            <div className="flex items-center justify-between gap-4 border-b border-emerald-300/12 pb-4 text-[0.64rem] uppercase tracking-[0.34em] text-emerald-100/48 sm:text-[0.68rem]">
              <span>
                {showHeaderText ? (
                    <TypewriterText
                      text="Subject Assessment Interface"
                      speed={42}
                      startDelay={0}
                      onComplete={handleHeaderComplete}
                      cursorWhileTypingOnly
                  />
                ) : null}
              </span>
              <span>
                {showCaseFileText ? (
                    <TypewriterText
                      text="Case File 001"
                      speed={44}
                      startDelay={280}
                      onComplete={handleCaseFileComplete}
                      cursorWhileTypingOnly
                  />
                ) : null}
              </span>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div
                className={`rounded-[1.4rem] border border-emerald-300/10 bg-black/40 p-5 transition-all duration-700 sm:p-7 ${
                  showTerminalPanel
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
                }`}
              >
                <div className="flex items-center gap-3 text-[0.64rem] uppercase tracking-[0.34em] text-emerald-200/56">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.95)]" />
                  Initializing Subject Review
                </div>

                <div className="mt-8 max-w-3xl font-mono text-sm leading-8 text-emerald-100/78 sm:text-[0.96rem]">
                  <p className="text-emerald-300/64">&gt; boot sequence / welcome</p>
                  {showTerminalText ? (
                    <div className="mt-5 space-y-4">
                      <p>
                        <TypewriterText text={introLines[0]} speed={54} startDelay={500} />
                      </p>
                      <p className="text-emerald-200/62">
                        <TypewriterText
                          text={introLines[1]}
                          speed={28}
                          startDelay={3200}
                        />
                      </p>
                      <p className="text-emerald-200/62">
                        <TypewriterText
                          text={introLines[2]}
                          speed={42}
                          startDelay={9200}
                          onComplete={handleIntroComplete}
                        />
                      </p>
                    </div>
                  ) : null}
                </div>

                <div
                  className={`mt-10 flex justify-center transition-all duration-700 ${
                    showActions
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0"
                  }`}
                >
                  <button
                    type="button"
                    onClick={onBeginAssessment}
                    className="group relative inline-flex min-w-[18rem] items-center justify-center overflow-hidden rounded-full border border-emerald-200/22 bg-white/8 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.32em] text-emerald-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_0_24px_rgba(110,231,183,0.12)] backdrop-blur-xl transition duration-300 hover:border-emerald-200/40 hover:bg-white/12"
                  >
                    <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-80" />
                    <span className="absolute inset-y-1 left-3 w-1/3 rounded-full bg-white/12 blur-xl transition duration-300 group-hover:bg-white/16" />
                    <span className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03)_36%,rgba(16,185,129,0.08))]" />
                    <span className="relative">Begin Assessment</span>
                  </button>
                </div>
              </div>

              <div className="grid gap-4">
                <div
                  className={`overflow-hidden rounded-[1.4rem] p-5 sm:p-6 transition-all duration-700 ${probabilityStyles.panelClass} ${
                    visibleModules >= 1
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-4 opacity-0"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className={`text-[0.65rem] uppercase tracking-[0.3em] ${probabilityStyles.muted}`}
                      >
                        Probability of Unemployment
                      </p>
                      <p
                        className={`mt-3 font-mono text-6xl font-light tracking-[-0.08em] sm:text-7xl ${probabilityStyles.accent}`}
                      >
                        {unemploymentProbability}%
                      </p>
                    </div>
                    <div
                      className={`rounded-full border px-4 py-2 text-[0.65rem] uppercase tracking-[0.28em] ${probabilityStyles.badgeClass}`}
                    >
                      {probabilityStyles.badge}
                    </div>
                  </div>

                  <div className="mt-7 h-4 rounded-full border border-emerald-300/12 bg-emerald-950/70 p-1">
                    <div
                      className={`h-full rounded-full transition-[width] duration-[1800ms] ease-out ${probabilityStyles.barClass}`}
                      style={{ width: showProbabilityFill ? `${unemploymentProbability}%` : "0%" }}
                    />
                  </div>
                </div>

                <div
                  className={`rounded-[1.25rem] border border-emerald-300/10 bg-black/40 p-5 transition-all duration-700 ${
                    visibleModules >= 2
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-4 opacity-0"
                  }`}
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-emerald-100/44">
                    Review Type
                  </p>
                  <p className="mt-3 font-mono text-sm uppercase tracking-[0.24em] text-emerald-300/88">
                    Employability Audit
                  </p>
                </div>

                <div
                  className={`rounded-[1.25rem] border border-emerald-300/10 bg-black/40 p-5 transition-all duration-700 ${
                    visibleModules >= 3
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-4 opacity-0"
                  }`}
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-emerald-100/44">
                    Current Verdict
                  </p>
                  <p className="mt-3 font-mono text-sm uppercase tracking-[0.24em] text-emerald-300/88">
                    Further review required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
