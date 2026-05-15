"use client";

import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import Button from "./Button";

const NAV_LINKS = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "STACK", href: "#stack" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-brand-blue border-b-2 border-[#1a1a1a] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-[family-name:var(--font-pixel)] text-[10px] text-white uppercase tracking-widest"
        >
          <Terminal size={16} strokeWidth={2.5} className="text-white" />
          PIXEL.DEV
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-pixel)] text-[8px] text-white uppercase tracking-widest px-3 py-2 hover:bg-white/20 transition-colors border border-transparent hover:border-white/30"
            >
              {link.label}
            </a>
          ))}
          <Button variant="ghost" size="sm" className="ml-2 !bg-white !text-[#1a1a1a] hover:!bg-brand-beige">
            HIRE ME
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white border-2 border-white/60 p-1.5 active:translate-y-0.5 transition-transform"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={16} strokeWidth={2.5} /> : <Menu size={16} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden border-t-2 border-[#1a1a1a] bg-brand-blue">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-[family-name:var(--font-pixel)] text-[9px] text-white uppercase tracking-widest px-4 py-3 border-b border-white/20 hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <div className="px-4 py-3">
            <Button variant="ghost" size="sm" className="!bg-white !text-[#1a1a1a] w-full justify-center">
              HIRE ME
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
