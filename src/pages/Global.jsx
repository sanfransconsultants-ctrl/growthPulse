import { ArrowLeft, MapPin } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Footer from "@/components/site/Footer";

const CITIES = [
  {
    name: "Paris",
    country: "France",
    focus: "European market entry",
    phase: "Phase 01",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Dubai",
    country: "UAE",
    focus: "Gulf & MENA hub",
    phase: "Phase 01",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    name: "Tokyo",
    country: "Japan",
    focus: "APAC expansion",
    phase: "Phase 02",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    name: "New York",
    country: "USA",
    focus: "Americas base",
    phase: "Phase 02",
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    name: "London",
    country: "UK",
    focus: "English-speaking markets",
    phase: "Phase 03",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    name: "Singapore",
    country: "Singapore",
    focus: "Southeast Asia gateway",
    phase: "Phase 03",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-2",
  },
];

export default function Global() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        <div className="absolute inset-0 grid-truth opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono-label text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </a>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono-label text-primary">Our Global Vision</span>
            <span className="font-mono-label text-[10px] text-muted-foreground border border-border/60 rounded-full px-2 py-0.5">
              ROADMAP · NOT CURRENT OPS
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl max-w-4xl leading-[1.03]">
            Building a{" "}
            <span className="gradient-text">global</span> growth engine.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Over the next six months, we&rsquo;re bringing the audit-to-execution model to
            businesses in major markets worldwide. These are planned expansion targets —
            a vision of where we&rsquo;re headed, not a claim of current global operations.
          </p>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-10">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-mono-label text-muted-foreground">
                Target expansion markets
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
            {CITIES.map((c, i) => (
              <Reveal
                key={c.name}
                delay={i * 70}
                className={`group relative overflow-hidden rounded-2xl crosshair-zone ${c.span}`}
              >
                <img
                  src={c.img}
                  alt={`${c.name}, ${c.country}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="font-mono-label text-[9px] bg-black/50 text-white/90 px-2 py-1 rounded">
                    {c.phase} · PROJECTED
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                  <div className="text-xl md:text-2xl font-semibold tracking-tight">
                    {c.name}
                  </div>
                  <div className="font-mono-label text-[10px] text-white/70">
                    {c.country}
                  </div>
                  <p className="text-xs text-white/80 mt-1 hidden md:block">
                    {c.focus}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-10">
            <div className="border border-dashed border-border rounded-lg px-5 py-4 bg-secondary/40 flex items-start gap-3">
              <span className="font-mono-label text-[10px] text-primary shrink-0 mt-0.5">
                PROJECTED
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Imagery shown is for illustrative purposes only. Markets depicted are
                planned expansion targets — a concept demo of where we intend to operate,
                not an actual current footprint or office location.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160} className="mt-16 text-center">
            <h2 className="text-3xl md:text-4xl max-w-2xl mx-auto tracking-tight">
              Want to be one of our first global clients?
            </h2>
            <a
              href="/#audit"
              className="group inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium hover:bg-primary/90 transition-all hover:gap-3 glow-primary"
            >
              Get a Free Growth Audit
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}