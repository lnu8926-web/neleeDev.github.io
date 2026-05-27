import { GitBranch, X, Mail } from "lucide-react";

const SOCIAL = [
  { icon: GitBranch, href: "#", label: "GitHub" },
  { icon: X, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-black mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-(family-name:--font-pixel) text-[8px] text-foreground uppercase tracking-widest">
          © 2026 NEELEE.DEV — ALL RIGHTS RESERVED
        </p>

        <div className="flex items-center gap-2">
          {SOCIAL.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="border border-white/15 p-2 bg-brand-grey text-brand-white/50 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors shadow-[2px_2px_0px_rgba(92,124,250,0.15)] active:translate-y-0.5 active:shadow-none"
            >
              <Icon size={14} strokeWidth={2.5} />
            </a>
          ))}
        </div>

        <p className="font-(family-name:--font-pixel) text-[7px] text-white/20 uppercase tracking-widest">
          BUILT WITH NEXT.JS 15 + TAILWIND
        </p>
      </div>
    </footer>
  );
}
