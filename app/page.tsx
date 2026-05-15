import { GitBranch, Mail, ExternalLink, User, Briefcase, Code2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import HeroHeadline from "@/components/HeroHeadline";

const PROJECTS = [
  {
    title: "PIXEL DASHBOARD",
    description: "8비트 감성의 실시간 분석 대시보드. Next.js App Router와 Supabase 실시간 구독을 활용한 풀스택 프로젝트.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    href: "#",
    demo: "#",
    status: "LIVE",
  },
  {
    title: "AI CHAT ENGINE",
    description: "Claude API를 활용한 멀티턴 대화 에이전트. 컨텍스트 압축과 스트리밍 응답을 지원합니다.",
    tags: ["Node.js", "Claude API", "Redis", "WebSocket"],
    href: "#",
    demo: "#",
    status: "LIVE",
  },
  {
    title: "DEVLOG PLATFORM",
    description: "MDX 기반 기술 블로그 플랫폼. 풀텍스트 검색, 태그 필터, RSS 피드를 내장.",
    tags: ["Next.js", "MDX", "PostgreSQL", "Vercel"],
    href: "#",
    demo: "#",
    status: "WIP",
  },
  {
    title: "PIXEL UI KIT",
    description: "8비트 스타일 React 컴포넌트 라이브러리. Tailwind 기반, 다크모드 지원, 완전 타입 안전.",
    tags: ["React", "TypeScript", "Storybook", "npm"],
    href: "#",
    demo: "#",
    status: "WIP",
  },
];

const SKILLS = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Node.js", "PostgreSQL", "Prisma", "Redis",
  "Docker", "Vercel", "Git", "Figma",
  "Claude API", "Python", "CI/CD", "REST / GraphQL",
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col flex-1">

        {/* ── Hero / HOME ── */}
        <section id="home" className="relative scanlines overflow-hidden border-b border-white/10 bg-brand-dark scroll-mt-14 min-h-screen flex flex-col justify-center">
          <div className="relative max-w-5xl mx-auto px-4 py-20 flex flex-col items-center w-full">
            <div className="inline-flex items-center gap-2 border border-brand-blue/50 bg-brand-grey px-3 py-1 mb-6 shadow-[2px_2px_0px_rgba(92,124,250,0.3)]">
              <span className="w-2 h-2 bg-brand-blue border border-brand-blue/60 animate-pulse" />
              <span className="font-(family-name:--font-pixel) text-[7px] uppercase tracking-widest text-brand-blue">
                AVAILABLE FOR HIRE
              </span>
            </div>

            <HeroHeadline />

            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#projects">
                <Button variant="primary" size="lg">
                  프로젝트 보기
                </Button>
              </a>
              <a href="#contact">
                <Button variant="ghost" size="lg" className="text-brand-white! border-white/30! hover:bg-brand-light! hover:border-white/50!">
                  연락하기
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="min-h-screen flex flex-col justify-center scroll-mt-14 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-20 w-full">
          <div className="flex items-center gap-4 mb-10">
            <div className="border border-white/20 bg-brand-grey px-3 py-1 shadow-[2px_2px_0px_rgba(92,124,250,0.2)]">
              <span className="font-(family-name:--font-pixel) text-[8px] text-brand-white uppercase tracking-widest">
                ABOUT
              </span>
            </div>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 items-start">
            {/* 아바타 플레이스홀더 */}
            <div className="border border-white/15 shadow-[4px_4px_0px_rgba(92,124,250,0.2)] bg-brand-light aspect-square max-w-50 flex flex-col items-center justify-center gap-2">
              <User size={48} strokeWidth={1.5} className="text-brand-white/40" />
              <span className="font-(family-name:--font-pixel) text-[7px] text-brand-white/40 uppercase">
                PHOTO
              </span>
            </div>

            {/* 소개 텍스트 */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-(family-name:--font-pixel) text-lg md:text-2xl text-brand-white uppercase mb-1">
                  LEE Nam-eun
                </h2>
                <p className="font-(family-name:--font-pixel) text-[9px] text-brand-blue/80 uppercase tracking-widest">
                  FRONT-END DEVELOPER
                </p>
              </div>

              <p className="text-base text-brand-white/70 leading-relaxed max-w-lg">
                안녕하세요, 저는 <b className="text-brand-white">프론트엔드 개발자</b>입니다.<br />
                Next.js, React, TypeScript에 관심이 많으며<br />
                기획부터 운영까지, 서비스 전체를 설계하고 만드는 프론트엔드 개발자입니다.
              </p>

              {/* 스킬 태그 */}
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="font-(family-name:--font-pixel) text-[7px] border border-white/15 px-2 py-1 bg-brand-grey shadow-[2px_2px_0px_rgba(92,124,250,0.15)] uppercase tracking-wide text-brand-white/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* 소셜 링크 */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-1.5 border border-white/20 px-3 py-2 bg-brand-grey shadow-[2px_2px_0px_rgba(92,124,250,0.2)] hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-colors text-brand-white/70"
                >
                  <GitBranch size={14} strokeWidth={2.5} />
                  <span className="font-(family-name:--font-pixel) text-[8px] uppercase">GITHUB</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1.5 border border-white/20 px-3 py-2 bg-brand-grey shadow-[2px_2px_0px_rgba(92,124,250,0.2)] hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-colors text-brand-white/70"
                >
                  <Mail size={14} strokeWidth={2.5} />
                  <span className="font-(family-name:--font-pixel) text-[8px] uppercase">EMAIL</span>
                </a>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="min-h-screen flex flex-col justify-center border-t border-white/10 bg-brand-black scroll-mt-14">
          <div className="max-w-6xl mx-auto px-4 py-20 w-full">
            <div className="flex items-center gap-4 mb-10">
              <div className="border border-white/20 bg-brand-grey px-3 py-1 shadow-[2px_2px_0px_rgba(92,124,250,0.2)]">
                <span className="font-(family-name:--font-pixel) text-[8px] text-brand-white uppercase tracking-widest">
                  PROJECTS
                </span>
              </div>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <h2 className="font-(family-name:--font-pixel) text-lg md:text-2xl text-brand-white uppercase mb-2">
              주요 프로젝트
            </h2>
            <p className="text-base text-brand-white/50 mb-10 max-w-lg leading-relaxed">
              직접 기획하고 개발한 프로젝트들입니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PROJECTS.map((project) => (
                <div
                  key={project.title}
                  className="border border-white/10 shadow-[4px_4px_0px_rgba(92,124,250,0.15)] bg-brand-grey p-5 flex flex-col gap-3 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_rgba(92,124,250,0.35)] hover:border-brand-blue/30 transition-all duration-75"
                >
                  {/* 헤더 */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-9 h-9 border border-brand-blue/50 bg-brand-blue/20 flex items-center justify-center shrink-0">
                      <Briefcase size={16} strokeWidth={2.5} className="text-brand-blue" />
                    </div>
                    <span
                      className={[
                        "font-(family-name:--font-pixel) text-[7px] border px-2 py-0.5 uppercase tracking-wide",
                        project.status === "LIVE"
                          ? "border-brand-blue bg-brand-blue text-white"
                          : "border-white/20 bg-brand-light text-brand-white/50",
                      ].join(" ")}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* 타이틀 & 설명 */}
                  <h3 className="font-(family-name:--font-pixel) text-[9px] uppercase tracking-widest text-brand-white leading-relaxed">
                    {project.title}
                  </h3>
                  <p className="text-xs text-brand-white/55 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* 태그 */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-(family-name:--font-pixel) text-[6px] border border-white/15 px-1.5 py-0.5 bg-brand-dark text-brand-white/50 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 링크 */}
                  <div className="flex gap-2 mt-1">
                    <a
                      href={project.href}
                      className="flex items-center gap-1 font-(family-name:--font-pixel) text-[7px] border border-white/20 px-2 py-1.5 bg-brand-dark hover:bg-brand-light text-brand-white/60 hover:text-brand-white transition-colors uppercase"
                    >
                      <Code2 size={11} strokeWidth={2.5} />
                      CODE
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 font-(family-name:--font-pixel) text-[7px] border border-brand-blue px-2 py-1.5 bg-brand-blue text-white hover:bg-[#4a6ae8] transition-colors uppercase"
                    >
                      <ExternalLink size={11} strokeWidth={2.5} />
                      DEMO
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="min-h-screen flex flex-col justify-center border-t border-white/10 scroll-mt-14">
          <div className="max-w-6xl mx-auto px-4 py-20 w-full flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="border border-white/20 bg-brand-grey px-3 py-1 shadow-[2px_2px_0px_rgba(92,124,250,0.2)]">
                  <span className="font-(family-name:--font-pixel) text-[8px] text-brand-white uppercase tracking-widest">
                    CONTACT
                  </span>
                </div>
              </div>
              <h3 className="font-(family-name:--font-pixel) text-lg md:text-2xl text-brand-white uppercase mb-3">
                함께 만들어요
              </h3>
              <p className="text-brand-white/60 text-base leading-relaxed max-w-md">
                프로젝트 협업, 채용 문의, 잡담 모두 환영합니다.<br />
                <b className="text-brand-white">편하게 메시지 주세요 :)</b>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="mailto:your@email.com">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <Mail size={14} strokeWidth={2.5} />
                  이메일 보내기
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="lg"
                  className="flex items-center gap-2 text-brand-white! border-white/30! hover:bg-brand-light! hover:border-white/50!"
                >
                  <GitBranch size={14} strokeWidth={2.5} />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
