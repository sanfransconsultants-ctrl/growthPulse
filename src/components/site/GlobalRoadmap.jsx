import { MapPin } from "lucide-react";
import Reveal from "./Reveal";

const REGIONS = [
  { city: "Dubai", country: "UAE", focus: "Gulf & MENA hub", phase: "Phase 01" },
  { city: "Paris", country: "France", focus: "European market entry", phase: "Phase 01" },
  { city: "Tokyo", country: "Japan", focus: "APAC expansion", phase: "Phase 02" },
  { city: "New York", country: "USA", focus: "Americas base", phase: "Phase 02" },
  { city: "London", country: "UK", focus: "English-speaking markets", phase: "Phase 03" },
  { city: "Singapore", country: "SG", focus: "Southeast Asia gateway", phase: "Phase 03" },
];

export default function GlobalRoadmap() {
  return (
    <section id="roadmap" className="relative py-24 md:py-40 border-t border-border/60 bg-secondary/30">
      <div className="absolute inset-0 grid-truth-fine opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono-label text-primary">Our 6-Month Vision</span>
            <span className="font-mono-label text-[10px] text-muted-foreground border border-border/60 rounded-full px-2 py-0.5">
              ROADMAP · NOT CURRENT OPS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl max-w-3xl">
            Where we&rsquo;re headed.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            This is forward-looking ambition, not a claim of current global operations.
            Our plan over the next six months: bring the audit-to-execution model to
            businesses in major markets worldwide.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REGIONS.map((r) => (
              <div
                key={r.city}
                className="group relative border border-border/60 bg-card rounded-xl p-6 transition-all hover:border-primary/40 hover:bg-primary/[0.03] crosshair-zone"
              >
                <div className="flex items-start justify-between mb-6">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-mono-label text-[10px] text-muted-foreground">
                    {r.phase}
                  </span>
                </div>
                <div className="text-2xl font-semibold tracking-tight">{r.city}</div>
                <div className="font-mono-label text-muted-foreground mt-1">{r.country}</div>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  {r.focus}
                </p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-10">
          <div className="border border-dashed border-border rounded-lg px-5 py-4 bg-background flex items-start gap-3">
            <span className="font-mono-label text-[10px] text-primary shrink-0 mt-0.5">
              PROJECTED
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Markets shown are planned expansion targets — a concept demo of where
              we intend to operate. Not an actual current footprint or office
              location.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}