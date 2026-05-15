"use client";

import { useEffect, useRef } from "react";

export default function ScrollController() {
  const isScrolling = useRef(false);

  useEffect(() => {
    const getSections = (): HTMLElement[] =>
      Array.from(document.querySelectorAll("section[id]"));

    const getHeaderHeight = (): number =>
      (document.querySelector("header") as HTMLElement)?.offsetHeight ?? 0;

    const getCurrentIndex = (): number => {
      const sections = getSections();
      const threshold = getHeaderHeight() + 10;
      let current = 0;
      sections.forEach((section, i) => {
        if (section.offsetTop <= window.scrollY + threshold) current = i;
      });
      return current;
    };

    const scrollToSection = (index: number) => {
      const sections = getSections();
      if (index < 0 || index >= sections.length) return;
      if (isScrolling.current) return;

      isScrolling.current = true;
      const target = sections[index];
      const top = target.offsetTop - getHeaderHeight();
      window.scrollTo({ top, behavior: "smooth" });

      // smooth scroll 완료 대기 (800ms)
      setTimeout(() => { isScrolling.current = false; }, 900);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      scrollToSection(getCurrentIndex() + direction);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToSection(getCurrentIndex() + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSection(getCurrentIndex() - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
