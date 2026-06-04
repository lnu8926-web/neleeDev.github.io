import { GitBranch, Mail, FileDown } from "lucide-react";
import PixelAvatar from "@/components/sections/PixelAvatar";
import Container from "@/components/layout/Container";

const SKILL_GROUPS = [
  {
    label: "Lang / Framework / Library",
    color: "#5C7CFA",
    skills: ["HTML", "CSS3", "TypeScript", "React", "Git", "JAVA", "JavaScript", "MSW", "SQL", "Next.js", "TanStack Query"],
  },
  {
    label: "Tools & Collaboration",
    color: "#FF85B3",
    skills: ["Figma", "Notion", "Google Workspace", "VSCode", "AI 활용", "Jira", "Slack", "Discord", "Postman"],
  },
  {
    label: "Infra / DevOps",
    color: "#6ee7b7",
    skills: ["Vercel", "GitHub Actions", "AWS", "Docker", "Supabase", "Firebase", "GitHub Pages"],
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scanlines overflow-hidden flex flex-col md:min-h-[calc(100dvh-var(--nav-h))] scroll-mt-14 border-t border-white/10"
      style={{ background: "linear-gradient(to bottom, #161616, #111111)" }}
    >
      {/* flex-1로 컨테이너가 섹션 전체 높이를 채우고, justify-evenly로 세 블록에 공간 분배 */}
      <Container className="relative flex-1 py-10 md:py-[clamp(1rem,3dvh,3rem)] flex flex-col justify-center gap-[clamp(1rem,2.5dvh,2rem)]">

        {/* 1. ABOUT ME 배지 */}
        <div className="flex justify-center" style={{ animation: "fadeInUp 0.6s ease both" }}>
          <div className="inline-flex items-center gap-2 bg-brand-blue/15 border border-brand-blue/30 px-4 py-1.5">
            <span className="w-1.5 h-1.5 bg-brand-pink animate-pulse" />
            <span className="font-(family-name:--font-pixel) text-[10px] uppercase tracking-widest text-brand-blue/90">
              ABOUT ME
            </span>
          </div>
        </div>

        {/* 2. 프로필 그리드: 아바타·이름·역할(왼쪽) + 소개(오른쪽) */}
        <div
          className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-8 md:gap-10 md:items-stretch"
          style={{ animation: "fadeInUp 0.6s ease 0.1s both" }}
        >
          {/* 왼쪽 — 데스크톱에서 left-align으로 스킬 카드 왼쪽 끝선과 맞춤 */}
          <div className="flex flex-col items-center md:items-start gap-3 h-full">
            <div
              className="border border-brand-blue/30 bg-brand-grey/50 p-3"
              style={{ boxShadow: "0 0 24px rgba(92,124,250,0.15), 4px 4px 0px rgba(92,124,250,0.3)" }}
            >
              <PixelAvatar />
            </div>
            <h2 className="font-(family-name:--font-pixel) text-xl md:text-2xl text-brand-white uppercase glow-blue">
              LEE Nam-eun
            </h2>
            <p className="font-(family-name:--font-pixel) text-[9px] tracking-widest">
              <span className="text-brand-pink/70">&lt;</span>
              <span className="text-brand-blue/80">FRONT-END DEVELOPER</span>
              <span className="text-brand-pink/70"> /&gt;</span>
            </p>
            {/* 버튼 — mt-auto로 왼쪽 컬럼 하단 고정 */}
            <div className="flex gap-3 flex-wrap justify-center md:justify-start mt-auto">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 border border-white/20 px-3 py-2 bg-brand-grey shadow-[2px_2px_0px_rgba(92,124,250,0.2)] hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-colors text-brand-white/70"
              >
                <GitBranch size={14} strokeWidth={2.5} />
                <span className="font-(family-name:--font-pixel) text-[8px] uppercase">GITHUB</span>
              </a>
              <a
                href="mailto:lnu8926@gmail.com"
                className="flex items-center gap-1.5 border border-white/20 px-3 py-2 bg-brand-grey shadow-[2px_2px_0px_rgba(92,124,250,0.2)] hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-colors text-brand-white/70"
              >
                <Mail size={14} strokeWidth={2.5} />
                <span className="font-(family-name:--font-pixel) text-[8px] uppercase">EMAIL</span>
              </a>
              {/* TODO: 이력서 PDF를 /public/resume.pdf 에 두고 href 연결 */}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-1.5 border border-brand-pink/50 px-3 py-2 bg-brand-grey shadow-[2px_2px_0px_rgba(255,133,179,0.2)] hover:bg-brand-pink hover:border-brand-pink hover:text-white transition-colors text-brand-pink/70"
              >
                <FileDown size={14} strokeWidth={2.5} />
                <span className="font-(family-name:--font-pixel) text-[8px] uppercase">RESUME</span>
              </a>
            </div>
          </div>

          {/* 오른쪽: 소개 텍스트 */}
          <ul className="text-sm text-brand-white/70 leading-relaxed border-l-4 border-brand-blue/50 pl-4 bg-brand-grey/40 flex flex-col justify-center gap-4 py-4 break-keep h-full">
            {[
              "기획 단계 참여부터 최종 배포 및 운영까지 서비스 구축의 모든 과정을 파악하고 실행에 옮기는 프론트엔드 개발자",
              "QA와 보안 및 현장 피드백 데이터를 반영하여 실제 운영 환경에서 발생 가능한 변수까지 방어하는 안정적인 설계",
              "JAVA 실무 경험을 활용해 API 흐름과 서버 코드를 직접 분석하여 백엔드 개발자와의 소통 비용을 줄이는 기술 역량",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-brand-blue/70 shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. 스킬 3열 그리드 */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:items-stretch"
          style={{ animation: "fadeInUp 0.6s ease 0.2s both" }}
        >
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.label}
              className="border border-white/10 bg-brand-grey flex flex-col"
              style={{ boxShadow: `4px 4px 0px ${group.color}40` }}
            >
              {/* 헤더 — 축약 라벨 + 작은 폰트로 한 줄 유지 */}
              <div className="px-3 py-2.5 border-b border-white/10 shrink-0" style={{ backgroundColor: `${group.color}18` }}>
                <span className="font-(family-name:--font-pixel) text-[9px] uppercase tracking-wide" style={{ color: group.color }}>
                  ▸ {group.label}
                </span>
              </div>
              {/* 바디 */}
              <div className="p-3 flex flex-wrap gap-1.5 flex-1 content-start">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 text-brand-white/80 border border-white/15 bg-brand-dark tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
