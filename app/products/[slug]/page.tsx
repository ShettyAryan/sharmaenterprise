import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/catalog";
import { ArrowLeft, Check } from "lucide-react";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product | Sharma Enterprise" };
  return { title: `${product.name} | Sharma Enterprise` };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-offwhite min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-navy-light hover:text-navy transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
              Back to Products
            </Link>
          </div>

          <section className="bg-white rounded-4xl border border-black/5 card-base overflow-hidden">
            <div className="p-10 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <div className="section-label mb-5">
                  <span>Product</span>
                </div>
                <h1
                  className="font-serif text-headline leading-tight"
                  style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)", fontWeight: 300 }}
                >
                  {product.name}
                </h1>
                <p className="font-sans text-body text-base leading-relaxed mt-6 max-w-2xl">
                  {product.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-navy inline-flex">
                    Talk to an Advisor →
                  </Link>
                  <a href="#steps" className="btn-ghost inline-flex">
                    Implementation steps
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-indigo-tint rounded-3xl p-9 border border-navy/5">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <product.Icon className="w-10 h-10 text-navy" strokeWidth={1.75} />
                    </div>
                    <div className="w-full">
                      <div className="flex items-center justify-between gap-4">
                        <div className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-body">
                          Highlights
                        </div>
                        {product.tag ? (
                          <span className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-white bg-navy px-2.5 py-1.5 rounded-full">
                            {product.tag}
                          </span>
                        ) : null}
                      </div>
                      <ul className="mt-5 space-y-3">
                        {product.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3 font-sans text-sm text-headline">
                            <span className="mt-0.5 text-gold">◆</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-white rounded-3xl p-9 border border-black/5">
                  <div className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-body">
                    Suitable for
                  </div>
                  <ul className="mt-5 space-y-3">
                    {product.suitability.map((s) => (
                      <li key={s} className="flex items-start gap-3 font-sans text-sm text-headline">
                        <Check className="w-4 h-4 text-navy mt-0.5" strokeWidth={1.75} />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="steps" className="mt-14">
            <div className="section-label mb-4">
              <span>Implementation</span>
            </div>
            <h2
              className="font-serif text-headline mb-10"
              style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 300 }}
            >
              A simple path from intent to execution
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {product.steps.map((step, i) => (
                <div
                  key={step.title}
                  className="bg-white rounded-3xl p-8 border border-black/5 card-base"
                >
                  <div className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-gold mb-4">
                    Step {i + 1}
                  </div>
                  <h3 className="font-serif text-headline text-xl mb-3">{step.title}</h3>
                  <p className="font-sans text-body text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-20">
            <CTABanner />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

