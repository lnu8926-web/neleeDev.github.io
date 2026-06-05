interface SectionHeaderProps {
  kicker: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  kicker,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <div
        className={[
          "inline-flex items-center gap-2 bg-brand-blue/15 border border-brand-blue/30 px-4 py-1.5 mb-5",
          align === "center" ? "mx-auto" : "",
        ].join(" ")}
      >
        <span className="h-2 w-2 rounded-full bg-brand-blue" />
        <span className="font-(family-name:--font-pixel) text-[10px] uppercase tracking-widest text-brand-blue/90">
          {kicker}
        </span>
      </div>

      {title && (
        <h2
          className={[
            "text-[clamp(2rem,3vw,3.5rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-brand-white",
            align === "center" ? "text-center" : "text-left",
          ].join(" ")}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={[
            `${title ? "mt-4" : "mt-0"} max-w-3xl text-sm md:text-base leading-relaxed text-brand-white/60 break-keep`,
            align === "center" ? "mx-auto text-center" : "text-left",
          ].join(" ")}
        >
          {description}
        </p>
      )}
    </div>
  );
}
