import { useState } from "react";
import Reveal from "./Reveal";

// Same 8 outcomes that lived in the old OutcomesLedger component --
// content unchanged, just a different card treatment (expand on
// hover/tap/focus instead of a static two-column list).
const FINDINGS = [
  { num: "002", label: "Site audit", outcome: "Every page ranked by speed, usability, and conversion risk.", preview: "p: /pricing — load 4.2s, CLS 0.31, no CTA above fold" },
  { num: "003", label: "SEO audit", outcome: "Missed keyword opportunities and ranking gaps, ranked by intent.", preview: "kw: \"plumber near me\" — pos 14, vol 8.1k, intent commercial" },
  { num: "004", label: "Competitor map", outcome: "Where competitors win and the specific gaps you can close.", preview: "comp: rival.co ranks 3 for your top term — 12 backlinks gap" },
  { num: "005", label: "Conversion report", outcome: "Weak conversion points, with the fix and expected lift.", preview: "cta: \"Contact\" button blends — contrast fix, est. +18% clicks" },
  { num: "006", label: "Content calendar", outcome: "A 90-day content calendar mapped to search demand.", preview: "wk1-4: 8 SEO articles, 12 social, 2 email sequences" },
  { num: "007", label: "Execution system", outcome: "We write, publish, and run SEO, ads, email, and social.", preview: "delivery: SEO content + ad copy + email + social, weekly cadence" },
  { num: "008", label: "Monthly reporting", outcome: "Clear monthly reporting tied to revenue, not vanity metrics.", preview: "report: leads +34%, CAC −21%, organic +62% MoM" },
  { num: "009", label: "Velocity", outcome: "AI-assisted workflows that move faster than traditional agencies.", preview: "turnaround: brief → published draft in 48h, not 3 weeks" },
];

function FindingCard({ f, delay }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        className={`h-full border rounded-xl p-6 bg-white/25 backdrop-blur-md transition-all duration-300 cursor-default ${
          open ? "border-accent -translate-y-1 shadow-lg" : "border-white/40 hover:-translate-y-1 hover:shadow-lg hover:border-accent"
        }`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        tabIndex={0}
      >
        <div className="font-mono-label text-accent">{f.num}</div>
        <h3 className="mt-3 font-semibold text-lg">{f.label}</h3>
        <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{f.outcome}</p>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-24 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="font-mono-label text-[11px] normal-case tracking-normal text-muted-foreground bg-secondary/60 border border-border/60 rounded px-3 py-2">
            {f.preview}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Findings() {
  return (
    <section id="outcomes" className="relative py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gold rounded-[28px] px-6 py-12 md:px-12 md:py-14">
          <Reveal>
            <div className="font-mono-label text-primary mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              The Findings
            </div>
            <h2 className="text-4xl md:text-5xl max-w-3xl text-primary">Eight leaks, from one real audit.</h2>
            <p className="mt-6 text-primary/75 max-w-2xl text-lg">
              Not features — outcomes. Each deliverable maps to a leak we found and a
              result you can measure. Hover or tap a card for the raw scan output.
            </p>
          </Reveal>
          </div>

          <div className="bg-gold rounded-[28px] px-6 py-12 md:px-12 md:py-16 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FINDINGS.map((f, i) => (
              <FindingCard key={f.num} f={f} delay={i * 50} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}