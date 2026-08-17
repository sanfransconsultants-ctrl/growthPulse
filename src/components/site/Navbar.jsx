import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

// TODO: swap in your real number -- placeholder until you send it over
const PHONE_NUMBER = "+15555555555";
const PHONE_DISPLAY = "(555) 555-5555";

const LINKS = [
  { label: "Leaks", href: "#leaks" },
  { label: "Process", href: "#process" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Pricing", href: "#pricing" },
  { label: "Team", href: "#team" },
  { label: "Global", to: "/global" },
  { label: "Log in", to: "/login" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-[22px] md:top-[30px] left-0 right-0 z-40 transition-all duration-300 ${
        solid ? "bg-background/80 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-primary" />
          <span className="text-foreground">Feneros</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) =>
            l.to ? (
              <Link
                key={l.label}
                to={l.to}
                className="font-mono-label text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="font-mono-label text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            )
          )}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="hidden lg:flex items-center gap-1.5 font-mono-label text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#audit"
            className="font-mono-label bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Get Free Audit
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-b border-border/60 px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) =>
            l.to ? (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-mono-label text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono-label text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            )
          )}
          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5 font-mono-label text-muted-foreground hover:text-foreground"
          >
            <Phone className="w-3.5 h-3.5" />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#audit"
            onClick={() => setOpen(false)}
            className="font-mono-label bg-primary text-primary-foreground px-4 py-2 rounded-md text-center"
          >
            Get Free Audit
          </a>
        </div>
      )}
    </header>
  );
}