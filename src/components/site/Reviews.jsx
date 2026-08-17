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

export default function Reviews() {
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

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="h-full border border-border rounded-xl p-6 bg-card relative">
                <span className="absolute top-4 right-4 text-[10px] font-mono-label text-muted-foreground bg-secondary px-2 py-1 rounded">
                  Example Testimonial
                </span>
                <p className="mt-6 text-foreground leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 text-sm">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-muted-foreground">{t.type}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}