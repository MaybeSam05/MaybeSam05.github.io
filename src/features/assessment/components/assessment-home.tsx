"use client";

import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";

import { TypewriterText } from "@/features/intro/components/typewriter-text";
import { getProbabilityStyles } from "@/features/shared/lib/probability";

import { evidenceItems } from "../data/evidence-items";

const initialProbability = 92;
const contactOverlayDelay = 2200;

type ModuleOverlayProps = {
  activeModule: (typeof evidenceItems)[number];
  onClose: () => void;
};

type ContactOverlayProps = {
  onClose: () => void;
};

type AnimatedCarouselCardProps = {
  index: number;
  children: ReactNode;
};

function AnimatedCarouselCard({ index, children }: AnimatedCarouselCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 140 + index * 130);

    return () => clearTimeout(timeoutId);
  }, [index]);

  return (
    <div
      className={`shrink-0 transition-all duration-500 ease-out ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-4 scale-[0.985] opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

const experienceEntries = [
  {
    company: "GEICO",
    role: "Software Engineer Intern",
    period: "June 2026 - Present",
    location: "New York, NY",
    bullets: ["Incoming Summer 2026 Intern"],
  },
  {
    company: "Rutgers-Web",
    role: "Software Engineer Intern",
    period: "August 2025 - Present",
    location: "New Brunswick, NJ",
    bullets: [
      "Resolved 50+ tickets across bug fixes and features for a 150K+ user platform",
      "Built a parking module synced with Rutgers APIs for permits, rules, and EV support",
      "Developed a dashboard integrating 250+ Rutgers services into one interface",
    ],
  },
  {
    company: "VoiceBoticsAI",
    role: "Software Engineer Intern",
    period: "January 2025 - August 2025",
    location: "Tampa, FL",
    bullets: [
      "Built a scraping pipeline ingesting 1500+ yacht listings daily into PostgreSQL",
      "Developed a PHP/WordPress frontend serving live listings directly from the database",
      "Built a React dashboard that reduced manual review by 90%",
    ],
  },
  {
    company: "ProspectorAI",
    role: "Software Engineer Intern",
    period: "November 2024 - January 2025",
    location: "Berkeley, CA",
    bullets: [
      "Built a Zillow lead-generation pipeline tied to $600K in revenue",
      "Integrated an open-source image staging model for empty property photos",
      "Automated personalized realtor outreach and improved purchase rate by 40%",
    ],
  },
];

const skillEntries = [
  {
    section: "Languages",
    label: "Core Stack",
    items: ["Python", "TypeScript", "JavaScript", "Go", "Java", "SQL"],
  },
  {
    section: "Frontend",
    label: "Interface Work",
    items: ["React", "TypeScript", "JavaScript", "GraphQL"],
  },
  {
    section: "Backend",
    label: "Service Layer",
    items: ["FastAPI", "PostgreSQL", "MongoDB", "Kafka", "AWS"],
  },
  {
    section: "Infra",
    label: "Systems",
    items: ["Kubernetes", "Docker", "Git", "CI/CD", "Distributed Systems", "Concurrency"],
  },
  {
    section: "Execution",
    label: "Applied Areas",
    items: [
      "Full-Stack Development",
      "Backend Development",
      "Data Engineering",
      "Machine Learning",
      "Automation Workflows",
    ],
  },
];

const leadershipEntries = [
  {
    section: "Teaching",
    label: "Recitations",
    items: [
      "Led 3 weekly recitations for 45+ students on algorithms and data structures",
      "Ran problem-solving sessions focused on implementation and reasoning",
    ],
  },
  {
    section: "Outcomes",
    label: "Student Growth",
    items: [
      "Designed weekly quizzes and assignments for consistent reinforcement",
      "Helped students improve from 30-40% to 85-100% on pre/post quizzes",
    ],
  },
  {
    section: "Execution",
    label: "Course Support",
    items: [
      "Developed coding assignments with method outlines and hands-on implementation",
      "Reinforced class concepts through structured practice and direct feedback",
    ],
  },
];

const dossierEntries = [
  {
    section: "Profile",
    label: "Subject Overview",
    items: [
      "Samarth Verma",
      "Computer Science and Data Science student",
      "Rutgers University - New Brunswick",
      "Expected May 2028",
    ],
  },
  {
    section: "Education",
    label: "Academic Record",
    items: [
      "Bachelor of Science in Computer Science and Data Science",
      "GPA: 3.8",
      "Strong academic signal paired with production internship experience",
    ],
  },
  {
    section: "Links",
    label: "Public Presence",
    items: [
      "maybesam05.github.io",
      "linkedin.com/in/samarth-verma2005",
      "github.com/MaybeSam05",
    ],
  },
  {
    section: "Contact",
    label: "Direct Reach",
    items: [
      "samarthverma1108@gmail.com",
      "Open to internship and software engineering opportunities",
    ],
  },
];

const projectEntries = [
  {
    section: "Bridger",
    label: "1st Overall - Born to Build",
    href: "https://chromewebstore.google.com/detail/bridger-linkedin-connecti/jgfbgbbhnpohdheagolckahiedhjjbgl",
    hrefLabel: "Chrome Store",
    items: [
      "Built a TypeScript Chrome Extension with 50+ active users that scrapes and stores LinkedIn profiles for reuse",
      "Designed a context-aware LLM flow that cut draft time by 90%",
      "Implemented OAuth2 Google authentication and Gmail API one-click delivery",
    ],
  },
  {
    section: "Kubernetes",
    label: "Open Source Contribution",
    href: "https://github.com/kubernetes/kubernetes/commit/b75d1f6dca60658a5b293e4cedb90cdb4f0b3293",
    hrefLabel: "Commit",
    items: [
      "Fixed scheduler inFlightPods memory leak and stale state caused by pod UID changes",
      "Contributed in Go within a distributed systems codebase under CNCF",
    ],
  },
  {
    section: "PyTorch",
    label: "Open Source Contribution",
    href: "https://github.com/pytorch/pytorch/commit/4323649f842fb1f72b6dede5b188173910201af8",
    hrefLabel: "Commit",
    items: [
      "Enhanced torch.dynamo error handling for GuardOnDataDependentSymNode",
      "Improved exception chaining in a large-scale Python ML framework",
    ],
  },
  {
    section: "Docker Compose",
    label: "Open Source Contribution",
    href: "https://github.com/docker/compose/commit/02aaf253c8c264f881270864f3212b582c99b559",
    hrefLabel: "Commit",
    items: [
      "Fixed TTY progress timer layout rendering bug",
      "Added regression tests and shipped in Docker Compose v5.1.2",
    ],
  },
];

function ExperienceCarousel() {
  return (
    <div className="mt-5 space-y-3">
      <div className="flex items-center justify-between gap-4 rounded-[1.1rem] border border-emerald-300/10 bg-black/35 px-4 py-3 sm:px-5">
        <div>
          <p className="text-[0.58rem] uppercase tracking-[0.28em] text-emerald-100/38">
            Experience Record
          </p>
          <p className="mt-2 text-sm leading-6 text-emerald-50/66 sm:text-[0.92rem]">
            Scroll horizontally through internship evidence from left to right.
          </p>
        </div>
        <p className="hidden font-mono text-[0.62rem] uppercase tracking-[0.24em] text-emerald-300/60 sm:block">
          Swipe / Scroll
        </p>
      </div>

      <div className="overflow-x-auto pb-2 [scrollbar-color:rgba(74,222,128,0.4)_transparent] [scrollbar-width:thin]">
        <div className="flex min-w-max gap-3 pr-2">
          {experienceEntries.map((entry, index) => (
            <AnimatedCarouselCard key={entry.company} index={index}>
              <article className="relative w-[15.5rem] overflow-hidden rounded-[1.2rem] border border-emerald-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_34%,rgba(16,185,129,0.04))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(110,231,183,0.04)] backdrop-blur-md sm:w-[17rem]">
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80" />
                <div className="absolute right-0 top-4 h-20 w-24 rounded-full bg-emerald-200/10 blur-2xl" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.56rem] uppercase tracking-[0.28em] text-emerald-100/34">
                        Position {index + 1}
                      </p>
                      <h3 className="mt-2.5 font-mono text-lg uppercase tracking-[0.14em] text-emerald-300/92 sm:text-[1.15rem]">
                        {entry.company}
                      </h3>
                      <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-emerald-100/66 sm:text-[0.78rem]">
                        {entry.role}
                      </p>
                    </div>

                    <div className="rounded-full border border-emerald-300/12 bg-white/[0.05] px-2.5 py-1 text-[0.46rem] uppercase tracking-[0.2em] text-emerald-200/62">
                      Logged
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 text-[0.53rem] uppercase tracking-[0.2em] text-emerald-100/38">
                    <span className="rounded-full border border-emerald-300/10 bg-black/25 px-2.5 py-1.5">
                      {entry.period}
                    </span>
                    <span className="rounded-full border border-emerald-300/10 bg-black/25 px-2.5 py-1.5">
                      {entry.location}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    {entry.bullets.map((bullet) => (
                      <p
                        key={bullet}
                        className="pl-4 text-[0.86rem] leading-5.5 text-emerald-50/68"
                      >
                        <span className="-ml-4 mr-2 text-emerald-300/70">-</span>
                        {bullet}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            </AnimatedCarouselCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillsCarousel() {
  return (
    <div className="mt-5 space-y-3">
      <div className="flex items-center justify-between gap-4 rounded-[1.1rem] border border-emerald-300/10 bg-black/35 px-4 py-3 sm:px-5">
        <div>
          <p className="text-[0.58rem] uppercase tracking-[0.28em] text-emerald-100/38">
            Skills Matrix
          </p>
          <p className="mt-2 text-sm leading-6 text-emerald-50/66 sm:text-[0.92rem]">
            Scroll horizontally through technical categories and coverage.
          </p>
        </div>
        <p className="hidden font-mono text-[0.62rem] uppercase tracking-[0.24em] text-emerald-300/60 sm:block">
          Swipe / Scroll
        </p>
      </div>

      <div className="overflow-x-auto pb-2 [scrollbar-color:rgba(74,222,128,0.4)_transparent] [scrollbar-width:thin]">
        <div className="flex min-w-max gap-3 pr-2">
          {skillEntries.map((entry, index) => (
            <AnimatedCarouselCard key={entry.section} index={index}>
              <article className="relative w-[15rem] overflow-hidden rounded-[1.2rem] border border-emerald-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_34%,rgba(16,185,129,0.04))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(110,231,183,0.04)] backdrop-blur-md sm:w-[16.5rem]">
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80" />
              <div className="absolute right-0 top-4 h-20 w-24 rounded-full bg-emerald-200/10 blur-2xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.56rem] uppercase tracking-[0.28em] text-emerald-100/34">
                      Cluster {index + 1}
                    </p>
                    <h3 className="mt-2.5 font-mono text-lg uppercase tracking-[0.14em] text-emerald-300/92 sm:text-[1.12rem]">
                      {entry.section}
                    </h3>
                    <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-emerald-100/66 sm:text-[0.78rem]">
                      {entry.label}
                    </p>
                  </div>

                  <div className="rounded-full border border-emerald-300/12 bg-white/[0.05] px-2.5 py-1 text-[0.46rem] uppercase tracking-[0.2em] text-emerald-200/62">
                    Logged
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {entry.items.map((item) => (
                    <p
                      key={item}
                      className="pl-4 text-[0.86rem] leading-5.5 text-emerald-50/68"
                    >
                      <span className="-ml-4 mr-2 text-emerald-300/70">-</span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              </article>
            </AnimatedCarouselCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function LeadershipCarousel() {
  return (
    <div className="mt-5 space-y-3">
      <div className="flex items-center justify-between gap-4 rounded-[1.1rem] border border-emerald-300/10 bg-black/35 px-4 py-3 sm:px-5">
        <div>
          <p className="text-[0.58rem] uppercase tracking-[0.28em] text-emerald-100/38">
            Leadership Record
          </p>
          <p className="mt-2 text-sm leading-6 text-emerald-50/66 sm:text-[0.92rem]">
            Scroll horizontally through teaching and mentorship evidence.
          </p>
        </div>
        <p className="hidden font-mono text-[0.62rem] uppercase tracking-[0.24em] text-emerald-300/60 sm:block">
          Swipe / Scroll
        </p>
      </div>

      <div className="overflow-x-auto pb-2 [scrollbar-color:rgba(74,222,128,0.4)_transparent] [scrollbar-width:thin]">
        <div className="flex min-w-max gap-3 pr-2">
          {leadershipEntries.map((entry, index) => (
            <AnimatedCarouselCard key={entry.section} index={index}>
              <article className="relative w-[15rem] overflow-hidden rounded-[1.2rem] border border-emerald-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_34%,rgba(16,185,129,0.04))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(110,231,183,0.04)] backdrop-blur-md sm:w-[16.5rem]">
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80" />
              <div className="absolute right-0 top-4 h-20 w-24 rounded-full bg-emerald-200/10 blur-2xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.56rem] uppercase tracking-[0.28em] text-emerald-100/34">
                      Cluster {index + 1}
                    </p>
                    <h3 className="mt-2.5 font-mono text-lg uppercase tracking-[0.14em] text-emerald-300/92 sm:text-[1.12rem]">
                      {entry.section}
                    </h3>
                    <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-emerald-100/66 sm:text-[0.78rem]">
                      {entry.label}
                    </p>
                  </div>

                  <div className="rounded-full border border-emerald-300/12 bg-white/[0.05] px-2.5 py-1 text-[0.46rem] uppercase tracking-[0.2em] text-emerald-200/62">
                    Logged
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {entry.items.map((item) => (
                    <p
                      key={item}
                      className="pl-4 text-[0.86rem] leading-5.5 text-emerald-50/68"
                    >
                      <span className="-ml-4 mr-2 text-emerald-300/70">-</span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              </article>
            </AnimatedCarouselCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function DossierCarousel() {
  return (
    <div className="mt-5 space-y-3">
      <div className="flex items-center justify-between gap-4 rounded-[1.1rem] border border-emerald-300/10 bg-black/35 px-4 py-3 sm:px-5">
        <div>
          <p className="text-[0.58rem] uppercase tracking-[0.28em] text-emerald-100/38">
            Dossier Record
          </p>
          <p className="mt-2 text-sm leading-6 text-emerald-50/66 sm:text-[0.92rem]">
            Scroll horizontally through core identity, education, links, and contact.
          </p>
        </div>
        <p className="hidden font-mono text-[0.62rem] uppercase tracking-[0.24em] text-emerald-300/60 sm:block">
          Swipe / Scroll
        </p>
      </div>

      <div className="overflow-x-auto pb-2 [scrollbar-color:rgba(74,222,128,0.4)_transparent] [scrollbar-width:thin]">
        <div className="flex min-w-max gap-3 pr-2">
          {dossierEntries.map((entry, index) => (
            <AnimatedCarouselCard key={entry.section} index={index}>
              <article className="relative w-[15rem] overflow-hidden rounded-[1.2rem] border border-emerald-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_34%,rgba(16,185,129,0.04))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(110,231,183,0.04)] backdrop-blur-md sm:w-[16.5rem]">
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80" />
              <div className="absolute right-0 top-4 h-20 w-24 rounded-full bg-emerald-200/10 blur-2xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.56rem] uppercase tracking-[0.28em] text-emerald-100/34">
                      Cluster {index + 1}
                    </p>
                    <h3 className="mt-2.5 font-mono text-lg uppercase tracking-[0.14em] text-emerald-300/92 sm:text-[1.12rem]">
                      {entry.section}
                    </h3>
                    <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-emerald-100/66 sm:text-[0.78rem]">
                      {entry.label}
                    </p>
                  </div>

                  <div className="rounded-full border border-emerald-300/12 bg-white/[0.05] px-2.5 py-1 text-[0.46rem] uppercase tracking-[0.2em] text-emerald-200/62">
                    Logged
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {entry.items.map((item) => (
                    <p
                      key={item}
                      className="pl-4 text-[0.86rem] leading-5.5 text-emerald-50/68"
                    >
                      <span className="-ml-4 mr-2 text-emerald-300/70">-</span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              </article>
            </AnimatedCarouselCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsCarousel() {
  return (
    <div className="mt-5 space-y-3">
      <div className="flex items-center justify-between gap-4 rounded-[1.1rem] border border-emerald-300/10 bg-black/35 px-4 py-3 sm:px-5">
        <div>
          <p className="text-[0.58rem] uppercase tracking-[0.28em] text-emerald-100/38">
            Project Record
          </p>
          <p className="mt-2 text-sm leading-6 text-emerald-50/66 sm:text-[0.92rem]">
            Scroll horizontally through shipped builds and open-source work.
          </p>
        </div>
        <p className="hidden font-mono text-[0.62rem] uppercase tracking-[0.24em] text-emerald-300/60 sm:block">
          Swipe / Scroll
        </p>
      </div>

      <div className="overflow-x-auto pb-2 [scrollbar-color:rgba(74,222,128,0.4)_transparent] [scrollbar-width:thin]">
        <div className="flex min-w-max gap-3 pr-2">
          {projectEntries.map((entry, index) => (
            <AnimatedCarouselCard key={entry.section} index={index}>
              <article className="relative w-[15rem] overflow-hidden rounded-[1.2rem] border border-emerald-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_34%,rgba(16,185,129,0.04))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(110,231,183,0.04)] backdrop-blur-md sm:w-[16.5rem]">
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80" />
              <div className="absolute right-0 top-4 h-20 w-24 rounded-full bg-emerald-200/10 blur-2xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.56rem] uppercase tracking-[0.28em] text-emerald-100/34">
                      Cluster {index + 1}
                    </p>
                    <h3 className="mt-2.5 font-mono text-lg uppercase tracking-[0.14em] text-emerald-300/92 sm:text-[1.12rem]">
                      {entry.section}
                    </h3>
                    <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-emerald-100/66 sm:text-[0.78rem]">
                      {entry.label}
                    </p>
                  </div>

                  <div className="rounded-full border border-emerald-300/12 bg-white/[0.05] px-2.5 py-1 text-[0.46rem] uppercase tracking-[0.2em] text-emerald-200/62">
                    Logged
                  </div>
                </div>

                <a
                  href={entry.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-full border border-emerald-300/12 bg-white/[0.04] px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.22em] text-emerald-200/72 transition hover:border-emerald-200/24 hover:bg-white/[0.07]"
                >
                  {entry.hrefLabel}
                </a>

                <div className="mt-4 space-y-2">
                  {entry.items.map((item) => (
                    <p
                      key={item}
                      className="pl-4 text-[0.86rem] leading-5.5 text-emerald-50/68"
                    >
                      <span className="-ml-4 mr-2 text-emerald-300/70">-</span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              </article>
            </AnimatedCarouselCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function ModuleOverlay({ activeModule, onClose }: ModuleOverlayProps) {
  const [showOverlayLoading, setShowOverlayLoading] = useState(true);
  const [showOverlayContent, setShowOverlayContent] = useState(false);
  const [overlayProgress, setOverlayProgress] = useState(0);

  useEffect(() => {
    const progressFrame = requestAnimationFrame(() => {
      setOverlayProgress(100);
    });

    const contentTimer = setTimeout(() => {
      setShowOverlayLoading(false);
      setShowOverlayContent(true);
    }, 1450);

    return () => {
      cancelAnimationFrame(progressFrame);
      clearTimeout(contentTimer);
    };
  }, []);

  const isExperienceModule = activeModule.id === "experience";
  const isDossierModule = activeModule.id === "contact";
  const isLeadershipModule = activeModule.id === "leadership";
  const isProjectsModule = activeModule.id === "projects";
  const isSkillsModule = activeModule.id === "skills";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/78 px-4 backdrop-blur-md sm:px-8">
      <button
        type="button"
        aria-label="Close evidence view"
        className="absolute inset-0"
        onClick={onClose}
      />

      <section className={`relative w-full rounded-[1.8rem] border border-emerald-200/14 bg-[linear-gradient(180deg,rgba(8,8,8,0.95),rgba(0,0,0,0.98))] p-4 shadow-[0_0_90px_rgba(16,185,129,0.12)] sm:p-6 lg:p-8 ${
        isDossierModule ||
        isExperienceModule ||
        isLeadershipModule ||
        isProjectsModule ||
        isSkillsModule
          ? "max-w-[72rem]"
          : "max-w-4xl"
      }`}>
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        <div className="flex items-start justify-between gap-4 border-b border-emerald-300/10 pb-4">
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.32em] text-emerald-100/40">
              {activeModule.label}
            </p>
            <h2 className="mt-3 font-mono text-2xl uppercase tracking-[0.18em] text-emerald-300/92 sm:text-3xl">
              {activeModule.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-emerald-300/14 bg-white/5 px-4 py-2 text-[0.58rem] uppercase tracking-[0.28em] text-emerald-100/54 transition hover:border-emerald-200/24 hover:bg-white/8"
          >
            Close
          </button>
        </div>

        {showOverlayLoading ? (
          <div className="mt-8 rounded-[1.3rem] border border-emerald-300/10 bg-black/35 p-5 sm:p-6">
            <p className="text-[0.6rem] uppercase tracking-[0.32em] text-emerald-100/38">
              &gt; loading evidence module
            </p>
            <p className="mt-5 font-mono text-sm uppercase tracking-[0.22em] text-emerald-300/82">
              Preparing {activeModule.title}
            </p>
            <div className="mt-6 h-4 rounded-full border border-emerald-300/12 bg-emerald-950/70 p-1">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,rgba(190,242,100,0.88),rgba(74,222,128,0.96)_55%,rgba(22,163,74,0.8))] shadow-[0_0_22px_rgba(74,222,128,0.45)] transition-[width] duration-[1300ms] ease-out"
                style={{ width: `${overlayProgress}%` }}
              />
            </div>
          </div>
        ) : null}

        {showOverlayContent ? (
          isDossierModule ? (
            <DossierCarousel />
          ) : isExperienceModule ? (
            <ExperienceCarousel />
          ) : isLeadershipModule ? (
            <LeadershipCarousel />
          ) : isProjectsModule ? (
            <ProjectsCarousel />
          ) : isSkillsModule ? (
            <SkillsCarousel />
          ) : (
          <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.3rem] border border-emerald-300/10 bg-black/35 p-5 sm:p-6">
              <p className="text-[0.62rem] uppercase tracking-[0.32em] text-emerald-100/40">
                Evidence Summary
              </p>
              <div className="mt-4 text-base leading-8 text-emerald-50/72">
                <TypewriterText
                  text={activeModule.detail}
                  speed={18}
                  startDelay={180}
                  showCursor={false}
                />
              </div>

              <div className="mt-6 rounded-[1.1rem] border border-emerald-300/10 bg-white/[0.03] p-4">
                <p className="text-[0.58rem] uppercase tracking-[0.28em] text-emerald-100/40">
                  Reduction Potential
                </p>
                <p className="mt-3 font-mono text-lg uppercase tracking-[0.2em] text-emerald-300/88">
                  {activeModule.reduction}% Risk Reduction
                </p>
              </div>
            </div>

            <div className="rounded-[1.3rem] border border-emerald-300/10 bg-black/35 p-5 sm:p-6">
              <p className="text-[0.62rem] uppercase tracking-[0.32em] text-emerald-100/40">
                Highlighted Signals
              </p>

              <div className="mt-4 space-y-3">
                {activeModule.bullets.map((bullet, index) => (
                  <div
                    key={bullet}
                    className="rounded-[1rem] border border-emerald-300/10 bg-white/[0.03] px-4 py-3"
                  >
                    <p className="text-sm leading-6 text-emerald-50/68">
                      <TypewriterText
                        text={bullet}
                        speed={14}
                        startDelay={600 + index * 450}
                        showCursor={false}
                      />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          )
        ) : null}
      </section>
    </div>
  );
}

function ContactOverlay({ onClose }: ContactOverlayProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/82 px-4 backdrop-blur-md sm:px-8">
      <button
        type="button"
        aria-label="Close contact prompt"
        className="absolute inset-0"
        onClick={onClose}
      />

      <section className="relative w-full max-w-3xl overflow-hidden rounded-[1.9rem] border border-emerald-200/16 bg-[linear-gradient(180deg,rgba(7,12,10,0.96),rgba(0,0,0,0.98))] p-5 shadow-[0_0_100px_rgba(16,185,129,0.14)] sm:p-7 lg:p-8">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
        <div className="absolute left-1/2 top-8 h-28 w-56 -translate-x-1/2 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-start justify-between gap-4 border-b border-emerald-300/10 pb-5">
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.32em] text-emerald-100/42">
              Final Assessment Update
            </p>
            <h2 className="mt-3 font-mono text-2xl uppercase tracking-[0.18em] text-emerald-300/92 sm:text-3xl">
              Probability Reduced To 0%
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-emerald-300/14 bg-white/5 px-4 py-2 text-[0.58rem] uppercase tracking-[0.28em] text-emerald-100/54 transition hover:border-emerald-200/24 hover:bg-white/8"
          >
            Close
          </button>
        </div>

        <div className="relative mt-6 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.35rem] border border-emerald-300/10 bg-black/35 p-5 sm:p-6">
            <p className="text-[0.58rem] uppercase tracking-[0.28em] text-emerald-100/38">
              Clearance Result
            </p>
            <p className="mt-4 font-mono text-[2.9rem] font-light tracking-[-0.08em] text-emerald-300 sm:text-[3.8rem]">
              0%
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50/68 sm:text-[0.98rem]">
              The case is cleared. If you want to move forward, reach out directly
              through the channels in this dossier.
            </p>
          </div>

          <div className="rounded-[1.35rem] border border-emerald-300/10 bg-black/35 p-5 sm:p-6">
            <p className="text-[0.58rem] uppercase tracking-[0.28em] text-emerald-100/38">
              Contact Dossier
            </p>

            <div className="mt-4 space-y-3">
              <a
                href="mailto:samarthverma1108@gmail.com"
                className="group block rounded-[1rem] border border-emerald-300/12 bg-white/[0.04] px-4 py-3 transition hover:border-emerald-200/26 hover:bg-white/[0.07]"
              >
                <p className="text-[0.52rem] uppercase tracking-[0.24em] text-emerald-100/36">
                  Email
                </p>
                <p className="mt-2 text-sm text-emerald-50/78 sm:text-[0.96rem]">
                  samarthverma1108@gmail.com
                </p>
              </a>

              <a
                href="https://linkedin.com/in/samarth-verma2005/"
                target="_blank"
                rel="noreferrer"
                className="group block rounded-[1rem] border border-emerald-300/12 bg-white/[0.04] px-4 py-3 transition hover:border-emerald-200/26 hover:bg-white/[0.07]"
              >
                <p className="text-[0.52rem] uppercase tracking-[0.24em] text-emerald-100/36">
                  LinkedIn
                </p>
                <p className="mt-2 text-sm text-emerald-50/78 sm:text-[0.96rem]">
                  linkedin.com/in/samarth-verma2005
                </p>
              </a>

              <a
                href="https://github.com/MaybeSam05"
                target="_blank"
                rel="noreferrer"
                className="group block rounded-[1rem] border border-emerald-300/12 bg-white/[0.04] px-4 py-3 transition hover:border-emerald-200/26 hover:bg-white/[0.07]"
              >
                <p className="text-[0.52rem] uppercase tracking-[0.24em] text-emerald-100/36">
                  GitHub
                </p>
                <p className="mt-2 text-sm text-emerald-50/78 sm:text-[0.96rem]">
                  github.com/MaybeSam05
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function AssessmentHome() {
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [reviewedIds, setReviewedIds] = useState<string[]>([]);
  const [displayedProbability, setDisplayedProbability] =
    useState(initialProbability);
  const [showContactOverlay, setShowContactOverlay] = useState(false);
  const contactOverlayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const activeModule =
    evidenceItems.find((item) => item.id === activeModuleId) ?? null;

  const targetProbability = useMemo(() => {
    const totalReduction = evidenceItems
      .filter((item) => reviewedIds.includes(item.id))
      .reduce((sum, item) => sum + item.reduction, 0);

    return Math.max(0, initialProbability - totalReduction);
  }, [reviewedIds]);

  useEffect(() => {
    if (displayedProbability === targetProbability) {
      return;
    }

    const timer = setInterval(() => {
      let shouldStop = false;

      setDisplayedProbability((currentValue) => {
        if (currentValue === targetProbability) {
          shouldStop = true;
          return currentValue;
        }

        const delta = targetProbability - currentValue;
        const step =
          Math.sign(delta) * Math.max(1, Math.ceil(Math.abs(delta) / 7));
        const nextValue = currentValue + step;

        if (
          (delta < 0 && nextValue <= targetProbability) ||
          (delta > 0 && nextValue >= targetProbability)
        ) {
          shouldStop = true;
          return targetProbability;
        }

        return nextValue;
      });

      if (shouldStop) {
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [displayedProbability, targetProbability]);

  useEffect(() => {
    return () => {
      if (contactOverlayTimerRef.current) {
        clearTimeout(contactOverlayTimerRef.current);
      }
    };
  }, []);

  const probabilityStyles = getProbabilityStyles(displayedProbability);

  const openModule = (id: string) => {
    setActiveModuleId(id);
  };

  const closeModule = () => {
    if (activeModuleId) {
      const isAlreadyReviewed = reviewedIds.includes(activeModuleId);

      if (!isAlreadyReviewed) {
        const nextReviewedIds = [...reviewedIds, activeModuleId];
        const nextProbability = Math.max(
          0,
          initialProbability -
            evidenceItems
              .filter((item) => nextReviewedIds.includes(item.id))
              .reduce((sum, item) => sum + item.reduction, 0),
        );

        if (nextProbability === 0) {
          contactOverlayTimerRef.current = setTimeout(() => {
            setShowContactOverlay(true);
          }, contactOverlayDelay);
        }
      }

      setReviewedIds((currentValue) =>
        currentValue.includes(activeModuleId)
          ? currentValue
          : [...currentValue, activeModuleId],
      );
    }

    setActiveModuleId(null);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-emerald-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(34,197,94,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(16,185,129,0.08),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(6,95,70,0.11),transparent_34%),linear-gradient(180deg,_#03110c_0%,_#010302_42%,_#000000_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(110,231,183,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(110,231,183,0.032)_1px,transparent_1px)] bg-[size:88px_88px] opacity-24" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-emerald-300/7 to-transparent" />

      <section
        className={`relative mx-auto flex min-h-screen w-full max-w-none items-center px-6 py-6 sm:px-8 lg:px-12 transition duration-300 ${
          activeModule ? "blur-[4px]" : "blur-0"
        }`}
      >
        <div className="w-full">
          <div className="flex items-center justify-center">
            <p className="font-mono text-sm uppercase tracking-[0.34em] text-emerald-300/78 sm:text-base">
              Subject Assessment Interface // Case 001
            </p>
          </div>

          <div className="mx-auto mt-12 grid w-full items-start gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(30rem,38rem)_minmax(0,1fr)] xl:gap-10">
            <aside className="flex justify-center xl:pt-14">
              <div className="w-full max-w-[26rem] rounded-[1.4rem] border border-emerald-300/8 bg-white/[0.025] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm">
                <p className="text-[0.58rem] uppercase tracking-[0.32em] text-emerald-100/34">
                  &gt; operator instructions
                </p>
                <p className="mt-5 font-mono text-lg leading-8 text-emerald-50/68 sm:text-[1.22rem]">
                  Open a category to review Samarth&apos;s qualifications.
                </p>
                <p className="mt-4 font-mono text-lg leading-8 text-emerald-50/68 sm:text-[1.22rem]">
                  Review the evidence and determine how likely Samarth is to be
                  employed.
                </p>
              </div>
            </aside>

            <section className="flex min-h-[30rem] items-center justify-center">
              <div className="w-full max-w-[34rem] space-y-5">
                {evidenceItems.map((item) => {
                  const isReviewed = reviewedIds.includes(item.id);

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => openModule(item.id)}
                      className="group relative flex w-full overflow-hidden rounded-[1.35rem] border border-emerald-300/14 bg-white/[0.05] px-8 py-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(110,231,183,0.04)] backdrop-blur-md transition duration-300 hover:border-emerald-200/24 hover:bg-white/[0.09] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_32px_rgba(110,231,183,0.08)]"
                    >
                      <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80" />
                      <span className="absolute inset-y-2 left-3 w-1/3 rounded-full bg-white/10 blur-xl transition duration-300 group-hover:bg-white/14" />
                      <span className="absolute inset-0 rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03)_34%,rgba(16,185,129,0.05))]" />
                      <div className="relative flex w-full items-center justify-between gap-4">
                        <div>
                          <p className="text-[0.56rem] uppercase tracking-[0.28em] text-emerald-100/34">
                            {item.label}
                          </p>
                          <p className="mt-2 font-mono text-base uppercase tracking-[0.22em] text-emerald-300/88 sm:text-lg">
                            {item.title}
                          </p>
                        </div>

                        <span
                          className={`rounded-full border px-2.5 py-1 text-[0.52rem] uppercase tracking-[0.22em] ${
                            isReviewed
                              ? "border-emerald-300/18 bg-emerald-300/8 text-emerald-200/74"
                              : "border-white/10 bg-white/5 text-white/44"
                          }`}
                        >
                          {isReviewed ? "Logged" : "Open"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <aside className="flex justify-center xl:pt-14">
              <div
                className={`relative w-full max-w-[26rem] overflow-hidden rounded-[1.3rem] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_26px_rgba(110,231,183,0.06)] backdrop-blur-md sm:p-7 ${probabilityStyles.panelClass}`}
              >
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-75" />
                <p
                  className={`text-[0.56rem] uppercase tracking-[0.28em] ${probabilityStyles.muted}`}
                >
                  Probability of Unemployment
                </p>
                <div className="mt-3 flex items-start justify-between gap-3">
                  <p
                    className={`font-mono text-6xl font-light tracking-[-0.08em] tabular-nums sm:text-7xl ${probabilityStyles.accent}`}
                  >
                    {displayedProbability}%
                  </p>
                  <div
                    className={`rounded-full border px-3 py-1.5 text-[0.52rem] uppercase tracking-[0.22em] ${probabilityStyles.badgeClass}`}
                  >
                    {probabilityStyles.badge}
                  </div>
                </div>

                <div className="mt-5 h-3 rounded-full border border-emerald-300/12 bg-emerald-950/70 p-1">
                  <div
                    className={`h-full rounded-full transition-[width] duration-[1100ms] ease-out ${probabilityStyles.barClass}`}
                    style={{ width: `${displayedProbability}%` }}
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {activeModule ? (
        <ModuleOverlay activeModule={activeModule} onClose={closeModule} />
      ) : null}

      {showContactOverlay ? (
        <ContactOverlay onClose={() => setShowContactOverlay(false)} />
      ) : null}
    </main>
  );
}
