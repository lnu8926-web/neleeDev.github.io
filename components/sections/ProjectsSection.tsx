import { Briefcase, Code2, ExternalLink } from "lucide-react";

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

export default function ProjectsSection() {
  return (
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

              <h3 className="font-(family-name:--font-pixel) text-[9px] uppercase tracking-widest text-brand-white leading-relaxed">
                {project.title}
              </h3>
              <p className="text-xs text-brand-white/55 leading-relaxed flex-1">
                {project.description}
              </p>

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
  );
}
