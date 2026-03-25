"use client";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";

const services = [
  {
    icon: "📈",
    title: "Investment Portfolio",
    desc: "Strategically diversified portfolios built to balance risk and maximise long-term returns for HNIs and families.",
    href: "/services/investment-portfolio",
  },
  {
    icon: "🛡️",
    title: "Insurance Policies",
    desc: "Comprehensive life, health, and asset protection plans to safeguard what matters most.",
    href: "/services/insurance-policies",
  },
  {
    icon: "🧺",
    title: "Wealth Basket",
    desc: "Curated, theme-based investment baskets focused on high-conviction sectors and sustainable alpha.",
    href: "/services/wealth-basket",
  },
  {
    icon: "🎯",
    title: "Targeted Investment",
    desc: "Goal-oriented financial planning for retirement, education, succession, and life milestones.",
    href: "/services/targeted-investment",
  },
  {
    icon: "📋",
    title: "Tax Optimisation",
    desc: "Expert CA-led structuring to minimise tax liability and maximise post-tax wealth.",
    href: "/services/tax-optimisation",
  },
];

export default function ServicesSection() {
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
      <div ref={headRef} className="reveal mb-16">
        <div className="section-label mb-4">
          <span>Our Services</span>
        </div>
        <div className="flex items-end justify-between">
          <h2
            className="font-serif text-headline"
            style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)" }}
          >
            Our <span className="italic-accent">Expertise</span>
          </h2>
          <Link
            href="/services"
            className="hidden md:inline-flex font-sans text-sm font-semibold text-navy-light hover:text-navy transition-colors items-center gap-1"
          >
            View All Services →
          </Link>
        </div>
      </div>

      <div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="bg-white p-9 rounded-2xl card-base group"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="text-3xl mb-7">{s.icon}</div>
            <h3
              className="font-serif text-headline mb-3 group-hover:text-navy transition-colors"
              style={{ fontSize: "1.5rem" }}
            >
              {s.title}
            </h3>
            <p className="font-sans text-body text-sm leading-relaxed mb-8">{s.desc}</p>
            <Link
              href={s.href}
              className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-navy-light hover:text-navy transition-colors inline-flex items-center gap-2"
            >
              Explore <span>→</span>
            </Link>
          </div>
        ))}

        {/* CTA Card */}
        <div className="bg-navy rounded-2xl p-9 flex flex-col items-start justify-between group cursor-pointer hover:bg-navy-light transition-colors duration-300">
          <div className="text-white/20 font-serif text-6xl leading-none font-light mb-8">"</div>
          <div>
            <p className="font-serif text-white text-xl italic leading-snug mb-8">
              Every rupee has a purpose. Let us help you find it.
            </p>
            <Link
              href="/services"
              className="font-sans text-sm font-bold text-gold hover:text-gold-light transition-colors inline-flex items-center gap-2"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
