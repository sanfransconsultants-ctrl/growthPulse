import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

// Clearly-labeled placeholders -- consistent with how CaseStudy.jsx and
// ProjectedImpact.jsx already handle "we don't have real proof yet."
// Swap these for real client quotes as they come in.
const TESTIMONIALS = [
  {
    quote: "Example quote showing what a client testimonial will look like once we have real ones on file.",
    name: "Jordan R.",
    type: "Local Service Business",
  },
  {
    quote: "Placeholder testimonial — swap this out for a real client quote as soon as one's ready.",
    name: "Casey M.",
    type: "E-Commerce Brand",
  },
  {
    quote: "Sample format only. Not a real client or a real result — just showing the layout.",
    name: "Taylor B.",
    type: "Professional Services",
  },
];

const ROTATE_MS = 5000;

export default function Reviews() {
  const [active, setActive] = useState(0);
  const n = TESTIMONIALS.length;

  const goTo = useCallback((i) => setActive(((i % n) + n) % n), [n]);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Auto-rotate right to left every 10s
  useEffect(() => {
    const id = setInterval(next, ROTATE_MS);
    return () => clearInterval(id);
  }, [next]);

  // Arrow-key navigation -- ready for when there are more than three and
  // this actually matters. Ignored while typing in a form field elsewhere
  // on the page.
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section className="relative py-24 md:py-40 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="font-mono-label text-accent mb-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            What Clients Say
          </div>
          <div className="inline-flex items-center gap-2 bg-secondary text-muted-foreground text-xs font-mono-label px-3 py-1.5 rounded-full normal-case tracking-normal">
            Example — placeholder until real client reviews are added
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-14 h-[300px] md:h-[260px]">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-border/60 bg-card shadow-md flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-border/60 bg-card shadow-md flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            {TESTIMONIALS.map((t, i) => {
              // shortest signed distance from the active card, so this
              // still works correctly once more testimonials are added
              let offset = i - active;
              if (offset > n / 2) offset -= n;
              if (offset < -n / 2) offset += n;

              const isCenter = offset === 0;
              const visible = Math.abs(offset) <= 1;

              return (
                <div
                  key={t.name}
                  className="absolute top-1/2 left-1/2 w-[85%] sm:w-[420px] transition-all duration-700 ease-out"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${offset * 92}%) scale(${isCenter ? 1 : 0.82})`,
                    opacity: visible ? (isCenter ? 1 : 0.35) : 0,
                    zIndex: isCenter ? 10 : 5 - Math.abs(offset),
                    pointerEvents: isCenter ? "auto" : "none",
                  }}
                >
                  <div
                    className={`border border-border rounded-xl p-6 bg-card relative transition-shadow duration-700 ${
                      isCenter ? "shadow-2xl" : "shadow-md"
                    }`}
                  >
                    <span className="absolute top-4 right-4 text-[10px] font-mono-label text-muted-foreground bg-secondary px-2 py-1 rounded">
                      Example Testimonial
                    </span>
                    <p className="mt-6 text-foreground leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-5 text-sm">
                      <div className="font-medium">{t.name}</div>
                      <div className="text-muted-foreground">{t.type}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}