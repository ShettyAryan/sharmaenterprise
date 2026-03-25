import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";

const posts = [
  { category: "Tax Planning", title: "New Tax Regime vs Old Regime: Which is Better for You in FY 2024-25?", excerpt: "A detailed breakdown of both regimes with worked examples for salaried professionals and business owners.", date: "12 Mar 2025", readTime: "7 min", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop", featured: true },
  { category: "Mutual Funds", title: "Why SIP Remains the Most Reliable Path to Long-Term Wealth", excerpt: "Understanding rupee cost averaging and the compounding advantage of disciplined monthly investments.", date: "5 Mar 2025", readTime: "5 min", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop" },
  { category: "Estate Planning", title: "Succession Planning for Family Businesses: A CA's Perspective", excerpt: "How HUF structuring, wills, and trusts can protect generational wealth from unnecessary tax erosion.", date: "25 Feb 2025", readTime: "9 min", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
  { category: "Equity", title: "How to Evaluate a Stock Like a Fundamental Analyst", excerpt: "A step-by-step walkthrough of the financial ratios and qualitative factors we use at Rishil Enterprise.", date: "18 Feb 2025", readTime: "11 min", image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=800&auto=format&fit=crop" },
  { category: "Insurance", title: "Term Insurance vs ULIP: Settling the Debate Once and For All", excerpt: "Pure protection vs investment-linked insurance — a frank comparison from a SEBI-registered advisor.", date: "10 Feb 2025", readTime: "6 min", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" },
  { category: "PMS", title: "Is PMS Right for You? A Guide for HNIs and Family Offices", excerpt: "Portfolio Management Services offer bespoke equity strategies. Here's what you need to know before investing.", date: "2 Feb 2025", readTime: "8 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
];

const categories = ["All", "Tax Planning", "Mutual Funds", "Equity", "Insurance", "Estate Planning", "PMS"];

export const metadata = { title: "Insights & Blogs | Rishil Enterprise" };

export default function BlogsPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-14">
            <div className="section-label mb-4"><span>Insights & Updates</span></div>
            <h1 className="font-serif text-headline" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300 }}>
              Insights from <span className="italic-accent">Our Desk</span>
            </h1>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                className={`font-sans text-[11px] font-semibold uppercase tracking-[0.14em] px-5 py-2.5 rounded-full border transition-colors ${
                  c === "All"
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-body border-black/10 hover:border-navy/30 hover:text-navy"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <div className="bg-white rounded-3xl overflow-hidden card-base mb-10 grid grid-cols-1 lg:grid-cols-2">
              <div className="overflow-hidden h-64 lg:h-auto">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="inline-block font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-navy-light bg-indigo-tint px-3 py-1.5 rounded-full mb-5 self-start">
                  Featured · {featured.category}
                </div>
                <h2 className="font-serif text-headline text-3xl leading-snug mb-4">{featured.title}</h2>
                <p className="font-sans text-body text-sm leading-relaxed mb-7">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-sans text-xs text-body">{featured.date}</span>
                    <span className="font-sans text-xs text-body mx-2">·</span>
                    <span className="font-sans text-xs text-body">{featured.readTime} read</span>
                  </div>
                  <a href="#" className="font-sans text-sm font-semibold text-navy-light hover:text-navy transition-colors">Read →</a>
                </div>
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div key={post.title} className="bg-white rounded-2xl overflow-hidden card-base group">
                <div className="overflow-hidden h-48">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <div className="inline-block font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-navy-light bg-indigo-tint px-3 py-1.5 rounded-full mb-4">{post.category}</div>
                  <h3 className="font-serif text-headline text-xl leading-snug mb-3 group-hover:text-navy transition-colors">{post.title}</h3>
                  <p className="font-sans text-body text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[11px] text-body">{post.date} · {post.readTime}</span>
                    <a href="#" className="font-sans text-xs font-semibold text-navy-light hover:text-navy transition-colors">Read →</a>
                  </div>
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
