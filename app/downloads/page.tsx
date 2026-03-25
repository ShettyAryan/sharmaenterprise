import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const downloads = [
  { category: "Forms", name: "KYC Application Form", type: "PDF", size: "245 KB", date: "Jan 2025" },
  { category: "Forms", name: "SIP Registration Form", type: "PDF", size: "180 KB", date: "Jan 2025" },
  { category: "Forms", name: "Nominee Update Form", type: "PDF", size: "120 KB", date: "Dec 2024" },
  { category: "Guides", name: "Beginner's Guide to Mutual Funds", type: "PDF", size: "1.2 MB", date: "Feb 2025" },
  { category: "Guides", name: "Tax Saving Investments — FY 2024-25", type: "PDF", size: "890 KB", date: "Apr 2024" },
  { category: "Guides", name: "Understanding PMS vs Mutual Funds", type: "PDF", size: "760 KB", date: "Nov 2024" },
  { category: "Reports", name: "Annual Market Outlook 2025", type: "PDF", size: "2.4 MB", date: "Jan 2025" },
  { category: "Reports", name: "Q3 FY2024-25 Portfolio Review", type: "PDF", size: "1.8 MB", date: "Jan 2025" },
  { category: "Brochures", name: "Rishil Enterprise — Services Overview", type: "PDF", size: "3.1 MB", date: "Mar 2025" },
  { category: "Brochures", name: "Wealth Basket Product Brochure", type: "PDF", size: "1.5 MB", date: "Feb 2025" },
];

const tabs = ["All", "Forms", "Guides", "Reports", "Brochures"];

export const metadata = { title: "Downloads | Rishil Enterprise" };

export default function DownloadsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-offwhite min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="section-label mb-4"><span>Resource Centre</span></div>
            <h1 className="font-serif text-headline" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300 }}>
              Downloads & <span className="italic-accent">Resources</span>
            </h1>
            <p className="font-sans text-body text-base leading-relaxed mt-4 max-w-xl">
              Access forms, guides, market reports, and brochures from Rishil Enterprise.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
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

          {/* Downloads list */}
          <div className="space-y-3">
            {downloads.map((d) => (
              <div
                key={d.name}
                className="bg-white rounded-2xl px-7 py-5 flex items-center justify-between card-base border border-black/5"
              >
                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-tint flex items-center justify-center shrink-0">
                    <span className="font-sans text-[10px] font-bold text-navy-light uppercase">{d.type}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-headline text-base">{d.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-wide text-navy-light bg-indigo-tint px-2.5 py-1 rounded-full">{d.category}</span>
                      <span className="font-sans text-[11px] text-body">{d.size}</span>
                      <span className="font-sans text-[11px] text-body">{d.date}</span>
                    </div>
                  </div>
                </div>
                <button className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-navy hover:text-navy-light transition-colors flex items-center gap-2 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
