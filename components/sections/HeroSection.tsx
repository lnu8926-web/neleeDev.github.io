import Button from "@/components/ui/Button";
import HeroHeadline from "@/components/sections/HeroHeadline";

export default function HeroSection() {
  return (
    <section id="home" className="relative scanlines overflow-hidden border-b border-white/10 bg-brand-dark scroll-mt-14 min-h-screen flex flex-col justify-center">
      <div className="relative max-w-5xl mx-auto px-4 py-20 flex flex-col items-center w-full">
        <div className="inline-flex items-center gap-2 border border-brand-blue/50 bg-brand-grey px-3 py-1 mb-6 shadow-[2px_2px_0px_rgba(92,124,250,0.3)]">
          <span className="w-2 h-2 bg-brand-blue border border-brand-blue/60 animate-pulse" />
          <span className="font-(family-name:--font-pixel) text-[7px] uppercase tracking-widest text-brand-blue">
            AVAILABLE FOR HIRE
          </span>
        </div>

        <HeroHeadline />

        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#projects">
            <Button variant="primary" size="lg">
              프로젝트 보기
            </Button>
          </a>
          <a href="#contact">
            <Button variant="ghost" size="lg" className="text-brand-white! border-white/30! hover:bg-brand-light! hover:border-white/50!">
              연락하기
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
