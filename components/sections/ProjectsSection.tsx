"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { GitBranch, ExternalLink, X } from "lucide-react";
import Container from "@/components/layout/Container";

const PROJECTS = [
  {
    title: "TASKRY",
    category: "TEAM",
    summary: "칸반, 캘린더, 메모를 통합한 업무 관리 플랫폼",
    details: {
      overview:
        "4인 팀 프로젝트로 시작해 1인 체제로 전환한 뒤 기획부터 배포 안정화까지 전 과정을 단독으로 수행했습니다.",
      role: "기획, 설계, 구현, 리팩토링, 배포, 운영 안정화",
      trouble: "인증/권한 흐름 분산, 데이터 동기화 충돌, hydration/라우팅 런타임 이슈",
      solve: "미들웨어 기반 인증 통합, TanStack Query + Supabase Realtime 동기화, 도메인 구조 재정비",
    },
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "TanStack Query", "dnd-kit"],
    href: "https://github.com/lnu8926-web/NextTaskry",
    demo: "https://task-ry.vercel.app/",
    image: "/projectImg/taskry.png",
  },
  {
    title: "DANCADE",
    category: "TEAM",
    summary: "실시간 멀티플레이 아케이드 게임 플랫폼",
    details: {
      overview: "Phaser 3 기반 게임 로직과 실시간 통신 서버를 통합해 멀티플레이 흐름을 구현했습니다.",
      role: "프론트엔드/실시간 통신/배포 단독 개발",
      trouble: "실시간 이벤트 순서 충돌과 지연 보정 이슈",
      solve: "Socket 이벤트 경량화, 상태 동기화 전략 단순화, 서버 배포 파이프라인 정비",
    },
    tags: ["Phaser 3", "Socket.io", "Next.js", "AWS EC2"],
    href: "https://github.com/lnu8926-web/Dancade",
    demo: "http://13.210.110.208/",
    image: "/projectImg/dancade.png",
  },
  {
    title: "PIXEL UI KIT",
    category: "PERSONAL",
    summary: "8비트 무드 React 컴포넌트 라이브러리",
    details: {
      overview: "픽셀 감성 UI를 재사용 가능한 컴포넌트 단위로 모아 빠르게 화면을 조합할 수 있도록 정리 중입니다.",
      role: "컴포넌트 설계, 스타일 시스템 구성, 문서화",
      trouble: "스타일 규칙 일관성과 확장성 간 충돌",
      solve: "토큰 기반 스타일 정리, 컴포넌트 책임 분리, Storybook 중심 검증",
    },
    tags: ["React", "TypeScript", "Storybook", "npm"],
    href: "#",
    demo: "#",
    image: "/projectImg/mindLog.png",
  },
] as const;

const CATEGORIES = ["ALL", "PERSONAL", "TEAM", "WORK"] as const;

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>("ALL");
  const [activeTag, setActiveTag] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[number] | null>(null);

  const tags = useMemo(() => {
    const allTags = new Set<string>();
    PROJECTS.forEach((project) => {
      project.tags.forEach((tag) => allTags.add(tag));
    });
    return ["ALL", ...Array.from(allTags)];
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const categoryMatched = activeCategory === "ALL" || project.category === activeCategory;
      const tagMatched = activeTag === "ALL" || (project.tags as readonly string[]).includes(activeTag);
      return categoryMatched && tagMatched;
    });
  }, [activeCategory, activeTag]);

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
    <section id="projects" className="relative scanlines overflow-hidden border-t border-white/10 bg-brand-dark text-brand-white scroll-mt-14">
      <Container className="relative py-16 lg:py-20">
        <div className="mb-8 space-y-5">
          <div className="space-y-2">
            <h2 className="font-(family-name:--font-pixel) text-3xl uppercase tracking-widest text-brand-white sm:text-4xl">
              MY PROJECT
            </h2>
            <p className="max-w-3xl text-sm text-brand-white/70 leading-relaxed sm:text-base">
              다양한 웹 애플리케이션을 제작하기 위해 React, Next.js, TypeScript 중심으로 구현한 프로젝트입니다.
            </p>
          </div>

          <div className="border-y border-white/20">
            <div className="grid grid-cols-2 border-b border-white/20 md:grid-cols-4">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className="flex items-center justify-between border-r border-white/20 px-3 py-3 text-left text-xs uppercase tracking-[0.14em] text-brand-white/65 last:border-r-0 hover:text-brand-white"
                  >
                    <span>{category}</span>
                    <span className={`h-2.5 w-2.5 border border-white/60 ${isActive ? "bg-brand-white" : "bg-transparent"}`} />
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 px-2 py-3 sm:px-3">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`text-sm transition-colors ${activeTag === tag ? "text-brand-white" : "text-brand-white/45 hover:text-brand-white/80"}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden border border-white/10 bg-brand-grey/40"
              style={{ animation: `fadeInUp 0.6s ease ${0.05 + i * 0.08}s both` }}
            >
              <div className="relative h-60 overflow-hidden border-b border-white/10 bg-brand-grey sm:h-72">
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

        {filteredProjects.length === 0 && (
          <div className="border border-white/10 bg-brand-grey/30 px-4 py-10 text-center text-sm text-brand-white/60">
            선택한 필터에 해당하는 프로젝트가 없습니다.
          </div>
        )}

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
                <h3 className="font-(family-name:--font-pixel) text-sm uppercase tracking-[0.14em] text-brand-white/90">
                  {selectedProject.title}
                </h3>
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
                <div className="border border-white/10 bg-brand-dark/50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-blue/80 mb-2">한 줄 소개</p>
                  <p className="text-sm text-brand-white/75 leading-relaxed break-keep">{selectedProject.summary}</p>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="border border-white/10 bg-brand-dark/50 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-brand-blue/80 mb-2">개요</p>
                    <p className="text-sm text-brand-white/70 leading-relaxed break-keep">{selectedProject.details.overview}</p>
                  </div>
                  <div className="border border-white/10 bg-brand-dark/50 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-brand-blue/80 mb-2">담당</p>
                    <p className="text-sm text-brand-white/70 leading-relaxed break-keep">{selectedProject.details.role}</p>
                  </div>
                  <div className="border border-white/10 bg-brand-dark/50 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-brand-pink/80 mb-2">문제</p>
                    <p className="text-sm text-brand-white/70 leading-relaxed break-keep">{selectedProject.details.trouble}</p>
                  </div>
                  <div className="border border-white/10 bg-brand-dark/50 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-brand-pink/80 mb-2">해결</p>
                    <p className="text-sm text-brand-white/70 leading-relaxed break-keep">{selectedProject.details.solve}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-brand-dark px-2.5 py-1 text-xs text-brand-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-5 pb-6 md:px-6 md:pb-6 flex gap-2">
                <a
                  href={selectedProject.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-brand-dark px-4 py-2.5 text-xs uppercase tracking-[0.16em] text-brand-white transition-colors hover:bg-brand-light"
                >
                  <GitBranch size={13} strokeWidth={2.5} />
                  Github
                </a>
                <a
                  href={selectedProject.demo}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/40 bg-brand-blue px-4 py-2.5 text-xs uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#4a6ae8]"
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
