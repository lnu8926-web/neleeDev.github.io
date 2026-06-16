"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "@/components/layout/Container";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const activeHrefRef = useRef("#home");
  const switchTimerRef = useRef<number | null>(null);

  const activateHref = (href: string) => {
    activeHrefRef.current = href;
    setActiveHref(href);
  };

  useEffect(() => {
    let rafId = 0;
    const SWITCH_DELAY_MS = 120;
    const RATIO_DELTA_TO_SWITCH = 0.15;

    const clearSwitchTimer = () => {
      if (switchTimerRef.current) {
        window.clearTimeout(switchTimerRef.current);
        switchTimerRef.current = null;
      }
    };

    const getSectionRatio = (section: HTMLElement, headerHeight: number): number => {
      const rect = section.getBoundingClientRect();
      const viewportTop = headerHeight;
      const viewportBottom = window.innerHeight;
      const visibleTop = Math.max(rect.top, viewportTop);
      const visibleBottom = Math.min(rect.bottom, viewportBottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      if (visibleHeight <= 0 || rect.height <= 0) return 0;
      return visibleHeight / rect.height;
    };

    const pickCurrentHref = () => {
      const headerHeight = document.querySelector("header")?.clientHeight ?? 0;
      const doc = document.documentElement;
      const maxScroll = Math.max(0, doc.scrollHeight - window.innerHeight);

      if (window.scrollY <= 2) {
        return { href: NAV_LINKS[0].href, ratio: 1 };
      }

      if (window.scrollY >= maxScroll - 2) {
        return { href: NAV_LINKS[NAV_LINKS.length - 1].href, ratio: 1 };
      }

      const thresholdY = headerHeight + window.innerHeight * 0.35;
      let thresholdCandidate = NAV_LINKS[0].href;
      let maxRatio = 0;
      let maxRatioHref = NAV_LINKS[0].href;

      for (const link of NAV_LINKS) {
        const sectionId = link.href.replace("#", "");
        const section = document.getElementById(sectionId);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= thresholdY) {
          thresholdCandidate = link.href;
        }

        const ratio = getSectionRatio(section, headerHeight);
        if (ratio > maxRatio) {
          maxRatio = ratio;
          maxRatioHref = link.href;
        }
      }

      if (maxRatioHref !== thresholdCandidate) {
        return { href: thresholdCandidate, ratio: maxRatio };
      }

      return { href: maxRatioHref, ratio: maxRatio };
    };

    const getRatioByHref = (href: string): number => {
      const headerHeight = document.querySelector("header")?.clientHeight ?? 0;
      const sectionId = href.replace("#", "");
      const section = document.getElementById(sectionId);
      if (!section) return 0;
      return getSectionRatio(section, headerHeight);
    };

    const updateActiveSection = () => {
      const next = pickCurrentHref();
      const currentHref = activeHrefRef.current;

      if (next.href === currentHref) {
        clearSwitchTimer();
        rafId = 0;
        return;
      }

      const currentRatio = getRatioByHref(currentHref);
      const ratioDelta = next.ratio - currentRatio;

      if (ratioDelta >= RATIO_DELTA_TO_SWITCH) {
        clearSwitchTimer();
        activateHref(next.href);
        rafId = 0;
        return;
      }

      clearSwitchTimer();
      switchTimerRef.current = window.setTimeout(() => {
        const confirm = pickCurrentHref();
        if (confirm.href !== activeHrefRef.current) {
          activateHref(confirm.href);
        }
        switchTimerRef.current = null;
      }, SWITCH_DELAY_MS);

      rafId = 0;
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      clearSwitchTimer();
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <header className="bg-brand-grey border-b border-white/10 sticky top-0 z-50">
      <Container className="h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-(family-name:--font-pixel) text-[10px] uppercase tracking-widest">
          <span className="text-brand-pink/70">&lt;</span>
          <span className="text-brand-white">NELEE.DEV</span>
          <span className="text-brand-pink/70"> /&gt;</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={[
                "font-(family-name:--font-pixel) text-[10px] uppercase tracking-[0.12em] px-3 py-2 transition-colors border",
                link.href === activeHref
                  ? "text-brand-pink border-transparent"
                  : "text-brand-white/60 border-transparent hover:text-brand-white hover:bg-white/10 hover:border-white/20",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-white/70 border border-white/20 p-1.5 active:translate-y-0.5 transition-transform hover:border-white/40 hover:text-brand-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={16} strokeWidth={2.5} /> : <Menu size={16} strokeWidth={2.5} />}
        </button>
      </Container>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-brand-grey">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={[
                "block font-(family-name:--font-pixel) text-[10px] uppercase tracking-[0.12em] px-4 py-3 border-b border-white/10 transition-colors",
                link.href === activeHref
                  ? "text-brand-pink"
                  : "text-brand-white/60 hover:text-brand-white",
              ].join(" ")}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
