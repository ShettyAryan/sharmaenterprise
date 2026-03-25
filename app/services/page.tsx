import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";
import { services } from "@/lib/catalog";

export const metadata = { title: "Services | Sharma Enterprise" };

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
              From Income Tax and GST to audits and ongoing compliance — Sharma Enterprise provides end-to-end CA services for individuals, SMEs, and growing businesses.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            {services.map((s, i) => (
              <div key={s.slug} className="bg-white rounded-3xl p-10 card-base border border-black/5 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-5">
                    <s.Icon className="w-10 h-10 text-navy" strokeWidth={1.75} />
                  </div>
                  <h2 className="font-serif text-headline text-3xl mb-4">{s.title}</h2>
                  <p className="font-sans text-body text-base leading-relaxed mb-6">{s.description}</p>
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
