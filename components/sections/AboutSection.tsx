import { GitBranch, Mail } from "lucide-react";
import PixelAvatar from "@/components/sections/PixelAvatar";

const SKILLS = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Node.js", "PostgreSQL", "Prisma", "Redis",
  "Docker", "Vercel", "Git", "Figma",
  "Claude API", "Python", "CI/CD", "REST / GraphQL",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scanlines overflow-hidden min-h-screen flex flex-col justify-center scroll-mt-14 border-t border-white/10"
      style={{ background: "linear-gradient(to bottom, #161616, #111111)" }}
    >
      <div className="relative max-w-3xl mx-auto px-4 py-20 w-full flex flex-col items-center">

        {/* ABOUT 배지 — Hero OPEN TO CONNECT 스타일 */}
        <div className="inline-flex items-center gap-2 bg-brand-blue/15 border border-brand-blue/30 px-4 py-1.5 mb-12"
          style={{ animation: "fadeInUp 0.6s ease both" }}>
          <span className="w-1.5 h-1.5 bg-brand-pink animate-pulse" />
          <span className="font-(family-name:--font-pixel) text-[10px] uppercase tracking-widest text-brand-blue/90">
            ABOUT ME
          </span>
        </div>

        {/* 아바타 — 픽셀 프레임 패널 + glow */}
        <div
          className="border border-brand-blue/30 bg-brand-grey/50 p-4 mb-10"
          style={{
            boxShadow: "0 0 24px rgba(92,124,250,0.15), 4px 4px 0px rgba(92,124,250,0.3)",
            animation: "fadeInUp 0.6s ease 0.1s both",
          }}
        >
          <PixelAvatar />
        </div>

        {/* 이름 */}
        <h2
          className="font-(family-name:--font-pixel) text-xl md:text-2xl text-brand-white uppercase mb-3 glow-blue"
          style={{ animation: "fadeInUp 0.6s ease 0.2s both" }}
        >
          LEE Nam-eun
        </h2>

        {/* 역할 — 코드 태그 스타일 */}
        <p
          className="font-(family-name:--font-pixel) text-[9px] mb-8 tracking-widest"
          style={{ animation: "fadeInUp 0.6s ease 0.3s both" }}
        >
          <span className="text-brand-pink/70">&lt;</span>
          <span className="text-brand-blue/80">FRONT-END DEVELOPER</span>
          <span className="text-brand-pink/70"> /&gt;</span>
        </p>

        {/* 소개 텍스트 */}
        <p
          className="text-base text-brand-white/70 leading-relaxed text-center max-w-lg mb-10"
          style={{ animation: "fadeInUp 0.6s ease 0.4s both" }}
        >
          기획부터 운영까지, <b className="text-brand-white">서비스 전체를 보고 만드는</b> 개발자입니다.<br />
          Next.js · React · TypeScript를 주로 사용하며<br />
          사용자가 보고 느끼는 모든 것을 설계합니다.
        </p>

        {/* 스킬 태그 */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-10 max-w-xl"
          style={{ animation: "fadeInUp 0.6s ease 0.5s both" }}
        >
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="font-(family-name:--font-pixel) text-[7px] border border-white/15 px-2 py-1 bg-brand-grey shadow-[2px_2px_0px_rgba(92,124,250,0.15)] uppercase tracking-wide text-brand-white/60"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* 버튼 */}
        <div
          className="flex gap-3"
          style={{ animation: "fadeInUp 0.6s ease 0.6s both" }}
        >
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
    </section>
  );
}
