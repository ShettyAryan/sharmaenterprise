"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";

const testimonials = [
  {
    quote:
      "Rishil Enterprise completely restructured our family's portfolio. The tax savings alone in the first year were significant. They truly understand HNI requirements.",
    name: "Suresh Mehta",
    role: "Textile Manufacturer, Surat",
    initials: "SM",
  },
  {
    quote:
      "What sets them apart is the personal attention. My relationship manager knows my goals, my risk appetite, and calls me before I even have to ask. That's rare.",
    name: "Priya Desai",
    role: "Director, Desai Pharmaceuticals",
    initials: "PD",
  },
  {
    quote:
      "As an NRI investing back in India, I needed someone I could trust completely. Rishil Enterprise has been that partner for the last 8 years. Impeccable service.",
    name: "Raj Patel",
    role: "NRI Investor, London",
    initials: "RP",
  },
];

export default function TestimonialsSection() {
  const headRef = useScrollReveal();
  const cardsRef = useScrollReveal();

  return (
    <section className="bg-indigo-tint py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headRef} className="reveal mb-16">
          <div className="section-label mb-4">
            <span>Client Stories</span>
          </div>
          <h2
            className="font-serif text-headline"
            style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)" }}
          >
            What Our <span className="italic-accent">Clients</span> Say
          </h2>
        </div>

        <div ref={cardsRef} className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-9 testimonial-card card-base"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Quote mark */}
              <div
                className="font-serif leading-none mb-6"
                style={{ color: "#C9A84C", fontSize: "3rem", lineHeight: 1 }}
              >
                "
              </div>
              <blockquote className="font-serif italic text-headline text-lg leading-snug mb-8">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center shrink-0">
                  <span className="font-serif text-white text-sm font-semibold">{t.initials}</span>
                </div>
                <div>
                  <div className="font-sans text-headline text-sm font-semibold">{t.name}</div>
                  <div className="font-sans text-body text-[11px] mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
