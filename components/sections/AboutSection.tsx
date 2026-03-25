"use client";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";

const stats = [
  { value: "15+", suffix: "", label: "Years of Expertise" },
  { value: "₹500Cr+", suffix: "", label: "Assets Managed" },
  { value: "2000+", suffix: "", label: "Clients Served" },
  { value: "98%", suffix: "", label: "Client Retention" },
];

export default function AboutSection() {
  const headRef = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <section className="mb-0">
      {/* Editorial statement */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div ref={headRef} className="reveal">
          <div className="section-label mb-6">
            <span>About Rishil Enterprise</span>
          </div>
          <h2
            className="font-serif text-headline leading-tight max-w-5xl mb-10"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
          >
            Rishil Enterprise is a{" "}
            <span className="italic-accent">full-spectrum financial advisory firm</span> —{" "}
            <span className="italic-accent">guiding wealth</span>, protecting futures, and{" "}
            <span className="italic-accent">optimising returns</span> for discerning clients across India.
          </h2>
          <Link
            href="/about"
            className="font-sans text-sm font-semibold tracking-wide text-navy-light hover:text-navy transition-colors inline-flex items-center gap-2"
          >
            Learn More About Us →
          </Link>
        </div>
      </div>

      {/* Stat cards band */}
      <div className="bg-indigo-tint py-16 w-full">
        <div ref={statsRef} className="reveal max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-8 card-base"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="font-serif text-navy font-bold mb-2"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                >
                  {s.value}
                </div>
                <div className="font-sans text-body text-[11px] uppercase tracking-[0.16em]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
