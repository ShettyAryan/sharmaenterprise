"use client";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function CTABanner() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 px-6 lg:px-8 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-3xl bg-navy py-20 px-10 md:px-20 text-center"
        >
          {/* Decorative orbs */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -mr-32 -mt-32 pointer-events-none"
            style={{ background: "radial-gradient(circle, #1A3FBF, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 -ml-32 -mb-32 pointer-events-none"
            style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="section-label justify-center mb-6">
              <span className="text-white/50">Take the Next Step</span>
            </div>
            <h2
              className="font-serif text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              Ready to <span className="italic font-light" style={{ color: "#b8c4ff" }}>Take Control</span> of Your{" "}
              <span className="italic font-light" style={{ color: "#b8c4ff" }}>Financial Future?</span>
            </h2>
            <p className="font-sans text-white/60 text-base leading-relaxed mb-10">
              Join 2,000+ clients who trust Rishil Enterprise for their wealth management, tax planning, and investment needs. Book a complimentary 30-minute consultation today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-gold">
                Book a Free Consultation →
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
