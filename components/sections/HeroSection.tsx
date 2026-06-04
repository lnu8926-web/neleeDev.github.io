import Button from "@/components/ui/Button";
import HeroHeadline from "@/components/sections/HeroHeadline";
import PixelParticles from "@/components/sections/PixelParticles";
import Container from "@/components/layout/Container";

export default function HeroSection() {
  return (
    <section id="home" className="relative scanlines overflow-hidden border-b border-white/10 bg-brand-dark scroll-mt-14 min-h-screen flex flex-col justify-center">
      <PixelParticles />
      <Container className="relative py-20 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-brand-blue/15 border border-brand-blue/30 px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-(family-name:--font-pixel) text-[10px] uppercase tracking-widest text-brand-blue/90">
            OPEN TO CONNECT
          </span>
        </div>

        <HeroHeadline />

        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#projects">
            <Button variant="primary" size="lg" className="min-w-40">
              프로젝트 보기
            </Button>
          </a>
          <a href="#contact">
            <Button variant="ghost" size="lg" className="min-w-40">
              연락하기
            </Button>
          </a>
        </div>
      </Container>

      <a
        href="#about"
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-white/40 hover:text-brand-white/70 transition-colors"
      >
        <span className="font-(family-name:--font-pixel) text-[7px] uppercase tracking-widest">
          SCROLL
        </span>
        <span className="text-sm animate-[blink_3s_ease-in-out_infinite]">▼</span>
      </a>
    </section>
  );
}
