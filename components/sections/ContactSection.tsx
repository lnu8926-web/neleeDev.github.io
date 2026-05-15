import { GitBranch, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scanlines overflow-hidden min-h-screen flex flex-col justify-center border-t border-white/10 scroll-mt-14"
      style={{ background: "linear-gradient(to bottom, #0d0d0d, #111111)" }}
    >
      <div className="relative max-w-3xl mx-auto px-4 py-20 w-full flex flex-col items-center">

        {/* 배지 — 핑크 + 블루 혼합 */}
        <div
          className="inline-flex items-center gap-2 border px-4 py-1.5 mb-12"
          style={{
            background: "linear-gradient(90deg, rgba(92,124,250,0.12), rgba(255,133,179,0.12))",
            borderColor: "rgba(92,124,250,0.3)",
            animation: "fadeInUp 0.6s ease both",
          }}
        >
          <span className="w-1.5 h-1.5 bg-brand-blue animate-pulse" />
          <span className="font-(family-name:--font-pixel) text-[10px] uppercase tracking-widest text-brand-white/80">
            CONTACT
          </span>
          <span className="w-1.5 h-1.5 bg-brand-pink animate-pulse" />
        </div>

        {/* 헤드라인 */}
        <h2
          className="font-(family-name:--font-pixel) text-xl md:text-2xl uppercase text-center mb-4 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease 0.1s both" }}
        >
          <span className="text-brand-pink/60 glow-pink">&gt;</span>
          {" "}
          <span className="glow-blue text-brand-white">CONTACT</span>
          <span className="text-brand-white/40">.</span>
          <span className="glow-pink text-brand-pink">init</span>
          <span className="text-brand-white/40">()</span>
        </h2>

        {/* 서브텍스트 */}
        <p
          className="text-base text-brand-white/60 leading-relaxed text-center max-w-md mb-4"
          style={{ animation: "fadeInUp 0.6s ease 0.2s both" }}
        >
          새로운 기회와 협업 제안을 기다리고 있습니다.
        </p>
        <p
          className="font-(family-name:--font-pixel) text-[8px] text-brand-white/30 uppercase tracking-widest mb-12"
          style={{ animation: "fadeInUp 0.6s ease 0.3s both" }}
        >
          lnu8926@gmail.com
        </p>

        {/* 버튼 — 핑크(이메일) + 블루(GitHub) */}
        <div
          className="flex flex-col sm:flex-row gap-4"
          style={{ animation: "fadeInUp 0.6s ease 0.4s both" }}
        >
          <a
            href="mailto:lnu8926@gmail.com"
            className="flex items-center justify-center gap-2 border border-brand-pink px-6 py-3 bg-brand-pink/10 hover:bg-brand-pink hover:text-white transition-colors text-brand-pink"
            style={{ boxShadow: "4px 4px 0px rgba(255,133,179,0.25)" }}
          >
            <Mail size={16} strokeWidth={2.5} />
            <span className="font-(family-name:--font-pixel) text-[9px] uppercase tracking-wide">
              이메일 보내기
            </span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-brand-blue px-6 py-3 bg-brand-blue/10 hover:bg-brand-blue hover:text-white transition-colors text-brand-blue"
            style={{ boxShadow: "4px 4px 0px rgba(92,124,250,0.25)" }}
          >
            <GitBranch size={16} strokeWidth={2.5} />
            <span className="font-(family-name:--font-pixel) text-[9px] uppercase tracking-wide">
              GitHub
            </span>
          </a>
        </div>

        {/* 하단 장식 */}
        <p
          className="font-(family-name:--font-pixel) text-[7px] text-brand-white/15 uppercase tracking-widest mt-20"
          style={{ animation: "fadeInUp 0.6s ease 0.5s both" }}
        >
          © 2026 LEE Nam-eun — Built with Next.js
        </p>

      </div>
    </section>
  );
}
