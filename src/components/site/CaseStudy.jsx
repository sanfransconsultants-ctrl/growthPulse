import Reveal from "./Reveal";

export default function CaseStudy() {
  return (
    <section className="relative py-24 md:py-40 border-t border-border/60 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="font-mono-label text-aqua mb-5">Proof of Work</div>
          <h2 className="text-4xl md:text-5xl max-w-3xl text-on-navy">
            Before &amp; after, in real numbers.
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="border border-dashed border-border rounded-2xl p-10 md:p-16 bg-background relative">
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="font-mono-label text-[10px] bg-primary text-primary-foreground px-2 py-1 rounded">
                ILLUSTRATIVE EXAMPLE
              </span>
              <span className="font-mono-label text-[10px] text-muted-foreground border border-border/60 px-2 py-1 rounded">
                Projected / Concept Demo — Not an Actual Client
              </span>
            </div>
            <div className="absolute top-4 right-4 font-mono-label text-[10px] text-muted-foreground">
              [CASE STUDY PLACEHOLDER]
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <div className="font-mono-label text-muted-foreground mb-4">BEFORE</div>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <div className="text-3xl md:text-4xl font-semibold text-foreground">2.1%</div>
                    <div className="text-sm">Conversion rate</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-semibold text-foreground">4.2s</div>
                    <div className="text-sm">Avg. page load</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-semibold text-foreground">—</div>
                    <div className="text-sm">Organic growth / month</div>
                  </div>
                </div>
              </div>
              <div className="md:border-l md:border-border/60 md:pl-16">
                <div className="font-mono-label text-primary mb-4">AFTER 90 DAYS</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl md:text-4xl font-semibold text-primary">5.8%</div>
                    <div className="text-sm text-muted-foreground">Conversion rate</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-semibold text-primary">1.3s</div>
                    <div className="text-sm text-muted-foreground">Avg. page load</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-semibold text-primary">+62%</div>
                    <div className="text-sm text-muted-foreground">Organic growth / month</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-10 text-sm text-muted-foreground font-mono-label">
              Illustrative figures only — projected to show format. Drop in your real
              client results here, labeled clearly, when available.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}