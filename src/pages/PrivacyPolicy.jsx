import { ArrowLeft } from "lucide-react";
import Footer from "@/components/site/Footer";

// Template content -- fill in the bracketed placeholders and have this
// reviewed by a lawyer before treating it as your real privacy policy.
const COMPANY_NAME = "Feneros";
const CONTACT_EMAIL = "[your-contact-email]";
const LAST_UPDATED = "[Month Day, Year]";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-36 md:pt-44 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        <div className="absolute inset-0 grid-truth opacity-40 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6">
          
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono-label text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </a>
          <span className="font-mono-label text-primary">Privacy Policy</span>
          <h1 className="mt-4 text-4xl md:text-5xl leading-[1.05]">
            How we handle your <span className="gradient-text">data</span>.
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 space-y-10 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Information we collect</h2>
            <p>
              When you request a growth audit, join our waitlist, or create an account, we collect
              the information you provide directly -- such as your name, email address, company
              name, and any details you share in a message or form field. If you create an account,
              we also store your login credentials (handled securely by our authentication
              provider, Supabase -- we never see or store raw passwords).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. How we use your information</h2>
            <p>
              We use the information we collect to respond to your inquiries, deliver the services
              you request, send you updates about {COMPANY_NAME}, and improve our website and
              offerings. We do not sell your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Third-party services</h2>
            <p>
              We use trusted third-party providers to operate this site: Supabase for our database,
              authentication, and hosting infrastructure, and an email delivery provider to send
              confirmation and follow-up emails. These providers process data on our behalf and are
              contractually obligated to protect it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Cookies</h2>
            <p>
              We use essential cookies to keep you signed in and to remember basic site preferences.
              We do not currently use third-party advertising or tracking cookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Data retention</h2>
            <p>
              We retain your information for as long as your account is active or as needed to
              provide you services, respond to inquiries, and comply with our legal obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information at
              any time by contacting us at {CONTACT_EMAIL}.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. We'll post the updated version here with
              a revised "last updated" date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact us</h2>
            <p>
              Questions about this policy? Reach us at {CONTACT_EMAIL}.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}