"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function ApproachSection() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section className="bg-offwhite py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left */}
          <div ref={leftRef} className="reveal lg:col-span-5">
            <div className="section-label mb-6">
              <span>The Rishil Approach</span>
            </div>
            <h2
              className="font-serif text-headline leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}
            >
              A philosophy of{" "}
              <span className="italic font-light text-navy-light">restraint</span>{" "}
              and{" "}
              <span className="italic font-light text-navy-light">precision.</span>
            </h2>
            <div className="font-sans text-body text-base leading-relaxed space-y-5 max-w-md">
              <p>
                We believe true wealth management is not found in market trends or product quotas — it lives in the timeless principles of disciplined growth, risk mitigation, and patient compounding.
              </p>
              <p>
                Every portfolio we manage is treated as a private ledger of a family's legacy — requiring intellectual rigour, absolute confidentiality, and a long horizon.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-5">
              <div className="gold-divider" />
              <span className="font-serif italic text-navy text-xl">
                Legacy. Trust. Precision.
              </span>
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} className="reveal delay-200 lg:col-span-7 relative">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-hero -rotate-1 relative z-10 w-4/5">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop"
                  alt="Financial advisory meeting"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Floating quote card */}
              <div
                className="absolute -bottom-8 -right-4 lg:right-0 bg-white rounded-2xl p-8 shadow-card-hover z-20 w-72 border border-black/5"
              >
                <div
                  className="font-serif mb-5 leading-none"
                  style={{ color: "#C9A84C", fontSize: "3.5rem", lineHeight: 1 }}
                >
                  "
                </div>
                <blockquote className="font-serif italic text-headline text-lg leading-snug mb-6">
                  Our mission is to translate complex financial shifts into actionable clarity for our clients.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="gold-divider" />
                  <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-body font-semibold">
                    Rishil Shah, Founder & CA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
