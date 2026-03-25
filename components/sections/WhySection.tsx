"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { BrainCircuit, Lock, MapPin, PhoneCall, RefreshCw, Scale } from "lucide-react";

const pillars = [
  {
    icon: <Scale className="w-9 h-9 text-navy" strokeWidth={1.75} />,
    title: "Ethics-First Practice",
    desc: "We follow professional ethics, documentation discipline, and confidentiality as non-negotiables — with clear communication at every step.",
  },
  {
    icon: <BrainCircuit className="w-9 h-9 text-navy" strokeWidth={1.75} />,
    title: "CA-Led, Practical Advice",
    desc: "No jargon. No generic templates. Just clear, India-specific guidance you can implement with minimal back-and-forth.",
  },
  {
    icon: <RefreshCw className="w-9 h-9 text-navy" strokeWidth={1.75} />,
    title: "End-to-End Financial Management",
    desc: "From ITR and GST to audits and ROC compliances — we support the complete finance and compliance lifecycle under one roof.",
  },
  {
    icon: <Lock className="w-9 h-9 text-navy" strokeWidth={1.75} />,
    title: "Absolute Confidentiality",
    desc: "Your financial documents and disclosures are handled with strict confidentiality and controlled access.",
  },
  {
    icon: <MapPin className="w-9 h-9 text-navy" strokeWidth={1.75} />,
    title: "Deep Local Expertise",
    desc: "Rooted in Gujarat, we understand the nuances of Indian businesses, proprietors, partnerships, HUFs, and companies.",
  },
  {
    icon: <PhoneCall className="w-9 h-9 text-navy" strokeWidth={1.75} />,
    title: "Dedicated Relationship Manager",
    desc: "A single point of contact who knows your case history, deadlines, and documentation — and is reachable when you need help.",
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
            The <span className="italic-accent">Sharma Difference</span> —<br />
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
              <div className="mb-6">{p.icon}</div>
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
