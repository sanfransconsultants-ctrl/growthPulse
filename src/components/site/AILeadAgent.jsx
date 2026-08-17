import { Check, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  "Instant response to every inquiry, any time",
  "Automated appointment booking",
  "Follow-up sequences for leads who don't convert immediately",
  "Fully integrated with your existing site and Google profile",
];

export default function AILeadAgent() {
  return (
    <section className="relative py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="panel-dark rounded-[28px] px-6 py-16 md:px-12 md:py-20">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-14 items-center">
            <Reveal>
              <div className="font-mono-label flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
                New: AI Lead Agent
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl">Never miss a lead again.</h2>
              <p className="mt-4 max-w-md leading-relaxed">
                Most leads go cold waiting for a callback. Our AI Lead Agent answers
                questions, books appointments, and follows up automatically — on your
                website and your Google Business Profile, 24/7.
              </p>
              <ul className="mt-6 space-y-3">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-aqua mt-1 shrink-0" />
                    <span className="text-on-navy-soft">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <div className="border border-navy-line rounded-2xl p-8 text-center bg-primary-foreground/5">
                <div className="font-mono-label text-on-navy-soft">Starting at</div>
                <div className="mt-2 text-4xl text-on-navy-soft font-heading">$600&ndash;$1,000</div>
                <div className="mt-1 text-on-navy-soft">per month</div>
                <a
                  href="#pricing"
                  className="mt-6 group w-full inline-flex items-center justify-center gap-2 bg-aqua text-primary px-6 py-3.5 rounded-md font-medium hover:bg-on-navy transition-all hover:gap-3"
                >
                  Add to Your Plan
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}