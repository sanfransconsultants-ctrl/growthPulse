import Reveal from "./Reveal";

const LEAKS = [
  {
    title: "Traffic but no bookings",
    body: "Visitors arrive — then vanish. Your funnel has a hole nobody mapped.",
    visual: "funnel",
  },
  {
    title: "Ranking for the wrong keywords",
    body: "You show up for searches that never turn into customers.",
    visual: "scatter",
  },
  {
    title: "Posting content nobody sees",
    body: "A blog and social calendar that talks into a void of zero impressions.",
    visual: "bars",
  },
  {
    title: "Slow pages killing conversions",
    body: "Every extra second of load time quietly trims your conversion rate.",
    visual: "curve",
  },
];

function Visual({ type }) {
  const stroke = "hsl(var(--sage))";
  const muted = "hsl(0 0% 70%)";
  if (type === "funnel") {
    return (
      <svg viewBox="0 0 120 90" className="w-full h-full">
        {Array.from({ length: 28 }).map((_, i) => {
          const x = 6 + (i % 7) * 16;
          const y = 4 + Math.floor(i / 7) * 14;
          return <circle key={i} cx={x} cy={y} r="2.4" fill={muted} opacity="0.5" />;
        })}
        <path d="M30 58 L90 58 L74 84 L46 84 Z" fill="none" stroke={stroke} strokeWidth="1.2" />
        <circle cx="56" cy="78" r="2.4" fill={stroke} />
        <circle cx="64" cy="78" r="2.4" fill={stroke} />
      </svg>
    );
  }
  if (type === "scatter") {
    return (
      <svg viewBox="0 0 120 90" className="w-full h-full">
        <line x1="12" y1="78" x2="108" y2="78" stroke={muted} strokeWidth="0.6" />
        <line x1="12" y1="12" x2="12" y2="78" stroke={muted} strokeWidth="0.6" />
        <circle cx="34" cy="62" r="2.4" fill={muted} />
        <circle cx="48" cy="54" r="2.4" fill={muted} />
        <circle cx="62" cy="66" r="2.4" fill={muted} />
        <circle cx="80" cy="58" r="2.4" fill={muted} />
        <circle cx="92" cy="70" r="2.4" fill={muted} />
        <circle cx="44" cy="22" r="3" fill={stroke} />
        <circle cx="86" cy="28" r="3" fill={stroke} />
        <circle cx="70" cy="18" r="3" fill={stroke} />
      </svg>
    );
  }
  if (type === "bars") {
    return (
      <svg viewBox="0 0 120 90" className="w-full h-full">
        {[20, 40, 60, 80, 100].map((x, i) => (
          <rect key={i} x={x} y={70} width="12" height="3" fill={muted} opacity="0.5" />
        ))}
        <line x1="10" y1="70" x2="112" y2="70" stroke={muted} strokeWidth="0.6" />
        <line x1="10" y1="14" x2="10" y2="70" stroke={muted} strokeWidth="0.6" />
        <rect x="62" y="24" width="12" height="46" fill={stroke} opacity="0.85" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full">
      <line x1="10" y1="78" x2="112" y2="78" stroke={muted} strokeWidth="0.6" />
      <path d="M14 30 C 40 34, 52 52, 70 64 S 100 80, 110 82" fill="none" stroke={stroke} strokeWidth="1.6" />
      <circle cx="110" cy="82" r="2.4" fill={stroke} />
      <circle cx="14" cy="30" r="2.4" fill={muted} />
    </svg>
  );
}

export default function LeakMap() {
  return (
    <section id="leaks" className="relative py-24 md:py-40 border-t border-border/60 bg-sage">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="font-mono-label text-on-navy mb-5">The Leak Map</div>
          <h2 className="text-4xl md:text-5xl max-w-3xl text-on-navy">
            You can feel the leak. You just can&rsquo;t see it.
          </h2>
          <p className="mt-6 text-on-navy max-w-2xl text-lg">
            Four places small businesses quietly lose money online. We map every one
            before we touch a single line of content.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14 md:gap-y-20">
          {LEAKS.map((l, i) => (
            <Reveal key={l.title} delay={i * 80} className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-36 h-28 shrink-0 border border-border/60 rounded-lg p-2 crosshair-zone bg-card">
                <Visual type={l.visual} />
              </div>
              <div>
                <div className="font-mono-label text-on-navy mb-2">
                  LEAK_0{i + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-on-navy">
                  {l.title}
                </h3>
                <p className="mt-2 text-on-navy leading-relaxed">{l.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}