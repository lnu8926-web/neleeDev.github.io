"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-brand-grey border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
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
              className="font-(family-name:--font-pixel) text-[8px] text-brand-white/60 uppercase tracking-widest px-3 py-2 hover:text-brand-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/20"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" size="sm" className="ml-2">
            HIRE ME
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-white/70 border border-white/20 p-1.5 active:translate-y-0.5 transition-transform hover:border-white/40 hover:text-brand-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={16} strokeWidth={2.5} /> : <Menu size={16} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-brand-grey">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-(family-name:--font-pixel) text-[9px] text-brand-white/60 uppercase tracking-widest px-4 py-3 border-b border-white/10 hover:bg-white/5 hover:text-brand-white"
            >
              {link.label}
            </a>
          ))}
          <div className="px-4 py-3">
            <Button variant="primary" size="sm" className="w-full justify-center">
              HIRE ME
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
