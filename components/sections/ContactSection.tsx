import { GitBranch, Mail } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  return (
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
            <Button variant="primary" size="lg" className="flex items-center gap-2">
              <Mail size={14} strokeWidth={2.5} />
              이메일 보내기
            </Button>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="lg" className="flex items-center gap-2 text-brand-white! border-white/30! hover:bg-brand-light! hover:border-white/50!">
              <GitBranch size={14} strokeWidth={2.5} />
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
