"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headlineRef.current, subRef.current, ctaRef.current, cardRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 + i * 120);
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-10">
      <div
        className="relative rounded-4xl overflow-hidden flex items-center min-h-[540px] sm:h-[calc(100svh-9.5rem)] sm:min-h-[620px]"
        style={{ boxShadow: "0 24px 80px rgba(13,31,92,0.18)" }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-navy-deep">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate architecture"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          {/* Gradient scrim */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(0,10,56,0.92) 0%, rgba(0,10,56,0.7) 55%, rgba(13,31,92,0.4) 100%)",
            }}
          />
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`
          }} />
        </div>

        {/* Decorative orb */}
        <div className="absolute right-[20%] top-1/3 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #1A3FBF, transparent 70%)", filter: "blur(60px)" }} />

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 px-6 sm:px-10 lg:px-16 w-full py-10 sm:py-12 lg:py-16">
          {/* Left */}
          <div className="max-w-xl">
            <div ref={headlineRef} className="mb-4 flex items-center gap-2">
              <span style={{ color: "#1A3FBF", fontSize: "0.6rem" }}>●</span>
              <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50">
                Chartered Accountants · Tax & Compliance
              </span>
            </div>

            <h1
              ref={headlineRef}
              className="font-serif text-white leading-[1.08] mb-6"
              style={{ fontSize: "clamp(2.35rem, 5vw, 5rem)", fontWeight: 300 }}
            >
              Financial Clarity.{" "}
              <span className="italic" style={{ color: "#b8c4ff" }}>
                Compliance
              </span>
              <br />
              <span className="italic" style={{ color: "#b8c4ff" }}>
                Made
              </span>{" "}
              Simple.
            </h1>

            <p
              ref={subRef}
              className="font-sans text-white/60 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-md"
            >
              Sharma Enterprise — CA-led support for Income Tax, GST, audit, accounting, and business compliance with responsive communication and clean documentation.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <Link href="/services" className="btn-navy bg-white text-navy hover:bg-white/90" style={{ color: "#0D1F5C", background: "white" }}>
                Explore Services →
              </Link>
              <Link href="/about" className="btn-ghost">
                Our Legacy
              </Link>
            </div>
          </div>

          {/* Right — Glass stat card */}
          <div ref={cardRef} className="lg:flex lg:items-center lg:justify-end justify-self-start sm:justify-self-center lg:justify-self-end">
            <div
              className="glass rounded-3xl p-7 sm:p-10 w-full max-w-[22rem] sm:max-w-xs shadow-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
            >
              {[
                { value: "15+", label: "Years of Expertise" },
                { value: "2000+", label: "Clients Served" },
                { value: "10000+", label: "Filings & Compliance Tasks" },
              ].map((stat, i) => (
                <div key={stat.label}>
                  {i > 0 && <div className="gold-divider my-6 sm:my-7" />}
                  <div
                    className="font-serif text-navy font-medium"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-sans text-body text-[11px] uppercase tracking-[0.18em] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
