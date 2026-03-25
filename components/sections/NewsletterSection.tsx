"use client";
import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-12 px-6 lg:px-8 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="reveal bg-indigo-tint rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-navy/5"
        >
          <div className="max-w-md">
            <div className="section-label mb-4">
              <span>The Sharma Perspective</span>
            </div>
            <h3
              className="font-serif text-headline leading-tight mb-3"
              style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
            >
              Monthly <span className="italic-accent">Wealth Intelligence</span>
            </h3>
            <p className="font-sans text-body text-sm leading-relaxed">
              Curated insights on markets, tax changes, and investment opportunities — delivered to your inbox every month. No spam. Unsubscribe anytime.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[380px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your professional email"
                required
                className="flex-grow px-6 py-4 rounded-full border border-navy/10 bg-white font-sans text-sm text-headline placeholder-body/50 focus:outline-none focus:ring-2 focus:ring-navy/20"
              />
              <button type="submit" className="btn-navy shrink-0">
                Subscribe
              </button>
            </form>
          ) : (
            <div className="text-center md:text-left">
              <div className="text-3xl mb-2">✓</div>
              <p className="font-sans text-sm font-semibold text-navy">
                You're subscribed!
              </p>
              <p className="font-sans text-xs text-body mt-1">
                Look out for our next edition.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
