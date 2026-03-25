"use client";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";

const posts = [
  {
    category: "Tax Planning",
    title: "New Tax Regime vs Old Regime: Which is Better for You in FY 2024-25?",
    excerpt: "A detailed breakdown of both regimes with worked examples for salaried professionals and business owners.",
    date: "12 Mar 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Mutual Funds",
    title: "Why SIP Remains the Most Reliable Path to Long-Term Wealth",
    excerpt: "Understanding rupee cost averaging and the compounding advantage of disciplined monthly investments.",
    date: "5 Mar 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Estate Planning",
    title: "Succession Planning for Family Businesses: A CA's Perspective",
    excerpt: "How HUF structuring, wills, and trusts can protect generational wealth from unnecessary tax erosion.",
    date: "25 Feb 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function BlogSection() {
  const headRef = useScrollReveal();
  const cardsRef = useScrollReveal();

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headRef} className="reveal mb-16 flex items-end justify-between">
          <div>
            <div className="section-label mb-4">
              <span>Insights & Updates</span>
            </div>
            <h2
              className="font-serif text-headline"
              style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)" }}
            >
              Latest from <span className="italic-accent">Our Desk</span>
            </h2>
          </div>
          <Link
            href="/blogs"
            className="hidden md:inline-flex font-sans text-sm font-semibold text-navy-light hover:text-navy transition-colors items-center gap-1"
          >
            View All Insights →
          </Link>
        </div>

        <div ref={cardsRef} className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Link
              key={post.title}
              href="/blogs"
              className="bg-white rounded-2xl overflow-hidden card-base border border-black/5 group block"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="inline-block font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-navy-light bg-indigo-tint px-3 py-1.5 rounded-full mb-4">
                  {post.category}
                </div>
                <h3
                  className="font-serif text-headline leading-snug mb-3 group-hover:text-navy transition-colors"
                  style={{ fontSize: "1.2rem" }}
                >
                  {post.title}
                </h3>
                <p className="font-sans text-body text-sm leading-relaxed mb-5 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[11px] text-body">{post.date}</span>
                  <span className="font-sans text-[11px] text-body">{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
