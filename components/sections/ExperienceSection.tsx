import { GraduationCap, Briefcase } from "lucide-react";

const EDUCATION = [
  {
    period: "20XX.XX — 20XX.XX",
    school: "학교명을 입력하세요",
    major: "전공명",
    note: "관련 수업 또는 특이사항 (선택)",
  },
];

const EXPERIENCES = [
  {
    period: "20XX.XX — 20XX.XX",
    org: "소속 / 활동명을 입력하세요",
    role: "역할 (예: 프론트엔드 인턴 / 팀장 / 수료생)",
    description: "무엇을 했는지 한두 줄로 입력하세요.",
  },
  {
    period: "20XX.XX — 20XX.XX",
    org: "두 번째 경력/활동",
    role: "역할",
    description: "설명을 입력하세요.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative scanlines overflow-hidden min-h-screen flex flex-col justify-center border-t border-white/10 scroll-mt-14"
      style={{ background: "linear-gradient(to bottom, #111111, #0d0d0d)" }}
    >
      <div className="relative max-w-3xl mx-auto px-4 py-20 w-full">

        {/* 배지 */}
        <div
          className="inline-flex items-center gap-2 bg-brand-blue/15 border border-brand-blue/30 px-4 py-1.5 mb-12"
          style={{ animation: "fadeInUp 0.6s ease both" }}
        >
          <span className="w-1.5 h-1.5 bg-brand-pink animate-pulse" />
          <span className="font-(family-name:--font-pixel) text-[10px] uppercase tracking-widest text-brand-blue/90">
            EXPERIENCE
          </span>
        </div>

        {/* 경력 / 활동 */}
        <div className="mb-14" style={{ animation: "fadeInUp 0.6s ease 0.1s both" }}>
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={14} className="text-brand-blue/70" strokeWidth={2.5} />
            <span className="font-(family-name:--font-pixel) text-[9px] uppercase tracking-widest text-brand-blue/70">
              CAREER &amp; ACTIVITY
            </span>
          </div>

          <div className="relative border-l border-white/10 pl-6 flex flex-col gap-8">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative">
                {/* 타임라인 점 */}
                <span className="absolute -left-[25px] top-1 w-2 h-2 border border-brand-blue/50 bg-brand-dark" />

                <span className="font-(family-name:--font-pixel) text-[8px] text-brand-white/30 uppercase tracking-widest block mb-1">
                  {exp.period}
                </span>
                <div className="border border-white/10 bg-brand-grey p-4"
                  style={{ boxShadow: "3px 3px 0px rgba(92,124,250,0.12)" }}>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-(family-name:--font-pixel) text-[10px] text-brand-white uppercase tracking-wide">
                      {exp.org}
                    </span>
                    <span className="font-(family-name:--font-pixel) text-[7px] border border-brand-blue/40 bg-brand-blue/10 text-brand-blue px-2 py-0.5 uppercase">
                      {exp.role}
                    </span>
                  </div>
                  <p className="text-sm text-brand-white/55 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 학력 */}
        <div style={{ animation: "fadeInUp 0.6s ease 0.2s both" }}>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={14} className="text-brand-pink/70" strokeWidth={2.5} />
            <span className="font-(family-name:--font-pixel) text-[9px] uppercase tracking-widest text-brand-pink/70">
              EDUCATION
            </span>
          </div>

          <div className="relative border-l border-white/10 pl-6 flex flex-col gap-8">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[25px] top-1 w-2 h-2 border border-brand-pink/50 bg-brand-dark" />

                <span className="font-(family-name:--font-pixel) text-[8px] text-brand-white/30 uppercase tracking-widest block mb-1">
                  {edu.period}
                </span>
                <div className="border border-white/10 bg-brand-grey p-4"
                  style={{ boxShadow: "3px 3px 0px rgba(255,133,179,0.12)" }}>
                  <p className="font-(family-name:--font-pixel) text-[10px] text-brand-white uppercase tracking-wide mb-1">
                    {edu.school}
                  </p>
                  <p className="font-(family-name:--font-pixel) text-[8px] text-brand-white/50 uppercase tracking-widest mb-2">
                    {edu.major}
                  </p>
                  {edu.note && (
                    <p className="text-xs text-brand-white/40 leading-relaxed">{edu.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
