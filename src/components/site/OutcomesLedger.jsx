import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const OUTCOMES = [
  { label: "SITE_AUDIT", outcome: "Every page ranked by speed, usability, and conversion risk.", preview: "p: /pricing — load 4.2s, CLS 0.31, no CTA above fold" },
  { label: "SEO_AUDIT", outcome: "Missed keyword opportunities and ranking gaps, ranked by intent.", preview: "kw: 'plumber near me' — pos 14, vol 8.1k, intent commercial" },
  { label: "COMPETITOR_MAP", outcome: "Where competitors win and the specific gaps you can close.", preview: "comp: rival.co ranks 3 for your top term — 12 backlinks gap" },
  { label: "CONVERSION_REPORT", outcome: "Weak conversion points, with the fix and expected lift.", preview: "cta: 'Contact' button blends — contrast fix, est. +18% clicks" },
  { label: "CONTENT_CALENDAR", outcome: "A 90-day content calendar mapped to search demand.", preview: "wk1-4: 8 SEO articles, 12 social, 2 email sequences" },
  { label: "EXECUTION_SYSTEM", outcome: "We write, publish, and run SEO, ads, email, and social.", preview: "delivery: SEO content + ad copy + email + social, weekly cadence" },
  { label: "MONTHLY_REPORTING", outcome: "Clear monthly reporting tied to revenue, not vanity metrics.", preview: "report: leads +34%, CAC −21%, organic +62% MoM" },
  { label: "VELOCITY", outcome: "AI-assisted workflows that move faster than traditional agencies.", preview: "turnaround: brief → published draft in 48h, not 3 weeks" },
];

export default function OutcomesLedger() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="outcomes" className="relative py-24 md:py-40 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="font-mono-label text-primary mb-5">03 / The Outcomes Ledger</div>
          <h2 className="text-4xl md:text-5xl max-w-3xl">
            What you walk away with.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            Not features — outcomes. Each deliverable maps to a leak we found and a
            result you can measure.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 border-t border-border/60">
          {OUTCOMES.map((o, i) => (
            <Reveal
              key={o.label}
              delay={(i % 2) * 60}
              className="relative border-b border-border/60 md:[&:nth-child(odd)]:border-r"
            >
              <div
                className="flex items-start gap-4 py-7 px-1 md:px-6 transition-colors hover:bg-primary/[0.03]"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <Plus className="w-4 h-4 text-primary mt-1 shrink-0" />
                <div className="flex-1">
                  <div className="font-mono-label text-muted-foreground mb-1">{o.label}</div>
                  <p className="text-foreground leading-relaxed">{o.outcome}</p>
                  <div
                    className={`mt-3 font-mono-label text-[11px] text-muted-foreground bg-secondary/60 border border-border/60 rounded px-3 py-2 overflow-hidden transition-all duration-300 ${
                      hovered === i ? "max-h-20 opacity-100" : "max-h-0 opacity-0 py-0 border-0"
                    }`}
                  >
                    {o.preview}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}