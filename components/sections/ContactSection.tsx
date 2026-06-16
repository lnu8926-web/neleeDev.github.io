import { GitBranch, Mail } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/sections/SectionHeader";
import ContactModalTrigger from "@/components/ui/ContactModalTrigger";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scanlines overflow-hidden min-h-screen flex flex-col justify-center border-t border-white/10 scroll-mt-14"
      style={{ background: "linear-gradient(to bottom, #0d0d0d, #111111)" }}
    >
      <Container className="relative py-20 flex flex-col items-center">
        <SectionHeader
          title="CONTACT.init()"
          description="새로운 기회와 협업 제안을 기다리고 있습니다."
          align="center"
          className="mb-12"
        />

        {/* 버튼 — 핑크(이메일) + 블루(GitHub) */}
        <div
          className="flex flex-col sm:flex-row gap-4"
          style={{ animation: "fadeInUp 0.6s ease 0.1s both" }}
        >
          <ContactModalTrigger>
            {(openModal) => (
              <button
                onClick={openModal}
                className="flex items-center justify-center gap-2 border border-brand-pink px-6 py-3 bg-brand-pink/10 hover:bg-brand-pink hover:text-white transition-colors text-brand-pink"
                style={{ boxShadow: "4px 4px 0px rgba(255,133,179,0.25)" }}
              >
                <Mail size={16} strokeWidth={2.5} />
                <span className="text-xs font-semibold tracking-[0.08em]">
                  이메일 보내기
                </span>
              </button>
            )}
          </ContactModalTrigger>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-brand-blue px-6 py-3 bg-brand-blue/10 hover:bg-brand-blue hover:text-white transition-colors text-brand-blue"
            style={{ boxShadow: "4px 4px 0px rgba(92,124,250,0.25)" }}
          >
            <GitBranch size={16} strokeWidth={2.5} />
            <span className="text-xs font-semibold tracking-[0.08em] uppercase">
              GitHub
            </span>
          </a>
        </div>

        {/* 하단 장식 */}
        <p className="text-[10px] text-brand-white/20 uppercase tracking-[0.12em] mt-20" style={{ animation: "fadeInUp 0.6s ease 0.2s both" }}>
          © 2026 LEE Nam-eun — Built with Next.js
        </p>

      </Container>
    </section>
  );
}
