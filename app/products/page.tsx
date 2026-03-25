import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";
import { products } from "@/lib/catalog";

export const metadata = { title: "Products | Sharma Enterprise" };

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <div className="section-label mb-4"><span>Investment Products</span></div>
            <h1 className="font-serif text-headline leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300 }}>
              Every Financial Instrument.{" "}
              <span className="italic-accent">One Trusted Partner.</span>
            </h1>
            <p className="font-sans text-body text-base leading-relaxed mt-6 max-w-xl">
              We offer access to the full spectrum of investment products — curated, advised, and monitored by our CA and investment advisory team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="bg-white rounded-2xl p-8 card-base border border-black/5 group block relative"
              >
                {p.tag && (
                  <div className="absolute top-5 right-5">
                    <span className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-white bg-navy px-2.5 py-1.5 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <p.Icon className="w-10 h-10 text-navy" strokeWidth={1.75} />
                </div>
                <h2 className="font-serif text-headline text-xl mb-3 group-hover:text-navy transition-colors">{p.name}</h2>
                <p className="font-sans text-body text-sm leading-relaxed mb-6">{p.description}</p>
                <div className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-navy-light group-hover:text-navy transition-colors inline-flex items-center gap-1.5">
                  Explore →
                </div>
              </Link>
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
