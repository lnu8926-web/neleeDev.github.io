import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  accent?: boolean;
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  accent = false,
  className = "",
}: CardProps) {
  return (
    <div
      className={[
        "border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]",
        "p-5 flex flex-col gap-3",
        "transition-transform duration-75 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#1a1a1a]",
        accent ? "bg-brand-pink" : "bg-brand-grey",
        className,
      ].join(" ")}
    >
      {icon && (
        <div className="w-10 h-10 border-2 border-[#1a1a1a] bg-brand-blue flex items-center justify-center text-white shrink-0">
          {icon}
        </div>
      )}
      <h3 className="font-[family-name:var(--font-pixel)] text-[9px] uppercase tracking-widest text-[#1a1a1a] leading-relaxed">
        {title}
      </h3>
      <p className="text-xs text-[#333] leading-relaxed">{description}</p>
    </div>
  );
}
