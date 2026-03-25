import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DownloadsClient from "./DownloadsClient";

const downloads = [
  { category: "Forms", name: "KYC Application Form", type: "PDF", size: "245 KB", date: "Jan 2025" },
  { category: "Forms", name: "SIP Registration Form", type: "PDF", size: "180 KB", date: "Jan 2025" },
  { category: "Forms", name: "Nominee Update Form", type: "PDF", size: "120 KB", date: "Dec 2024" },
  { category: "Guides", name: "Beginner's Guide to Mutual Funds", type: "PDF", size: "1.2 MB", date: "Feb 2025" },
  { category: "Guides", name: "Tax Saving Investments — FY 2024-25", type: "PDF", size: "890 KB", date: "Apr 2024" },
  { category: "Guides", name: "Understanding PMS vs Mutual Funds", type: "PDF", size: "760 KB", date: "Nov 2024" },
  { category: "Reports", name: "Annual Market Outlook 2025", type: "PDF", size: "2.4 MB", date: "Jan 2025" },
  { category: "Reports", name: "Q3 FY2024-25 Portfolio Review", type: "PDF", size: "1.8 MB", date: "Jan 2025" },
  { category: "Brochures", name: "Sharma Enterprise — Services Overview", type: "PDF", size: "3.1 MB", date: "Mar 2025" },
  { category: "Brochures", name: "Wealth Basket Product Brochure", type: "PDF", size: "1.5 MB", date: "Feb 2025" },
];

const tabs = ["All", "Forms", "Guides", "Reports", "Brochures"];

export const metadata = { title: "Downloads | Sharma Enterprise" };

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
              Access forms, guides, market reports, and brochures from Sharma Enterprise.
            </p>
          </div>

          <DownloadsClient downloads={downloads} tabs={tabs} />
        </div>
      </main>
      <Footer />
    </>
  );
}
