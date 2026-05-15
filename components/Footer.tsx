import { GitBranch, X, Mail } from "lucide-react";

const SOCIAL = [
  { icon: GitBranch, href: "#", label: "GitHub" },
  { icon: X, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-brand-grey mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-(family-name:--font-pixel) text-[8px] text-foreground uppercase tracking-widest">
          © 2026 PIXEL.DEV — ALL RIGHTS RESERVED
        </p>

        <div className="flex items-center gap-2">
          {SOCIAL.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="border-2 border-foreground p-2 bg-brand-beige hover:bg-brand-blue hover:text-white transition-colors shadow-[2px_2px_0px_#1a1a1a] active:translate-y-0.5 active:shadow-none"
            >
              <Icon size={14} strokeWidth={2.5} />
            </a>
          ))}
        </div>

        <p className="font-(family-name:--font-pixel) text-[7px] text-[#555] uppercase tracking-widest">
          BUILT WITH NEXT.JS 15 + TAILWIND
        </p>
      </div>
    </footer>
  );
}
