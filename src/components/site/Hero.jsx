import { ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 md:pt-48 pb-24 md:pb-32 bg-khaki">
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="font-mono-label text-accent flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Free Growth Audit
          </div>
        </Reveal>

        <Reveal delay={150}>
          <h1 className="mt-6 text-[2.6rem] leading-[1.04] sm:text-6xl md:text-7xl lg:text-[5.25rem] max-w-5xl">
            We find exactly why businesses are{" "}
            <span className="mark-wrap">
              losing
              <svg viewBox="0 0 220 90" aria-hidden="true">
                <path d="M8,48 C8,18 45,6 110,6 C175,6 212,18 212,48 C212,78 175,84 110,84 C45,84 8,78 8,48 Z" />
              </svg>
            </span>{" "}
            customers —
            <br className="hidden sm:block" /> then fix it.
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A data-driven <span className="text-foreground font-medium">audit</span> finds
            your specific leaks. A clear <span className="text-foreground font-medium">strategy</span>{" "}
            prioritizes the fix. AI-assisted content &amp; automation{" "}
            <span className="text-foreground font-medium">systems</span> execute it — and keep
            improving.
          </p>
        </Reveal>

        <Reveal delay={450}>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#visibility-score"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium hover:bg-aqua hover:text-primary transition-all hover:gap-3"
            >
              Get Your Free Visibility Score
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
            
              href="#process"
              className="font-mono-label text-muted-foreground hover:text-foreground transition-colors"
            >
              See how it works ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}