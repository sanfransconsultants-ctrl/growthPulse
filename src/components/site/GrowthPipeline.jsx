import Reveal from "./Reveal";

const STEPS = [
  {
    no: "01",
    title: "Audit",
    label: "Diagnostic",
    body: "We scan your website, SEO, and marketing data to locate the exact leaks — slow pages, missed keywords, weak conversion points, content gaps.",
    visual: "audit",
  },
  {
    no: "02",
    title: "Strategy",
    label: "Logic",
    body: "A clear 90-day plan that ranks what to fix first by impact. No vague recommendations — every action mapped to a measurable outcome.",
    visual: "gantt",
  },
  {
    no: "03",
    title: "Execution",
    label: "Build",
    body: "We build and run the content & marketing system — SEO content, ad copy, email, social — accelerated by AI-assisted workflows that move faster than traditional agencies.",
    visual: "line",
  },
];

function Visual({ type }) {
  const stroke = "hsl(240 100% 68%)";
  const muted = "hsl(0 0% 75%)";
  if (type === "audit") {
    return (
      <svg viewBox="0 0 140 90" className="w-full h-full">
        {[18, 40, 62, 84].map((y, i) => (
          <line key={i} x1="14" y1={y} x2={i % 2 ? 96 : 80} y2={y} stroke={muted} strokeWidth="0.8" opacity="0.6" />
        ))}
        <circle cx="78" cy="48" r="22" fill="none" stroke={stroke} strokeWidth="1.4" />
        <line x1="94" y1="64" x2="108" y2="78" stroke={stroke} strokeWidth="2.4" />
        <circle cx="78" cy="48" r="2" fill={stroke} />
      </svg>
    );
  }
  if (type === "gantt") {
    return (
      <svg viewBox="0 0 140 90" className="w-full h-full">
        {[14, 36, 58, 80].map((y, i) => (
          <rect key={i} x={14 + i * 8} y={y} width={50 - i * 6} height="10" rx="2" fill={i === 1 ? stroke : muted} opacity={i === 1 ? 0.9 : 0.35} />
        ))}
        <line x1="14" y1="10" x2="14" y2="86" stroke={muted} strokeWidth="0.6" />
        <line x1="14" y1="86" x2="130" y2="86" stroke={muted} strokeWidth="0.6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 140 90" className="w-full h-full">
      {[20, 44, 68].map((x, i) => (
        <g key={i}>
          <rect x={x} y="24" width="22" height="44" rx="3" fill="none" stroke={muted} strokeWidth="0.8" opacity="0.5" />
          <rect x={x} y="24" width="22" height={i === 1 ? 44 : 20} rx="3" fill={stroke} opacity={i === 1 ? 0.85 : 0.5} />
        </g>
      ))}
      <path d="M20 68 L88 68" stroke={stroke} strokeWidth="1.4" markerEnd="url(#arr)" />
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={stroke} />
        </marker>
      </defs>
    </svg>
  );
}

export default function GrowthPipeline() {
  return (
    <section id="process" className="relative py-24 md:py-40 border-t border-border/60 bg-gradient-to-b from-background to-primary/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="font-mono-label text-primary mb-5">02 / The Growth Pipeline</div>
          <h2 className="text-4xl md:text-5xl max-w-3xl">
            From leak to fixed in three deliberate moves.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          <div className="hidden md:block absolute top-[52px] left-[16%] right-[16%] h-px bg-border" />
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 120} className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative z-10 w-12 h-12 rounded-full bg-background border border-primary text-primary font-mono-label flex items-center justify-center shrink-0">
                  {s.no}
                </div>
                <span className="font-mono-label text-muted-foreground">{s.label}</span>
              </div>
              <div className="w-full h-28 border border-border/60 rounded-lg p-3 mb-6 bg-card crosshair-zone">
                <Visual type={s.visual} />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}