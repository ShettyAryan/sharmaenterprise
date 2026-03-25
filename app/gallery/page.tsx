import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const images = [
  { src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800", caption: "Annual Client Appreciation Evening 2024", category: "Events", tall: true },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800", caption: "Our Surat Office", category: "Office" },
  { src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=800", caption: "Team Strategy Session", category: "Office", tall: true },
  { src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800", caption: "Professional Training & Certification — 2023", category: "Awards" },
  { src: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=800", caption: "Client Portfolio Review Meeting", category: "Client Meets", tall: true },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800", caption: "Tax & Compliance Seminar — Surat 2024", category: "Events" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800", caption: "Board of Advisors Meeting Q4 2024", category: "Office" },
  { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800", caption: "Best CA Firm Award — Gujarat 2023", category: "Awards", tall: true },
];

const tabs = ["All", "Events", "Office", "Client Meets", "Awards"];

export const metadata = { title: "Gallery | Sharma Enterprise" };

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-offwhite min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="section-label mb-4"><span>Our Moments</span></div>
            <h1 className="font-serif text-headline" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300 }}>
              Life at <span className="italic-accent">Sharma Enterprise</span>
            </h1>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {tabs.map((t) => (
              <button
                key={t}
                className={`font-sans text-[11px] font-semibold uppercase tracking-[0.14em] px-5 py-2.5 rounded-full border transition-colors ${
                  t === "All" ? "bg-navy text-white border-navy" : "bg-white text-body border-black/10 hover:border-navy/20"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {images.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-2xl overflow-hidden relative group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${img.tall ? "h-72" : "h-52"}`}
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-gold mb-2">{img.category}</div>
                    <p className="font-serif text-white text-base italic">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
