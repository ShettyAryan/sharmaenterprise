import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import BlogsClient from "./BlogsClient";

const posts = [
  { category: "Tax Planning", title: "New Tax Regime vs Old Regime: Which is Better for You in FY 2024-25?", excerpt: "A detailed breakdown of both regimes with worked examples for salaried professionals and business owners.", date: "12 Mar 2025", readTime: "7 min", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop", featured: true },
  { category: "Mutual Funds", title: "Why SIP Remains the Most Reliable Path to Long-Term Wealth", excerpt: "Understanding rupee cost averaging and the compounding advantage of disciplined monthly investments.", date: "5 Mar 2025", readTime: "5 min", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop" },
  { category: "Estate Planning", title: "Succession Planning for Family Businesses: A CA's Perspective", excerpt: "How HUF structuring, wills, and trusts can protect generational wealth from unnecessary tax erosion.", date: "25 Feb 2025", readTime: "9 min", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
  { category: "Equity", title: "How to Evaluate a Stock Like a Fundamental Analyst", excerpt: "A step-by-step walkthrough of the financial ratios and qualitative factors we use at Sharma Enterprise.", date: "18 Feb 2025", readTime: "11 min", image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=800&auto=format&fit=crop" },
  { category: "Insurance", title: "Term Insurance vs ULIP: Settling the Debate Once and For All", excerpt: "Pure protection vs investment-linked insurance — a practical comparison with tax and documentation considerations.", date: "10 Feb 2025", readTime: "6 min", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" },
  { category: "PMS", title: "Is PMS Right for You? A Practical Guide", excerpt: "Portfolio Management Services can suit certain investors. Here’s a clear checklist of suitability, documentation, and common expectations.", date: "2 Feb 2025", readTime: "8 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
];

const categories = ["All", "Tax Planning", "Mutual Funds", "Equity", "Insurance", "Estate Planning", "PMS"];

export const metadata = { title: "Insights & Blogs | Sharma Enterprise" };

export default function BlogsPage() {
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

          <BlogsClient posts={posts} categories={categories} />
        </div>

        <div className="mt-20">
          <CTABanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
