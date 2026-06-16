"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { GitBranch, ExternalLink, X } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/sections/SectionHeader";

const PROJECTS = [
  {
    title: "TASKRY",
    category: "TEAM",
    period: "2025.11 ~ 2025.12",
    summary: "칸반, 캘린더, 메모를 통합한 업무 관리 플랫폼",
    backgroundGoals: [
      "업무 상태/일정/메모를 단일 플랫폼으로 통합해 도구 전환 비용과 커뮤니케이션 비용을 절감",
      "칸반·캘린더 연동 및 변경 사항 즉시 동기화로 정보 누락 없이 협업 흐름을 단순화",
    ],
    techStack: [
      { label: "Core", value: "Next.js 16 (App Router), React 19, TypeScript 5" },
      { label: "Auth & Data", value: "Supabase (PostgreSQL & Realtime)" },
      { label: "Interaction", value: "dnd-kit, date-fns" },
      { label: "UI & Styling", value: "Tailwind CSS 4, Radix UI, Lucide React" },
    ],
    roleHighlights: [
      "도메인 중심 폴더 구조와 Git/TypeScript/ESLint 기반 협업 환경을 설계",
      "dnd-kit 기반 드래그 앤 드롭, 상태 시각화, 필터링 로직을 구현",
      "월/주/일 캘린더와 칸반 보드 간 양방향 연동 및 실시간 동기화를 구축",
      "메모 CRUD와 Lexical 기반 리치 텍스트 에디터를 도입",
    ],
    outcomes: [
      "업무 상태·일정·메모를 한 화면에서 관리하는 MVP 구현",
      "실시간 반영 구조를 통해 팀 변경 사항의 즉시 공유 환경 확보",
      "도메인 분리 구조로 기능 확장과 유지보수 난이도 완화",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "TanStack Query", "dnd-kit"],
    href: "https://github.com/lnu8926-web/NextTaskry",
    demo: "https://task-ry.vercel.app/",
    image: "/projectImg/taskry.png",
  },
  {
    title: "VendiChef",
    category: "TEAM",
    period: "2026.01",
    summary: "KT Cloud TECH UP 해커톤 (스타트업 브랜드 소개 웹페이지)",
    backgroundGoals: [
      "도시락 자판기를 데이터 노드로 활용한 식단 추천·제조사 수요 예측 B2B/C2C 통합 플랫폼 구축",
      "17일 팀 내 유일한 프론트엔드 개발자로 기획부터 배포까지 5일 내 MVP 완성 목표",
    ],
    techStack: [
      { label: "Core", value: "React 19, TypeScript, Vite 6" },
      { label: "Data & Content", value: "Recharts, React Router DOM 7, Mock Data System" },
      { label: "UI & Styling", value: "Tailwind CSS 4, Radix UI, MUI, Framer Motion, Lucide Icons" },
      { label: "AI & Efficiency", value: "Claude Code" },
      { label: "Deployment", value: "Vercel (배포 및 호스팅)" },
    ],
    roleHighlights: [
      "초기 환경 설정부터 섹션별 UI 구현, Vercel 최종 배포까지 전 과정을 단독 수행",
      "Framer Motion 화면 전환과 Recharts 데이터 시각화로 브랜드 기술력을 표현",
      "회사 소개·서비스·파트너사 콘텐츠를 도메인 컴포넌트 구조로 설계하고 관리",
      "Claude Code를 활용해 마크업·스타일링 생산성을 높이고 단기 개발 속도를 확보",
    ],
    outcomes: [
      "1인 개발 체제로 단기간 내 웹사이트 구축 완료 및 Vercel 프로덕션 환경 배포 완수",
      "데이터 시각화·UI 구성으로 데이터 중심 푸드테크 브랜드 정체성 시각적 구현",
      "기획 요구사항을 빠르게 웹 결과물로 전환하여 5일 내 팀 프로젝트 MVP 발표 완료",
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "Framer Motion"],
    href: "https://github.com/lnu8926-web/vendichef-brand-page",
    demo: "https://vendichef.vercel.app/",
    image: "/projectImg/VendiChef.png",
  },
  {
    title: "DANCADE",
    category: "TEAM",
    period: "2025.12 ~ 2026.01",
    summary: "실시간 멀티플레이어 아케이드 게임 플랫폼",
    backgroundGoals: [
      "어린이가 안심하고 즐길 서비스가 부족해, 건전성·안전성·사회성을 갖춘 디지털 놀이환경이 필요",
      "함께 소통하며 몰입해 즐길 수 있는 안전한 Phaser.js 기반 멀티플레이 아케이드 게임 플랫폼 구축",
    ],
    techStack: [
      { label: "Core", value: "Next.js (App Router), TypeScript, Zustand, Tailwind CSS 4" },
      { label: "Game Engine", value: "Phaser 3 (Scene 설계, 물리 로직), GSAP (UI 애니메이션)" },
      { label: "Real-time", value: "Socket.io, Redis (수평 확장 서버), Supabase (인증 및 실시간 데이터)" },
      { label: "AI", value: "OpenAI API" },
      { label: "Environment", value: "Vitest, Concurrently (서버 동시 실행)" },
    ],
    roleHighlights: [
      "Socket.IO 기반 실시간 채팅을 구현하고, 메시지 타입·발신자별 스타일 분기와 채팅창 상태를 관리",
      "Perspective API 연동으로 특수·욕설 메시지를 3가지 지표 기반으로 자동 차단하는 파이프라인을 구축",
      "회원/게스트 권한에 따른 UI 제어와 채팅 입력·게임 조작 충돌 방지 처리를 적용",
      "Phaser.js 기반 벽돌깨기 게임을 구현 (라이프 시스템, 벽돌 하강 난이도, 파티클 효과)",
      "Phaser.js 기반 탁구 게임을 구현 (GPT-로컬 알고리즘 이중 AI, 결과 검증 시스템)",
      "팀장으로서 일정·기술 결정·팀원 간 의사소통을 조율해 프로젝트 완성도를 주도",
    ],
    outcomes: [
      "씬 기반 아키텍처 설계로 신규 게임 모드 확장이 용이한 유연한 플랫폼 구조 완성",
      "소켓 서버 최적화 및 Redis 어댑터 연동으로 안정적인 실시간 동기화 환경 구축",
      "타입 일격 분리·전면 리팩토링으로 팀 전체 코드 가독성 향상 및 개발 효율성 증대",
      "프로젝트 구조·API 명세를 상세 기록한 README 작성으로 팀 내 기술 공유 문화 형성",
    ],
    tags: ["Phaser 3", "Socket.io", "Next.js", "AWS EC2"],
    href: "https://github.com/lnu8926-web/Dancade",
    demo: "https://www.dancade.kr",
    image: "/projectImg/dancade.png",
  },
  {
    title: "MindLog",
    category: "TEAM",
    period: "2026.01 ~ 2026.04",
    summary: "AI 기반 감정 분석 및 정신 건강 관리 서비스",
    backgroundGoals: [
      "사용자 일상 대화를 AI로 분석·시각화하고 맞춤형 상담·리포트를 제공하는 정신 건강 케어 서비스",
      "감정 데이터 기반 대시보드·리포트·결제 기능을 갖춘 사용자 중심의 End-to-End 서비스 구현 목표",
    ],
    techStack: [
      { label: "Core", value: "Next.js (App Router), TypeScript, React 19" },
      { label: "Authentication", value: "OAuth 2.0 (Kakao, Google), JWT, Axios (Interceptor)" },
      { label: "State & Logic", value: "TanStack Query, Zustand, React Hook Form, Zod" },
      { label: "UI & Animation", value: "Tailwind CSS 4, shadcn/ui, Recharts, Framer Motion" },
      { label: "Payment & Infra", value: "Toss Payments SDK, Docker" },
    ],
    roleHighlights: [
      "프론트엔드 그룹장으로 직군 간 소통 창구 역할을 수행하고 개발 일정 조율·코드 컨벤션 수립을 주도",
      "FSD 아키텍처를 설계·도입해 컴포넌트 간 기능 독립성을 확보하고 유지보수 생산성을 향상",
      "OAuth 2.0 기반 카카오·구글 소셜 로그인 연동과 Axios 토큰 자동 갱신 로직을 구현",
      "감정 데이터 기반 출석 캘린더·도장판·Recharts 통계 그래프 등 대시보드 UI를 개발",
      "토스페이먼츠 SDK를 연동해 코인 충전·결제 예외 처리와 실시간 잔액 동기화를 적용",
      "디자인 리소스가 제한된 상황에서 Figma를 직접 활용해 화면을 설계하고 UI/UX 개선안을 도출",
    ],
    outcomes: [
      "감정 데이터 시각화·리포트 기능으로 사용자가 심리 상태를 정량적으로 인지하는 환경 구축",
      "OAuth 2.0 인증 흐름 및 토스페이먼츠 결제 예외 처리 구현으로 핵심 기능 결함 최소화",
      "FSD 기반 구조화로 팀 내 코드 충돌을 줄이고 직군 간 작업 흐름을 원활하게 정리",
      "개발뿐 아니라 디자인 보완과 기술 의사결정을 주도해 최종 발표 수준의 서비스 완성도를 확보",
    ],
    tags: ["Next.js", "TypeScript", "React", "TanStack Query", "Zustand", "Toss Payments"],
    href: "https://github.com/8ocket/Frontend.git",
    demo: "#",
    image: "/projectImg/mindLog.png",
  },
] as const;

