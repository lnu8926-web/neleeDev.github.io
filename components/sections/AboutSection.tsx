import { GitBranch, FileDown } from "lucide-react";
import PixelAvatar from "@/components/sections/PixelAvatar";
import Container from "@/components/layout/Container";
import CopyEmailButton from "@/components/ui/CopyEmailButton";

const SKILL_GROUPS = [
  {
    label: "Lang / Framework / Library",
    color: "#5C7CFA",
    skills: ["Next.js", "React", "TypeScript", "TanStack Query", "Zustand", "Zod", "Tailwind CSS", "Phaser 3", "Recharts", "Java(Spring)", "Node.js", "PostgreSQL", "Socket.io", "JWT", "Axios"],
  },
  {
    label: "Tools & Collaboration",
    color: "#FF85B3",
    skills: ["Git", "Figma", "Notion", "Jira", "Slack", "Discord", "Postman", "VSCode"],
  },
  {
    label: "Infra / DevOps",
    color: "#6ee7b7",
    skills: ["Docker", "AWS", "Terraform", "Vercel", "GitHub Actions", "Firebase", "Supabase"],
  },
];

const INTRO_POINTS = [
  "기획 단계 참여부터 최종 배포 및 운영까지 서비스 구축의 전 과정을 실행 가능한 단위로 설계합니다.",
  "QA·보안·실사용 피드백을 반영해 운영 단계에서 발생하는 변수까지 고려한 안정적인 인터페이스를 지향합니다.",
  "백엔드와의 협업 시 API 흐름과 서버 구조를 함께 이해해 커뮤니케이션 비용을 줄이고 구현 속도를 높입니다.",
] as const;

const CORE_STRENGTHS = [
  {
    title: "주도적 실행력",
    description: "팀에 필요한 일을 먼저 찾아 행동으로 옮기며, 돌발 변수가 생기더라도 빠르게 대처해 계획된 마감 기한을 철저히 지킵니다.",
  },
  {
    title: "기획을 아는 개발자",
    description: "서비스 흐름에 대한 이해를 바탕으로 기획 의도를 읽고, 개발 착수 전에 모호한 요구사항을 정리합니다.",
  },
  {
    title: "사용자 환경 중심",
    description: "현장 피드백 데이터를 바탕으로 유저 환경의 변수를 제어하며, 안정적인 서비스를 위해 렌더링 성능과 예외 처리를 개선합니다.",
  },
] as const;

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scanlines overflow-hidden border-t border-white/10 bg-brand-dark text-brand-white scroll-mt-14 min-h-[calc(100svh-3.5rem)]"
    >
      <Container className="relative py-14 sm:py-16 lg:py-20">
        <div className="mb-8 space-y-2">
          <h2 className="font-(family-name:--font-pixel) text-2xl uppercase tracking-widest text-brand-white sm:text-3xl md:text-4xl">
            ABOUT
          </h2>
        </div>

        <div className="border border-white/10 bg-brand-grey/30" style={{ animation: "fadeInUp 0.6s ease 0.05s both" }}>
          <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-brand-dark/50 px-4 py-3 text-sm">
            <p className="text-brand-blue/80">이남은 · 프론트엔드 개발자</p>
            <span className="border border-white/15 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-brand-white/60">Open to Work</span>
          </div>

          <div className="grid gap-0 md:grid-cols-[240px_1fr]">
            <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r md:border-white/10">
              <div className="border border-white/10 bg-brand-grey/60 p-3 flex items-center justify-center">
                <div className="scale-110 origin-center">
                  <PixelAvatar />
                </div>
              </div>

              <div className="mt-4 border border-white/10 bg-brand-dark/45 p-3">
                <p className="text-[10px] uppercase tracking-[0.14em] text-brand-blue/75">Focus</p>
                <p className="mt-2 text-sm text-brand-white/70 leading-relaxed">Frontend Product Development</p>
                <p className="mt-1 text-xs text-brand-white/50">React · Next.js · TypeScript</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="https://github.com/lnu8926-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-white/20 bg-brand-dark px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-brand-white/80 transition-colors hover:bg-brand-light"
                >
                  <GitBranch size={13} strokeWidth={2.5} />
                  Github
                </a>
                <CopyEmailButton
                  email="lnu8926@gmail.com"
                  idleLabel="Email 복사"
                  className="inline-flex items-center gap-1.5 border border-white/20 bg-brand-dark px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-brand-white/80 transition-colors hover:bg-brand-light"
                />
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 border border-brand-pink/50 bg-brand-dark px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-brand-pink/80 transition-colors hover:bg-brand-pink hover:text-white"
                >
                  <FileDown size={13} strokeWidth={2.5} />
                  Resume
                </a>
              </div>
            </div>

            <div className="p-4 md:p-5 space-y-5">
              <section className="space-y-2">
                <h3 className="text-xs uppercase tracking-[0.16em] text-brand-blue/80">핵심 요약</h3>
                <ul className="space-y-1.5 text-sm text-brand-white/70 leading-relaxed break-keep">
                  {INTRO_POINTS.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-brand-white/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-xs uppercase tracking-[0.16em] text-brand-blue/80">소프트 스킬</h3>
                <div className="grid gap-2">
                  {CORE_STRENGTHS.map((item) => (
                    <div key={item.title} className="border border-white/10 bg-brand-dark/45 p-3">
                      <p className="text-[11px] uppercase tracking-[0.14em] text-brand-blue/75">{item.title}</p>
                      <p className="mt-1.5 text-sm text-brand-white/65 leading-relaxed break-keep">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="text-xs uppercase tracking-[0.16em] text-brand-blue/80">기술 스택</h3>
                <div className="overflow-hidden border border-white/10 bg-brand-dark/45">
                  {SKILL_GROUPS.map((group, idx) => (
                    <div
                      key={group.label}
                      className={`grid gap-3 px-3 py-2.5 text-sm sm:grid-cols-[180px_1fr] ${idx !== SKILL_GROUPS.length - 1 ? "border-b border-white/10" : ""}`}
                    >
                      <p className="text-brand-blue/75">{group.label}</p>
                      <p className="text-brand-white/70 break-keep">{group.skills.join(", ")}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
