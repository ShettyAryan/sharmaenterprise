"use client";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";

const products = [
  { icon: "💹", name: "Mutual Fund", desc: "SIP & lumpsum across equity, debt, and hybrid funds" },
  { icon: "🛡️", name: "Insurance", desc: "Life, term, health & ULIP solutions" },
  { icon: "📊", name: "PMS", desc: "Portfolio Management Services for HNIs" },
  { icon: "📈", name: "Direct Equity", desc: "NSE/BSE listed equity with advisory" },
  { icon: "🏦", name: "Fixed Deposit", desc: "Bank & corporate FD with competitive rates" },
  { icon: "📜", name: "Bonds", desc: "Government, PSU & corporate bonds" },
  { icon: "🧺", name: "Smallcase", desc: "Curated model portfolios on smallcase" },
  { icon: "💧", name: "LiquiLoans", desc: "P2P lending for higher yield instruments" },
];

export default function ProductsSection() {
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="bg-indigo-tint py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headRef} className="reveal mb-16">
          <div className="section-label mb-4">
            <span>Our Products</span>
          </div>
          <div className="flex items-end justify-between">
            <h2
              className="font-serif text-headline"
              style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)" }}
            >
              Every Instrument.{" "}
              <span className="italic-accent">One Trusted Partner.</span>
            </h2>
            <Link
              href="/products"
              className="hidden md:inline-flex font-sans text-sm font-semibold text-navy-light hover:text-navy transition-colors items-center gap-1"
            >
              View All Products →
            </Link>
          </div>
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <Link
              key={p.name}
              href={`/products/${p.name.toLowerCase().replace(/ /g, "-")}`}
              className="bg-white rounded-2xl p-7 card-base group block"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="text-3xl mb-5">{p.icon}</div>
              <h3 className="font-serif text-headline text-xl mb-2 group-hover:text-navy transition-colors">
                {p.name}
              </h3>
              <p className="font-sans text-body text-xs leading-relaxed">{p.desc}</p>
              <div className="mt-5 text-navy-light font-sans text-[11px] font-bold uppercase tracking-[0.14em] group-hover:gap-2 transition-all inline-flex items-center gap-1">
                Explore →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/products" className="btn-navy inline-flex">
            Explore All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
