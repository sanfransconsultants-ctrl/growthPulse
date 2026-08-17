import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { supabase } from "@/api/supabaseClient";


// Catches common typo'd domains ("gmial.com" -> "gmail.com") without any
// external service -- this is a suggestion, not a block, since it can't
// know for certain what you meant to type.
const COMMON_EMAIL_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com",
  "aol.com", "live.com", "msn.com", "protonmail.com", "me.com",
];

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function suggestEmailDomain(email) {
  const at = email.lastIndexOf("@");
  if (at === -1 || at === email.length - 1) return null;
  const domain = email.slice(at + 1).toLowerCase().trim();
  if (!domain || COMMON_EMAIL_DOMAINS.includes(domain)) return null;

  let best = null;
  let bestDist = Infinity;
  for (const candidate of COMMON_EMAIL_DOMAINS) {
    const dist = levenshtein(domain, candidate);
    if (dist < bestDist) {
      bestDist = dist;
      best = candidate;
    }
  }
  if (best && bestDist > 0 && bestDist <= 2) {
    return email.slice(0, at + 1) + best;
  }
  return null;
}


const REPORTING_ROWS = [
  { label: "Qualified leads", to: 34, prefix: "+", suffix: "%", up: true },
  { label: "Customer acquisition cost", to: 21, prefix: "\u2212", suffix: "%", up: false },
  { label: "Organic traffic, month over month", to: 62, prefix: "+", suffix: "%", up: true },
];

