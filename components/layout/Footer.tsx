import Link from "next/link";
import { GitBranch, ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import CopyEmailButton from "@/components/ui/CopyEmailButton";

const QUICK_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
] as const;

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-brand-black">
      <Container className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <p className="font-(family-name:--font-pixel) text-[10px] uppercase tracking-[0.12em] text-brand-white/35">
          © 2026 NEELEE.DEV
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center border border-white/15 bg-brand-dark px-2.5 py-1.5 text-[10px] uppercase tracking-[0.12em] text-brand-white/65 transition-colors hover:border-white/30 hover:text-brand-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/lnu8926-web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-white/20 bg-brand-dark px-2.5 py-1.5 text-[10px] uppercase tracking-[0.12em] text-brand-white/80 transition-colors hover:bg-brand-light"
          >
            <GitBranch size={12} strokeWidth={2.5} />
            GitHub
          </a>
          <CopyEmailButton
            email="lnu8926@gmail.com"
            idleLabel="Email"
            className="inline-flex items-center gap-1.5 border border-brand-pink/45 bg-brand-dark px-2.5 py-1.5 text-[10px] uppercase tracking-[0.12em] text-brand-pink/80 transition-colors hover:bg-brand-pink hover:text-white"
          />
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 border border-brand-blue/40 bg-brand-dark px-2.5 py-1.5 text-[10px] uppercase tracking-[0.12em] text-brand-blue/85 transition-colors hover:bg-brand-blue hover:text-white"
          >
            Top
            <ArrowUpRight size={12} strokeWidth={2.5} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
