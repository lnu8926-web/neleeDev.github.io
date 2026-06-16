import Container from "@/components/layout/Container";
import SectionHeader from "@/components/sections/SectionHeader";

const EXPERIENCES = [
  {
    period: "2024.07 — 2025.07",
    org: "(주) 멘토스파워 · 에듀윌 파견",
    role: "에듀테크팀 | 매니저",
    bullets: [
      "기능 개선안 제안부터 배포까지 전 과정을 주도하며 유관 부서 간 기술 협업 및 커뮤니케이션 리드",
      "고객사별 2,000명 이상 규모에서 Jira를 활용해 일 평균 20건 내외의 요구사항 수렴 및 관리",
      "화면 구성 및 로직을 구글 문서로 상세화하여 기획 정확도를 높이고 개발 생산성을 효율적으로 개선",
    ],
  },
  {
    period: "2022.05 — 2023.08",
    org: "(주) 링크올 (LinkAll) · 풀스택 개발",
    role: "개발팀 | 주임연구원",
    bullets: [
      "아날로그 공정의 시스템 자동화 및 대규모 데이터 동기화 최적화를 통해 운영 효율과 데이터 신뢰성을 제고함",
      "음성 호출을 TTS 시스템으로 자동화하여 접수처의 호출 업무 소요 시간을 기존 대비 90% 이상 단축함",
      "CRM-EMR 간 데이터 동기화 최적화로 3만 건의 데이터 불일치 및 100인 규모 행정 혼선 방지",
    ],
  },
  {
    period: "2021.08 — 2022.04",
    org: "(주) 신일아엔씨 · 풀스택 개발",
    role: "소프트웨어 연구원 | 사원",
    bullets: [
      "현장 프로세스 자동화 및 데이터 시각화 솔루션 구축을 통해 비즈니스 운영 효율과 데이터 가독성을 극대화함",
      "이상 수치 발생 시 즉각적인 시각 알림을 구현하여 장애 조기 발견 및 대응 속도를 기존 대비 2배 향상함",
      "복잡한 텍스트 데이터를 차트와 그래프로 시각화하여 정보 확인 소요 시간을 기존 대비 70% 단축함",
    ],
  },
  {
    period: "2018.02 — 2020.08",
    org: "(주) 큰수레정보기술 · 기술 지원 / 시스템 운영",
    role: "사원",
    bullets: [
      "기술 문의 데이터 분석 기반의 운영 체계 구축 및 매뉴얼 배포를 통해 기술 지원 효율성을 극대화함",
      "매월 발생하는 주요 기술 문의를 데이터화하고 정기 매뉴얼을 제작·배포하여 단순 반복 문의 빈도 감소",
      "실사용자 중심 가이드라인 구축으로 고객사 서비스 숙련도를 제고하여 불필요한 기술 지원 비용을 절감함",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative scanlines overflow-hidden border-t border-white/10 scroll-mt-14 bg-linear-to-b from-brand-dark to-brand-black"
    >
      <Container className="relative py-14 sm:py-16 lg:py-20">

        <SectionHeader title="EXPERIENCE" className="mb-8" />

        {/* 타임라인 */}
        <div className="relative mt-2 pl-5 md:pl-10" style={{ animation: "fadeInUp 0.6s ease 0.1s both" }}>
          <div className="absolute left-2.25 top-0 bottom-0 w-px bg-linear-to-b from-brand-blue/60 via-white/10 to-transparent md:left-5.25" />

          <div className="flex flex-col gap-6 md:gap-8">
            {EXPERIENCES.map((exp, i) => (
              <article
                key={i}
                className="relative grid grid-cols-1 md:grid-cols-[190px_1fr] gap-4 md:gap-6"
              >
                <div className="relative pt-1 md:pt-1.5">
                  <span className="absolute -left-7.75 top-2 h-4 w-4 rounded-full border border-brand-blue/70 bg-brand-dark shadow-[0_0_0_4px_rgba(92,124,250,0.12)] md:-left-8" />
                  <div className="inline-flex items-center gap-2 border border-brand-blue/30 bg-brand-blue/10 px-3 py-1.5 mb-3">
                    <span className="font-(family-name:--font-pixel) text-[9px] uppercase tracking-widest text-brand-blue/90">
                      {exp.period}
                    </span>
                  </div>
                  <p className="max-w-[18ch] text-xs leading-relaxed text-brand-white/45 break-keep">
                    {exp.org}
                  </p>
                </div>

                <div
                  className="border border-white/10 overflow-hidden bg-brand-grey/70"
                  style={{ boxShadow: "3px 3px 0px rgba(92,124,250,0.1)" }}
                >
                  <div className="px-5 py-4 border-b border-white/10 bg-brand-light/80 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-[15px] font-bold text-brand-white/90 leading-tight">{exp.org}</p>
                      <p className="mt-1 text-xs text-brand-white/50">{exp.role}</p>
                    </div>
                    <span className="font-(family-name:--font-pixel) text-[7px] uppercase tracking-widest text-brand-white/45">
                      {i === 0 ? "LATEST" : "PAST ROLE"}
                    </span>
                  </div>

                  <div className="px-5 py-5 bg-brand-dark/60">
                    <div className="mb-4 rounded-md border border-brand-blue/15 bg-brand-blue/8 px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-2">
                        핵심 기여
                      </p>
                      <p className="text-sm md:text-[15px] leading-7 text-brand-white/78 break-keep">
                        {exp.bullets[0]}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-white/35 mb-2">
                        세부 내용
                      </p>
                      <ul className="flex flex-col gap-2.5">
                        {exp.bullets.slice(1).map((b, j) => (
                          <li key={j} className="flex gap-3 text-sm text-brand-white/62 leading-relaxed break-keep">
                            <span className="mt-0.5 shrink-0 text-brand-blue/60">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