export default function AuditPanel() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", website: "", message: "" });
  const [emailSuggestion, setEmailSuggestion] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (name === "email") setEmailSuggestion(suggestEmailDomain(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const { error: insertError } = await supabase.from("leads").insert({
        name: form.name,
        email: form.email,
        company: form.company || null,
        website: form.website || null,
        message: form.message || null,
        source: "audit_form",
      });
      if (insertError) throw insertError;
      setSubmitted(true);
    } catch (err) {
      console.error("Lead submission failed:", err);
      setError("Something went wrong submitting your request. Please try again, or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const field =
    "w-full bg-primary-foreground/5 border border-navy-line rounded-md px-3.5 py-2.5 text-base text-on-navy placeholder:text-on-navy-soft focus:outline-none focus:border-aqua focus:ring-1 focus:ring-aqua transition-colors";

  return (
    <section className="relative py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="panel-dark rounded-[28px] px-6 py-16 md:px-12 md:py-20">

          <Reveal>
            <div className="font-mono-label flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
              Book Your Audit
            </div>
          </Reveal>

          {/* Exhibit A -- the diagnostic scan image */}
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
            <Reveal>
              <div className="font-mono-label flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
                Exhibit A — Diagnostic Scan
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl">What the scan actually finds.</h2>
              <p className="mt-4 max-w-md leading-relaxed">
                Every audit runs against your live site and funnel data — not a template
                checklist. This is a real scan output: the leak we found, and the fix it
                points to.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative">
                <div className="border border-on-navy/30 bg-background p-2.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)]">
                  <img
                    src="/images/diagnostic-scan.jpg"
                    alt="Abstract render of a growth diagnostic scan"
                    className="w-full h-auto block"
                  />
                </div>
                <div className="mt-2.5 flex justify-between font-mono-label text-on-navy-soft">
                  <span>Fig. 1 — Live funnel scan</span>
                  <span>Scan_001</span>
                </div>
                <div className="hidden md:block absolute -left-8 top-[14%] bg-primary/30 backdrop-blur-md border border-white/20 rounded px-4 py-3 max-w-[190px] shadow-lg">
                  <span className="font-mono-label text-aqua block mb-1">Leak found</span>
                  <span className="text-sm text-on-navy">/pricing · 4.2s load</span>
                 </div>

                <div className="hidden md:block absolute -right-6 bottom-[8%] bg-primary/30 backdrop-blur-md border border-white/20 rounded px-4 py-3 max-w-[190px] shadow-lg">
                  <span className="font-mono-label text-aqua block mb-1">Projected fix</span>
                  <span className="text-sm text-on-navy">+30% conversion</span>
                 </div>
              </div>
            </Reveal>
          </div>

          {/* Reporting */}
          <div className="mt-14 pt-14 border-t border-navy-line">
            <Reveal>
              
              <h2 className="mt-4 text-3xl md:text-4xl">This month's reporting — not vanity metrics.</h2>
            </Reveal>
            <div className="mt-8">
              {REPORTING_ROWS.map((row, i) => (
                <Reveal key={row.label} delay={i * 80}>
                  <div className="flex justify-between items-baseline py-4 border-b border-dashed border-navy-line">
                    <span className="text-on-navy-soft">{row.label}</span>
                    <CountUp
                      to={row.to}
                      prefix={row.prefix}
                      suffix={row.suffix}
                      className={`font-heading text-3xl font-medium tabular-nums ${
                        row.up ? "text-aqua" : "text-on-navy"
                      }`}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sign-off -- the real lead-capture form, id="audit" is what every
              "Get a Free Growth Audit" link on the site scrolls to */}
          <div id="audit" className="mt-14 pt-14 border-t border-navy-line scroll-mt-24">
            {submitted ? (
              <Reveal className="text-center max-w-lg mx-auto">
                <div className="mx-auto w-20 h-20 rounded-full border-2 border-aqua flex items-center justify-center mb-6 animate-in zoom-in-50 spin-in-12 duration-500">
                  <CheckCircle2 className="w-8 h-8 text-aqua" />
                </div>
                <h2 className="text-3xl md:text-4xl">Audit request received.</h2>
                <p className="mt-4 panel-muted">
                  We&rsquo;ll be in touch within one business day to book your walkthrough.
                </p>
              </Reveal>
            ) : (
              <>
                <Reveal className="text-center max-w-lg mx-auto">
                  <h2 className="text-3xl md:text-4xl">Ready for your own audit?</h2>
                  <p className="mt-4 panel-muted">
                    Free growth audit. No obligation. Findings delivered within 5 business days.
                  </p>
                </Reveal>
                <Reveal delay={120} className="mt-10 max-w-2xl mx-auto">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="font-mono-label block mb-2 text-on-navy-soft">Name</label>
                        <input required name="name" value={form.name} onChange={handleChange} className={field} placeholder="Your name" />
                      </div>
                      <div>
                        <label className="font-mono-label block mb-2 text-on-navy-soft">Email</label>
                        <input required type="email" name="email" value={form.email} onChange={handleChange} className={field} placeholder="you@company.com" />
                        {emailSuggestion && (
                          <button
                            type="button"
                            onClick={() => {
                              setForm((f) => ({ ...f, email: emailSuggestion }));
                              setEmailSuggestion(null);
                            }}
                            className="mt-1.5 text-sm text-aqua hover:underline"
                          >
                            Did you mean {emailSuggestion}?
                          </button>
                        )}
                      </div>
                      <div>
                        <label className="font-mono-label block mb-2 text-on-navy-soft">Company</label>
                        <input name="company" value={form.company} onChange={handleChange} className={field} placeholder="Company name" />
                      </div>
                      <div>
                        <label className="font-mono-label block mb-2 text-on-navy-soft">Website</label>
                        <input name="website" value={form.website} onChange={handleChange} className={field} placeholder="yourwebsite.com" />
                      </div>
                    </div>
                    <div>
                      <label className="font-mono-label block mb-2 text-on-navy-soft">What&rsquo;s happening?</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={3} className={field} placeholder="Traffic flatlining? Sales dropped? Tell us what you're seeing." />
                    </div>
                    {error && (
                      <p className="text-sm text-center text-destructive">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group w-full inline-flex items-center justify-center gap-2 bg-aqua text-primary px-6 py-3.5 rounded-md font-medium hover:bg-on-navy transition-all hover:gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Submitting..." : "Get Your Free Growth Audit"}
                      {!submitting && (
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      )}
                    </button>
                    <p className="font-mono-label text-center text-on-navy-soft">
                      No obligation · No credit card · 30-min walkthrough
                    </p>
                  </form>
                </Reveal>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}