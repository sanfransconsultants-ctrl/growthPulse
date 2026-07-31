import { useEffect, useState } from "react";

const STAGES = [
  { label: "DIAGNOSTIC", at: 0 },
  { label: "LOGIC", at: 0.34 },
  { label: "EXECUTION", at: 0.67 },
  { label: "SOLVED", at: 1 },
];

export default function AuditProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIndex = STAGES.reduce(
    (acc, s, i) => (progress >= s.at - 0.02 ? i : acc),
    0
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="h-[3px] bg-border/40 w-full">
        <div
          className="h-full bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 bg-background/80 backdrop-blur-md border-b border-border/60 font-mono-label text-[10px] text-muted-foreground">
        {STAGES.map((s, i) => (
          <span key={s.label} className={i <= activeIndex ? "text-primary" : ""}>
            {i > 0 && <span className="mx-2 text-muted-foreground/40">—</span>}
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}