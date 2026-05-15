import { GitBranch, Mail, User } from "lucide-react";

const SKILLS = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Node.js", "PostgreSQL", "Prisma", "Redis",
  "Docker", "Vercel", "Git", "Figma",
  "Claude API", "Python", "CI/CD", "REST / GraphQL",
];

export default function AboutSection() {
  return (
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
          <div className="border border-white/15 shadow-[4px_4px_0px_rgba(92,124,250,0.2)] bg-brand-light aspect-square max-w-50 flex flex-col items-center justify-center gap-2">
            <User size={48} strokeWidth={1.5} className="text-brand-white/40" />
            <span className="font-(family-name:--font-pixel) text-[7px] text-brand-white/40 uppercase">
              PHOTO
            </span>
          </div>

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
  );
}
