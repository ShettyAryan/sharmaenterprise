"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";

const pillars = [
  {
    icon: "⚖️",
    title: "SEBI Registered & Compliant",
    desc: "Fully regulated under SEBI's Investment Adviser framework. Your interests are protected by law, not just promise.",
  },
  {
    icon: "🧠",
    title: "Personalised Advisory, Not Algorithms",
    desc: "Every portfolio is hand-crafted by our CA team. No robo-advisors. No templated plans. Just tailored strategy.",
  },
  {
    icon: "🔄",
    title: "End-to-End Financial Management",
    desc: "From tax filing to portfolio rebalancing — we cover the complete financial lifecycle under one trusted roof.",
  },
  {
    icon: "🔒",
    title: "Absolute Confidentiality",
    desc: "Your financial affairs are handled with institutional-grade discretion. We operate as a private ledger.",
  },
  {
    icon: "📍",
    title: "Deep Local Expertise",
    desc: "Rooted in Gujarat, we understand the financial nuances of Indian businesses, HUFs, and family offices.",
  },
  {
    icon: "📞",
    title: "Dedicated Relationship Manager",
    desc: "A single point of contact who knows your portfolio, your goals, and is always reachable.",
  },
];

export default function WhySection() {
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headRef} className="reveal mb-16 max-w-2xl">
          <div className="section-label mb-4">
            <span>Why Choose Us</span>
          </div>
          <h2
            className="font-serif text-headline leading-tight"
            style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)" }}
          >
            The <span className="italic-accent">Rishil Difference</span> —<br />
            Discipline over noise.
          </h2>
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="p-8 rounded-2xl border border-black/5 hover:bg-indigo-tint transition-colors duration-300 group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-3xl mb-6">{p.icon}</div>
              <h3
                className="font-serif text-headline mb-3 group-hover:text-navy transition-colors"
                style={{ fontSize: "1.25rem" }}
              >
                {p.title}
              </h3>
              <p className="font-sans text-body text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
