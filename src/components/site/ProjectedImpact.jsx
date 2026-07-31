import { TrendingUp, TrendingDown } from "lucide-react";
import Reveal from "./Reveal";

const CARDS = [
  {
    business: "[Sample Retail Co. — Paris]",
    leak: "Slow mobile checkout + missing local SEO. High-intent visitors bouncing before purchase.",
    metric: "+30%",
    metricLabel: "Projected booking conversion",
    direction: "up",
    tag: "CONCEPT DEMO",
  },
  {
    business: "[Sample Clinic — Dubai]",
    leak: "Weak Google Business Profile + no localized content. Paid leads at unsustainable cost.",
    metric: "−42%",
    metricLabel: "Projected cost per lead",
    direction: "down",
    tag: "ILLUSTRATIVE EXAMPLE",
  },
  {
    business: "[Sample SaaS Startup — Tokyo]",
    leak: "Poor keyword targeting + low trial-to-paid flow. Traffic that never converts.",
    metric: "+58%",
    metricLabel: "Projected trial signups",
    direction: "up",
    tag: "ILLUSTRATIVE EXAMPLE",
  },
];

export default function ProjectedImpact() {
  return (
    <section id="impact" className="relative py-24 md:py-40 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="font-mono-label text-primary mb-5">04 / Projected Impact</div>
          <h2 className="text-4xl md:text-5xl max-w-3xl">
            What a finished audit looks like.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            Sample audit previews showing the kind of leaks we find and the projected
            impact of the fix. These are illustrative examples — not actual clients.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((c, i) => (
            <Reveal key={c.business} delay={i * 100}>
              <div className="card-hover relative flex flex-col h-full border border-border/60 rounded-2xl bg-card overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 bg-primary text-primary-foreground">
                  <span className="font-mono-label text-[10px] tracking-wider">
                    {c.tag}
                  </span>
                  <span className="font-mono-label text-[10px] opacity-80">
                    PROJECTED
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="font-mono-label text-muted-foreground mb-2">
                    AUDIT PREVIEW
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-4">
                    {c.business}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {c.leak}
                  </p>

                  <div className="border-t border-border/60 pt-5 flex items-end gap-3">
                    {c.direction === "up" ? (
                      <TrendingUp className="w-5 h-5 text-primary mb-1" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-primary mb-1" />
                    )}
                    <div>
                      <div className="text-3xl font-semibold tracking-tight gradient-text">
                        {c.metric}
                      </div>
                      <div className="font-mono-label text-[10px] text-muted-foreground">
                        {c.metricLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8">
          <p className="font-mono-label text-muted-foreground text-[11px]">
            Illustrative examples &amp; projected outcomes — concept demos, not actual or
            verifiable client results.
          </p>
        </Reveal>
      </div>
    </section>
  );
}