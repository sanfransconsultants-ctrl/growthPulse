import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const field =
    "w-full bg-background border border-border rounded-md px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

  return (
    <section id="audit" className="relative py-24 md:py-40 border-t border-border/60 bg-primary/[0.03]">
      <div className="absolute inset-0 grid-truth-fine opacity-50 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6">
        <Reveal className="text-center">
          <div className="font-mono-label text-primary mb-5">07 / Book Your Audit</div>
          <h2 className="text-4xl md:text-5xl">
            See exactly where you&rsquo;re losing customers.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Tell us about your business. We&rsquo;ll run the free growth audit and walk
            you through the leaks on a 30-minute call.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          {submitted ? (
            <div className="border border-primary/40 bg-card rounded-2xl p-10 text-center">
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold tracking-tight">Audit request received.</h3>
              <p className="mt-3 text-muted-foreground">
                We&rsquo;ll be in touch within one business day to book your walkthrough.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-border/60 bg-card rounded-2xl p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono-label block mb-2 text-muted-foreground">Name</label>
                  <input required name="name" value={form.name} onChange={handleChange} className={field} placeholder="Your name" />
                </div>
                <div>
                  <label className="font-mono-label block mb-2 text-muted-foreground">Email</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange} className={field} placeholder="you@company.com" />
                </div>
                <div>
                  <label className="font-mono-label block mb-2 text-muted-foreground">Company</label>
                  <input name="company" value={form.company} onChange={handleChange} className={field} placeholder="Company name" />
                </div>
                <div>
                  <label className="font-mono-label block mb-2 text-muted-foreground">Website</label>
                  <input name="website" value={form.website} onChange={handleChange} className={field} placeholder="yourwebsite.com" />
                </div>
              </div>
              <div>
                <label className="font-mono-label block mb-2 text-muted-foreground">What&rsquo;s happening?</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={3} className={field} placeholder="Traffic flatlining? Sales dropped? Tell us what you're seeing." />
              </div>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium hover:bg-primary/90 transition-all hover:gap-3"
              >
                Get Your Free Growth Audit
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="font-mono-label text-center text-muted-foreground">
                No obligation · No credit card · 30-min walkthrough
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}