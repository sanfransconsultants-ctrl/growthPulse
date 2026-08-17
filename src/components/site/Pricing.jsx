import { Check } from "lucide-react";
import Reveal from "./Reveal";

const TIERS = [
  {
    name: "Free Growth Audit",
    price: "$0",
    tagline: "Where you&rsquo;re losing customers — mapped, free.",
    cta: "Book Your Audit",
    ctaHref: "#audit",
    highlight: true,
    wide: true,
    items: [
      "Full website & SEO audit",
      "Conversion leak report",
      "Competitor snapshot",
      "Prioritized fix-list",
      "30-min walkthrough call",
    ],
  },
  {
    name: "Strategy Package",
    price: "One-time",
    tagline: "A 90-day plan to fix everything we found.",
    cta: "Start with Strategy",
    ctaHref: "#audit",
    items: [
      "Everything in the Audit",
      "90-day prioritized roadmap",
      "Keyword & content strategy",
      "Conversion fix recommendations",
      "Channel & messaging plan",
    ],
  },
  {
    name: "AI Lead Agent",
    price: "$999 - $1,999/mo",
    tagline: "Automated lead response, booking, and follow-up — 24/7.",
    cta: "Add This to Your Plan",
    ctaHref: "#audit",
    items: [
      "24/7 automated lead response",
      "Appointment booking integration",
      "Follow-up sequences",
      "Can be added standalone or bundled into Growth Retainer",
    ],
  },
  {
    name: "Monthly Growth Retainer",
    price: "Monthly",
    tagline: "We build and run the whole system.",
    cta: "Talk to Us",
    ctaHref: "#audit",
    glow: true,
    items: [
      "Everything in Strategy",
      "SEO content, written & published",
      "Ad copy & email sequences",
      "Social content calendar",
      "Monthly reporting tied to revenue",
      "AI-assisted execution velocity",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-40 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="font-mono-label text-primary mb-5">Partnership Tiers</div>
          <h2 className="text-4xl md:text-5xl max-w-3xl">
            Start free. Stay only if it pays.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            No fake scarcity. Move from the free audit to a strategy, then to a
            monthly retainer — only when the numbers justify it.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className={`flex ${t.wide ? "lg:col-span-1" : ""}`}>
              <div
                className={`relative flex flex-col w-full rounded-2xl p-8 border transition-all ${
                  t.glow
                    ? "border-primary/50 bg-card shadow-[0_0_40px_-12px_hsl(var(--accent)/0.4)]"
                    : t.highlight
                    ? "border-primary bg-primary/[0.04]"
                    : "border-border/60 bg-card"
                }`}
              >
                {t.glow && (
                  <span className="absolute -top-3 left-8 font-mono-label text-[10px] bg-primary text-primary-foreground px-2 py-1 rounded">
                    RECOMMENDED
                  </span>
                )}
                <div className="font-mono-label text-muted-foreground mb-2">{t.name}</div>
                <div className="text-3xl font-semibold tracking-tight mb-2">{t.price}</div>
                <p
                  className="text-muted-foreground leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: t.tagline }}
                />
                <ul className="space-y-3 mb-8 flex-1">
                  {t.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={t.ctaHref}
                  className={`text-center font-mono-label px-4 py-3 rounded-md transition-colors ${
                    t.highlight || t.glow
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-foreground hover:bg-secondary/70"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}