import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-foreground text-background py-24 md:py-32">
      <div className="absolute inset-0 grid-truth opacity-[0.04] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="font-mono-label text-primary mb-6">SOLVED</div>
        <h2 className="text-4xl md:text-6xl max-w-3xl mx-auto tracking-tight">
          Stop losing customers you already paid to get.
        </h2>
        <a
          href="#audit"
          className="group inline-flex items-center gap-2 mt-10 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium hover:bg-primary/90 transition-all hover:gap-3"
        >
          Get Your Free Growth Audit
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-background/10">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block w-2.5 h-2.5 rounded-sm bg-primary" />
            Quantum Growth Logic
          </div>
          <nav className="flex items-center gap-6 font-mono-label text-background/60">
            <a href="#leaks" className="hover:text-background transition-colors">Leaks</a>
            <a href="#process" className="hover:text-background transition-colors">Process</a>
            <a href="#pricing" className="hover:text-background transition-colors">Pricing</a>
            <a href="#team" className="hover:text-background transition-colors">Team</a>
          </nav>
          <div className="flex items-center gap-4 font-mono-label text-background/40 text-xs">
+             <span>© {new Date().getFullYear()} Quantum Growth Logic</span>
+             <Link to="/privacy-policy" className="hover:text-background/70 transition-colors">
+               Privacy
+             </Link>
+             <Link to="/terms" className="hover:text-background/70 transition-colors">
+               Terms
+             </Link>
+           </div>
        </div>
      </div>
    </footer>
  );
}