// const CATEGORIES = ["ALL", "PERSONAL", "TEAM"] as const;

export default function ProjectsSection() {
 // const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>("ALL");
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[number] | null>(null);

  // z
  //   return PROJECTS.filter((project) => {
  //     const categoryMatched = activeCategory === "ALL" || project.category === activeCategory;
  //     return categoryMatched;
  //   });
  // }, []);

  const sortedProjects = useMemo(() => {
    const getPeriodSortValue = (period: string) => {
      const matches = [...period.matchAll(/(20\d{2})\.(\d{2})/g)];
      if (matches.length === 0) return 0;

      const last = matches[matches.length - 1];
      const year = Number(last[1]);
      const month = Number(last[2]);
      return year * 100 + month;
    };

    return [...PROJECTS].sort((a, b) => getPeriodSortValue(b.period) - getPeriodSortValue(a.period));
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative scanlines overflow-hidden border-t border-white/10 bg-brand-dark text-brand-white scroll-mt-14 min-h-[calc(100svh-3.5rem)]">
      <Container className="relative py-14 sm:py-16 lg:py-20">
        <SectionHeader title="MY PROJECT" className="mb-8" />

        <div className="grid gap-6 md:grid-cols-2">
          {sortedProjects.map((project, i) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden border border-white/10 bg-brand-grey/40"
              style={{ animation: `fadeInUp 0.6s ease ${0.05 + i * 0.08}s both` }}
            >
              <div className="relative h-52 overflow-hidden border-b border-white/10 bg-brand-grey sm:h-60 md:h-72">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="min-w-0 p-4 sm:p-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="font-(family-name:--font-pixel) text-[14px] uppercase tracking-[0.12em] text-brand-white/90">
                    {project.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-brand-white/50">{project.category}</span>
                </div>

                <p className="text-sm text-brand-white/70 leading-relaxed break-keep">{project.summary}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="border border-white/10 bg-brand-dark px-2 py-1 text-[11px] text-brand-white/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 border border-white/30 bg-brand-dark px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-brand-white transition-colors hover:bg-brand-light"
                  >
                    상세보기
                  </button>
                  <a
                    href={project.href}
                    className="inline-flex items-center gap-1.5 border border-white/15 bg-brand-dark px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-brand-white/90 transition-colors hover:bg-brand-light"
                  >
                    <GitBranch size={13} strokeWidth={2.5} />
                    Github
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-1.5 border border-brand-blue/50 bg-brand-blue px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#4a6ae8]"
                  >
                    <ExternalLink size={13} strokeWidth={2.5} />
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/*
        {filteredProjects.length === 0 && (
          <div className="border border-white/10 bg-brand-grey/30 px-4 py-10 text-center text-sm text-brand-white/60">
            선택한 필터에 해당하는 프로젝트가 없습니다.
          </div>
        )}
        */}

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} 상세 정보`}
          >
            <div
              className="mx-auto max-w-3xl w-full border border-white/10 bg-brand-grey max-h-[88vh] overflow-auto"
              style={{ boxShadow: "6px 6px 0px rgba(92,124,250,0.2)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-brand-dark/70">
                <div className="space-y-1 pr-3">
                  <p className="text-xs text-brand-blue/80">{selectedProject.period}</p>
                  <h3 className="font-(family-name:--font-pixel) text-sm uppercase tracking-[0.14em] text-brand-white/90">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-brand-white/65">{selectedProject.summary}</p>
                </div>
                <button
                  type="button"
                  aria-label="닫기"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center justify-center h-8 w-8 border border-white/15 text-brand-white/70 hover:text-brand-white hover:border-white/30"
                >
                  <X size={14} strokeWidth={2.5} />
                </button>
              </div>

              <div className="p-5 md:p-6 space-y-5">
                <section className="space-y-2">
                  <h4 className="text-xs uppercase tracking-[0.16em] text-brand-blue/80">배경 및 목표</h4>
                  <ul className="space-y-1.5 text-sm text-brand-white/70 leading-relaxed break-keep">
                    {selectedProject.backgroundGoals.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 bg-brand-white/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-2">
                  <h4 className="text-xs uppercase tracking-[0.16em] text-brand-blue/80">사용 및 활용 기술</h4>
                  <div className="overflow-hidden border border-white/10 bg-brand-dark/45">
                    {selectedProject.techStack.map((row, idx) => (
                      <div
                        key={row.label}
                        className={`grid gap-3 px-3 py-2.5 text-sm sm:grid-cols-[120px_1fr] ${idx !== selectedProject.techStack.length - 1 ? "border-b border-white/10" : ""}`}
                      >
                        <p className="text-brand-blue/75">{row.label}</p>
                        <p className="text-brand-white/70 break-keep">{row.value}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-2">
                  <h4 className="text-xs uppercase tracking-[0.16em] text-brand-blue/80">역할 및 실행</h4>
                  <ul className="space-y-1.5 text-sm text-brand-white/70 leading-relaxed break-keep">
                    {selectedProject.roleHighlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 bg-brand-white/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-2">
                  <h4 className="text-xs uppercase tracking-[0.16em] text-brand-blue/80">성과 및 결과</h4>
                  <ul className="space-y-1.5 text-sm text-brand-white/70 leading-relaxed break-keep">
                    {selectedProject.outcomes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 bg-brand-white/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="border border-white/10 bg-brand-dark/45 p-3 text-xs text-brand-white/65">
                  <p className="break-all">Github: {selectedProject.href}</p>
                  <p className="mt-1 break-all">Demo: {selectedProject.demo}</p>
                </div>
              </div>

              <div className="px-5 pb-6 md:px-6 md:pb-6 flex gap-2">
                <a
                  href={selectedProject.href}
                  className="inline-flex items-center gap-1.5 border border-white/15 bg-brand-dark px-4 py-2.5 text-xs uppercase tracking-[0.16em] text-brand-white transition-colors hover:bg-brand-light"
                >
                  <GitBranch size={13} strokeWidth={2.5} />
                  Github
                </a>
                <a
                  href={selectedProject.demo}
                  className="inline-flex items-center gap-1.5 border border-brand-blue/40 bg-brand-blue px-4 py-2.5 text-xs uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#4a6ae8]"
                >
                  <ExternalLink size={13} strokeWidth={2.5} />
                  Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
