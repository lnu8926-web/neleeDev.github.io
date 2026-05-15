import { Code2, ExternalLink } from "lucide-react";

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
    <section
      id="projects"
      className="relative scanlines overflow-hidden min-h-screen flex flex-col justify-center border-t border-white/10 scroll-mt-14"
      style={{ background: "linear-gradient(to bottom, #111111, #0d0d0d)" }}
    >
      <div className="relative max-w-5xl mx-auto px-4 py-20 w-full">

        {/* 배지 — Hero/About 스타일 통일 */}
        <div
          className="inline-flex items-center gap-2 bg-brand-blue/15 border border-brand-blue/30 px-4 py-1.5 mb-12"
          style={{ animation: "fadeInUp 0.6s ease both" }}
        >
          <span className="w-1.5 h-1.5 bg-brand-blue animate-pulse" />
          <span className="font-(family-name:--font-pixel) text-[10px] uppercase tracking-widest text-brand-blue/90">
            PROJECTS
          </span>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="border border-white/10 bg-brand-grey flex flex-col hover:-translate-y-0.5 hover:border-brand-blue/30 transition-all duration-75"
              style={{
                boxShadow: "4px 4px 0px rgba(92,124,250,0.15)",
                animation: `fadeInUp 0.6s ease ${0.1 + i * 0.1}s both`,
              }}
            >
              {/* 카드 타이틀 바 */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-brand-light">
                <span className="font-(family-name:--font-pixel) text-[10px] uppercase tracking-widest text-brand-white/80">
                  {project.title}
                </span>
                <span
                  className={[
                    "font-(family-name:--font-pixel) text-[7px] border px-2 py-0.5 uppercase tracking-wide",
                    project.status === "LIVE"
                      ? "border-brand-blue/60 bg-brand-blue/20 text-brand-blue"
                      : "border-white/20 bg-transparent text-brand-white/40",
                  ].join(" ")}
                >
                  {project.status}
                </span>
              </div>

              {/* 카드 바디 */}
              <div className="px-5 py-5 flex flex-col gap-4 flex-1">
                <p className="text-sm text-brand-white/60 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-(family-name:--font-pixel) text-[7px] border border-white/15 px-2 py-1 bg-brand-dark text-brand-white/50 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.href}
                    className="flex items-center gap-1.5 font-(family-name:--font-pixel) text-[8px] border border-white/20 px-3 py-2 bg-brand-dark hover:bg-brand-light text-brand-white/60 hover:text-brand-white transition-colors uppercase"
                  >
                    <Code2 size={13} strokeWidth={2.5} />
                    CODE
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1.5 font-(family-name:--font-pixel) text-[8px] border border-brand-blue px-3 py-2 bg-brand-blue text-white hover:bg-[#4a6ae8] transition-colors uppercase"
                  >
                    <ExternalLink size={13} strokeWidth={2.5} />
                    DEMO
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
