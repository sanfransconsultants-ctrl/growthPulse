import { ArrowRight } from "lucide-react";

export default function Hero({ heroImage }) {
  return (
    <section id="top" className="relative scan-group overflow-hidden pt-36 md:pt-48 pb-24 md:pb-32">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />
      <div className="absolute inset-0 grid-truth opacity-50 pointer-events-none" />
      <div
        className="scan-layer absolute inset-0 pointer-events-none opacity-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(240 100% 68% / 0.06), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="font-mono-label text-primary mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Free Growth Audit · No obligation
        </div>

        <h1 className="text-[2.6rem] leading-[1.04] sm:text-6xl md:text-7xl lg:text-[5.25rem] max-w-5xl">
          We find exactly why businesses are{" "}
          <span className="text-strike gradient-text">losing</span> customers —
          <br className="hidden sm:block" /> then{" "}
          <span className="gradient-text">fix it.</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          A data-driven <span className="text-foreground font-medium">audit</span> finds
          your specific leaks. A clear <span className="text-foreground font-medium">strategy</span>{" "}
          prioritizes the fix. AI-assisted content &amp; automation{" "}
          <span className="text-foreground font-medium">systems</span> execute it — and keep
          improving.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#audit"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium hover:bg-primary/90 transition-all hover:gap-3 glow-primary"
          >
            Get a Free Growth Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#process"
            className="font-mono-label text-muted-foreground hover:text-foreground transition-colors"
          >
            See how it works ↓
          </a>
        </div>

        {heroImage && (
          <div className="mt-16 md:mt-24 relative crosshair-zone">
            <div className="absolute -inset-3 border border-border/60 rounded-2xl pointer-events-none" />
            <div className="absolute -inset-10 -z-10 mesh-gradient rounded-full blur-2xl opacity-70" />
            <img
              src={heroImage}
              alt="Abstract data visualization of a growth diagnostic"
              className="w-full aspect-square md:aspect-[16/9] object-cover rounded-xl"
              loading="eager"
            />
            <div className="absolute top-3 left-3 font-mono-label text-[10px] text-background/80 bg-foreground/70 px-2 py-1 rounded">
              DIAGNOSTIC.SCAN_001
            </div>

            <div className="hidden md:flex absolute -left-6 top-1/4 bg-card border border-border/60 rounded-lg px-4 py-3 shadow-lg flex-col gap-0.5">
              <span className="font-mono-label text-[10px] text-muted-foreground">LEAK FOUND</span>
              <span className="text-sm font-semibold">/pricing · 4.2s load</span>
            </div>
            <div className="hidden md:flex absolute -right-6 bottom-1/4 bg-card border border-border/60 rounded-lg px-4 py-3 shadow-lg flex-col gap-0.5">
              <span className="font-mono-label text-[10px] text-primary">PROJECTED FIX</span>
              <span className="text-sm font-semibold">+30% conversion</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}