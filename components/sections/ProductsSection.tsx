"use client";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { products } from "@/lib/catalog";

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
              href={`/products/${p.slug}`}
              className="bg-white rounded-2xl p-7 card-base group flex flex-col h-full"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="mb-5">
                <p.Icon className="w-9 h-9 text-navy" strokeWidth={1.75} />
              </div>
              <h3 className="font-serif text-headline text-xl mb-2 group-hover:text-navy transition-colors">
                {p.name}
              </h3>
              <p className="font-sans text-body text-xs leading-relaxed">{p.description}</p>
              <div className="mt-auto pt-5 text-navy-light font-sans text-[11px] font-bold uppercase tracking-[0.14em] group-hover:gap-2 transition-all inline-flex items-center gap-1">
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
