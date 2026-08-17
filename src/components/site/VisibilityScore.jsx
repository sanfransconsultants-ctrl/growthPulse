import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { supabase } from "@/api/supabaseClient";

// Not an instant on-page tool -- the team runs the actual check (Google
// ranking, review standing, site speed, profile completeness) and sends
// results directly. This form just captures the request.
export default function VisibilityScore() {
  const [form, setForm] = useState({ businessName: "", city: "", email: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const { error: insertError } = await supabase.from("leads").insert({
        company: form.businessName,
        city: form.city,
        email: form.email,
        source: "visibility_score",
      });
      if (insertError) throw insertError;
      setSubmitted(true);
    } catch (err) {
      console.error("Visibility score request failed:", err);
      setError("Something went wrong submitting that. Please try again, or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const field =
    "w-full bg-card border border-border rounded-md px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";

  return (
    <section id="visibility-score" className="relative py-24 md:py-32 border-t border-border/60 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <div className="font-mono-label text-accent mb-5 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Your Free Visibility Score
          </div>
          <h2 className="text-4xl md:text-5xl">See exactly how you rank.</h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Tell us your business name and city. We&rsquo;ll personally check your Google
            ranking, review standing, site speed, and profile completeness — then send
            your score and findings straight to your inbox.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          {submitted ? (
            <div className="max-w-md mx-auto text-center py-4">
              <div className="mx-auto w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center mb-5">
                <CheckCircle2 className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Request received.</h3>
              <p className="mt-3 text-muted-foreground">
                We&rsquo;re pulling {form.businessName || "your"} visibility data now —
                expect your score within 2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  className={field}
                  placeholder="Business name"
                />
                <input
                  required
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className={field}
                  placeholder="City"
                />
              </div>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={field}
                placeholder="you@company.com"
              />
              {error && <p className="text-sm text-destructive">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium hover:bg-aqua hover:text-primary transition-all hover:gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Request My Free Score"}
                {!submitting && (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}