import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";

const services = [
  { icon: "📈", title: "Investment Portfolio", slug: "investment-portfolio", desc: "Strategically diversified portfolios built around your risk profile, time horizon, and life goals. We manage equity, debt, hybrid, and alternative assets under one coordinated strategy.", benefits: ["Risk-adjusted portfolio construction", "Quarterly rebalancing", "Direct & regular plan advisory"] },
  { icon: "🛡️", title: "Insurance Policies", slug: "insurance-policies", desc: "Comprehensive life, health, term, and asset protection plans to secure your family's financial future against unforeseen events.", benefits: ["Term, ULIP & endowment plans", "Health & critical illness cover", "Business keyman insurance"] },
  { icon: "🧺", title: "Wealth Basket", slug: "wealth-basket", desc: "Curated, theme-based investment baskets built around high-conviction sectors — technology, consumption, ESG, and more — for focused, transparent investing.", benefits: ["Sector-focused model portfolios", "Transparent holdings", "Quarterly basket reviews"] },
  { icon: "🎯", title: "Targeted Investment", slug: "targeted-investment", desc: "Goal-oriented financial planning for specific life milestones — children's education, retirement, home purchase, or business succession.", benefits: ["Goal-linked asset allocation", "Timeline-based strategy", "Regular progress reviews"] },
  { icon: "📋", title: "Tax Optimisation", slug: "tax-optimisation", desc: "Expert CA-led tax structuring and planning to minimise liability, maximise post-tax returns, and ensure full regulatory compliance across direct and indirect taxes.", benefits: ["ITR filing & planning", "HUF & trust structuring", "Capital gains optimisation"] },
];

export const metadata = { title: "Services | Rishil Enterprise" };

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-20">
            <div className="section-label mb-4"><span>What We Offer</span></div>
            <h1 className="font-serif text-headline max-w-3xl leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300 }}>
              Comprehensive <span className="italic-accent">Financial Services</span> Tailored to You
            </h1>
            <p className="font-sans text-body text-base leading-relaxed mt-6 max-w-xl">
              From tax planning to portfolio management — Rishil Enterprise offers a complete spectrum of financial advisory services for HNIs, businesses, and salaried professionals.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            {services.map((s, i) => (
              <div key={s.slug} className="bg-white rounded-3xl p-10 card-base border border-black/5 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="text-4xl mb-5">{s.icon}</div>
                  <h2 className="font-serif text-headline text-3xl mb-4">{s.title}</h2>
                  <p className="font-sans text-body text-base leading-relaxed mb-6">{s.desc}</p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="btn-navy inline-flex"
                  >
                    Explore {s.title} →
                  </Link>
                </div>
                <div className="bg-indigo-tint rounded-2xl p-7">
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-body mb-5">Key Benefits</h4>
                  <ul className="space-y-3">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 font-sans text-sm text-headline">
                        <span className="text-gold mt-0.5">◆</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <CTABanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
