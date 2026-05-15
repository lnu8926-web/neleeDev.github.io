import { Code2, Layers, Zap, Cpu, Globe, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Card from "@/components/Card";

const FEATURES = [
  {
    icon: <Code2 size={18} strokeWidth={2.5} />,
    title: "CLEAN CODE",
    description: "읽기 좋고, 유지하기 쉬운 코드를 작성합니다. 명확한 구조와 일관된 컨벤션이 기본입니다.",
    accent: false,
  },
  {
    icon: <Layers size={18} strokeWidth={2.5} />,
    title: "FULL STACK",
    description: "프론트엔드부터 백엔드까지. Next.js, Node.js, 데이터베이스 설계를 모두 다룹니다.",
    accent: true,
  },
  {
    icon: <Zap size={18} strokeWidth={2.5} />,
    title: "PERFORMANCE",
    description: "Core Web Vitals 최적화와 번들 사이즈 최소화로 빠른 사용자 경험을 제공합니다.",
    accent: false,
  },
  {
    icon: <Cpu size={18} strokeWidth={2.5} />,
    title: "AI INTEGRATION",
    description: "LLM API와 에이전트 파이프라인을 활용해 지능형 기능을 서비스에 통합합니다.",
    accent: true,
  },
  {
    icon: <Globe size={18} strokeWidth={2.5} />,
    title: "DEPLOYMENT",
    description: "Vercel, Docker, CI/CD를 통한 안정적인 배포와 모니터링 환경을 구성합니다.",
    accent: false,
  },
  {
    icon: <Sparkles size={18} strokeWidth={2.5} />,
    title: "UI / UX",
    description: "픽셀 아트부터 모던 디자인까지. 사용자 경험을 중심에 둔 인터페이스를 만듭니다.",
    accent: true,
  },
];

const STATS = [
  { value: "3+", label: "YEARS EXP" },
  { value: "20+", label: "PROJECTS" },
  { value: "100%", label: "PASSION" },
  { value: "∞", label: "COFFEE" },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col flex-1">
        {/* ── Hero Section ── */}
        <section className="relative scanlines overflow-hidden border-b-2 border-brand-dark bg-brand-light">
          <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
            {/* 배지 */}
            <div className="inline-flex items-center gap-2 border-2 border-brand-dark bg-brand-white px-3 py-1 mb-6 shadow-[2px_2px_0px_#222]">
              <span className="w-2 h-2 bg-brand-dark border border-brand-dark animate-pulse" />
              <span className="font-(family-name:--font-pixel) text-[7px] uppercase tracking-widest text-brand-dark">
                AVAILABLE FOR HIRE
              </span>
            </div>

            {/* 메인 헤드라인 */}
            <h1 className="font-(family-name:--font-pixel) text-3xl md:text-5xl lg:text-6xl text-brand-dark leading-tight md:leading-tight uppercase mb-6 max-w-3xl">
              PIXEL<br />
              <span className="text-brand-black">DASHBOARD</span>
            </h1>

            <p className="text-base md:text-lg text-brand-dark max-w-xl leading-relaxed mb-10 border-l-4 border-brand-dark pl-4 bg-brand-white/60">
              8비트 감성과 현대적 기술의 조화.<br />
              깔끔하고 직관적인 대시보드로<br />
              당신의 프로젝트를 빛나게 만듭니다.
            </p>

            {/* CTA 버튼 그룹 */}
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="lg" className="bg-brand-dark! text-brand-white hover:bg-brand-black! hover:text-brand-white!">
                내 작업 보기
              </Button>
              <Button variant="ghost" size="lg" className="bg-brand-white! text-brand-dark border-brand-dark! hover:bg-brand-dark! hover:text-brand-white!">
                연락하기
              </Button>
            </div>

            {/* 스탯 바 */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-brand-dark shadow-[4px_4px_0px_#222] max-w-xl bg-brand-white/80">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={[
                    "flex flex-col items-center justify-center py-4 px-3",
                    "bg-brand-light",
                    i < STATS.length - 1 ? "border-r-2 border-brand-dark" : "",
                    i === 1 || i === 3 ? "border-t-2 md:border-t-0 border-brand-dark" : "",
                  ].join(" ")}
                >
                  <span className="font-(family-name:--font-pixel) text-xl md:text-3xl text-brand-dark">
                    {stat.value}
                  </span>
                  <span className="font-(family-name:--font-pixel) text-[7px] text-brand-dark uppercase tracking-widest mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Feature Cards Section ── */}
        <section id="work" className="max-w-6xl mx-auto px-4 py-16 md:py-24 w-full">
          {/* 섹션 헤더 */}
          <div className="flex items-center gap-4 mb-10">
            <div className="border-2 border-brand-dark bg-brand-white px-3 py-1 shadow-[2px_2px_0px_#222]">
              <span className="font-(family-name:--font-pixel) text-[8px] text-brand-dark uppercase tracking-widest">
                FEATURES
              </span>
            </div>
            <div className="flex-1 h-0.5 bg-brand-dark" />
          </div>

          <h2 className="font-(family-name:--font-pixel) text-lg md:text-2xl text-brand-dark uppercase mb-2">
            주요 기능
          </h2>
          <p className="text-base text-brand-dark mb-10 max-w-lg leading-relaxed">
            다양한 기술과 경험으로<br />
            <b className="text-brand-dark">깔끔하고 특별한</b> 웹서비스를 만듭니다.
          </p>

          {/* 카드 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((feature, idx) => (
              <Card
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                accent={false}
                className="bg-brand-white hover:bg-brand-light! hover:scale-105 transition-transform border-2 border-brand-dark shadow-[2px_2px_0px_#222]"
              />
            ))}
          </div>
        </section>

        {/* ── CTA 배너 ── */}
        <section id="contact" className="border-t-2 border-b-2 border-brand-dark bg-brand-light">
          <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-(family-name:--font-pixel) text-lg md:text-2xl text-brand-dark uppercase mb-2">
                프로젝트 문의
              </h3>
              <p className="text-brand-dark/80 text-base">
                궁금한 점, 아이디어, 잡담도 환영!<br />
                <b className="text-brand-dark">지금 바로 DM 주세요 :)</b>
              </p>
            </div>
            <div className="shrink-0">
              <Button
                variant="secondary"
                size="lg"
                className="bg-brand-dark! text-brand-white border-brand-dark! shadow-[3px_3px_0px_#222]!"
              >
                DM 보내기
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
