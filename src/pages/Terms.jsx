import { ArrowLeft } from "lucide-react";
import Footer from "@/components/site/Footer";

// Template content -- fill in the bracketed placeholders and have this
// reviewed by a lawyer before treating it as your real terms of service.
const COMPANY_NAME = "Quantum Growth Logic";
const CONTACT_EMAIL = "[your-contact-email]";
const GOVERNING_LAW = "[Your State/Country]";
const LAST_UPDATED = "[Month Day, Year]";

export default function Terms() {
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
          <span className="font-mono-label text-primary">Terms & Conditions</span>
          <h1 className="mt-4 text-4xl md:text-5xl leading-[1.05]">
            The <span className="gradient-text">fine print</span>.
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 space-y-10 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of terms</h2>
            <p>
              By accessing or using the {COMPANY_NAME} website and services, you agree to be bound
              by these Terms & Conditions. If you don't agree, please don't use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of services</h2>
            <p>
              {COMPANY_NAME} provides business growth consulting services, including but not limited
              to sales strategy, customer acquisition, and growth audits, delivered to businesses of
              all sizes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Accounts</h2>
            <p>
              Some features require creating an account. You're responsible for maintaining the
              confidentiality of your login credentials and for all activity under your account.
              Notify us immediately of any unauthorized use.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Payments</h2>
            <p>
              Where paid services are offered, pricing and payment terms will be presented at the
              time of purchase. All fees are non-refundable unless otherwise stated in writing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Intellectual property</h2>
            <p>
              All content on this site -- including text, graphics, logos, and methodology -- is the
              property of {COMPANY_NAME} unless otherwise noted, and may not be reproduced without
              permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Limitation of liability</h2>
            <p>
              Our services are provided "as is." To the fullest extent permitted by law,
              {" " + COMPANY_NAME} is not liable for any indirect, incidental, or consequential
              damages arising from your use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access to our services for any user who
              violates these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Governing law</h2>
            <p>
              These terms are governed by the laws of {GOVERNING_LAW}, without regard to conflict of
              law principles.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to these terms</h2>
            <p>
              We may update these terms from time to time. Continued use of our services after
              changes take effect constitutes acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact us</h2>
            <p>Questions about these terms? Reach us at {CONTACT_EMAIL}.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}