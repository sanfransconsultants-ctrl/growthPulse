import Reveal from "./Reveal";

const TEAM = [
  {
    name: "Ayush Pant",
    role: "Data & Growth Strategy",
    initials: "AP",
    grad: "from-indigo-500 to-violet-400",
    body: "Data engineering and analytics background — Azure, SQL, Power BI, and ETL pipelines — with marketing and growth experience across multiple organizations. Focused on turning data into clear business decisions.",
  },
  {
    name: "Hitendra Singh Masand",
    role: "Technical Systems & Full-Stack",
    initials: "HM",
    grad: "from-emerald-500 to-teal-400",
    body: "Full-stack developer and systems thinker. Focused on architecture, data flow, and building scalable technical solutions that keep the audit-to-execution pipeline fast and reliable.",
  },
  {
    name: "Victoria McGrath",
    role: "Operations & Process Improvement",
    initials: "VM",
    grad: "from-sky-500 to-cyan-400",
    body: "Mechatronics and computer systems background with experience in manufacturing process improvement, Lean methodology, and operational efficiency. Brings a systems and process lens to how the business is run.",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 md:py-40 border-t border-border/60">
      <div className="absolute inset-0 mesh-gradient opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="font-mono-label text-primary mb-5">05 / Meet the Team</div>
          <h2 className="text-4xl md:text-5xl max-w-3xl">
            A small, senior, multi-disciplinary group.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            Three people across data, technology, and operations — not a faceless agency.
            You work with the people who do the work.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div className="card-hover border border-border/60 rounded-2xl p-8 bg-card h-full">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${m.grad} text-white font-semibold text-lg flex items-center justify-center mb-6 shadow-md`}
                >
                  {m.initials}
                </div>
                <div className="font-mono-label text-primary mb-2">{m.role}</div>
                <h3 className="text-xl font-semibold tracking-tight">{m.name}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-[0.95rem]">
                  {m.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}