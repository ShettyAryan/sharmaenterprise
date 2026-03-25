import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { BookOpenText, Handshake, Leaf, Lock, Scale, Target } from "lucide-react";

export const metadata = {
  title: "About Us | Sharma Enterprise",
};

const values = [
  {
    icon: <Scale className="w-10 h-10 text-navy" strokeWidth={1.75} />,
    title: "Integrity First",
    desc: "Every recommendation we make is driven by your interest, not ours. We are a fee-transparent advisory.",
  },
  {
    icon: <Target className="w-10 h-10 text-navy" strokeWidth={1.75} />,
    title: "Outcome Focused",
    desc: "We measure our success by your compliance readiness and clarity — not jargon, upsells, or avoidable follow-ups.",
  },
  {
    icon: <BookOpenText className="w-10 h-10 text-navy" strokeWidth={1.75} />,
    title: "Continuous Learning",
    desc: "Laws evolve. Our team stays current on Income Tax, GST, and compliance updates so your decisions remain audit-ready.",
  },
  {
    icon: <Handshake className="w-10 h-10 text-navy" strokeWidth={1.75} />,
    title: "Long-Term Partnerships",
    desc: "Our average client relationship spans over 7 years. We build for decades, not quarters.",
  },
  {
    icon: <Lock className="w-10 h-10 text-navy" strokeWidth={1.75} />,
    title: "Absolute Discretion",
    desc: "Your financial affairs are handled with the confidentiality of a private bank.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-navy" strokeWidth={1.75} />,
    title: "Responsible Investing",
    desc: "We advise with long-term thinking — focusing on compliant, sustainable financial decisions for families and businesses.",
  },
];

const milestones = [
  { year: "2008", event: "Founded in Surat by CA Rishil Shah" },
  { year: "2011", event: "Expanded into GST, audits, and compliance support for SMEs" },
  { year: "2014", event: "Built a structured documentation and review process" },
  { year: "2017", event: "Strengthened corporate compliance and advisory practice" },
  { year: "2020", event: "1000+ active client relationships across India" },
  { year: "2022", event: "Streamlined client workflows with checklists and timelines" },
  { year: "2024", event: "2000+ clients · Team growth · Faster turnaround SLAs" },
];

const team = [
  { name: "Rishil Shah", role: "Founder & Principal CA", initials: "RS" },
  { name: "Meera Patel", role: "Head of Investments", initials: "MP" },
  { name: "Kunal Joshi", role: "Tax & Compliance Lead", initials: "KJ" },
  { name: "Ananya Desai", role: "Client Relations Manager", initials: "AD" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-24 px-6 lg:px-8 bg-offwhite">
          <div className="max-w-7xl mx-auto">
            <div
              className="relative rounded-4xl overflow-hidden bg-navy py-24 px-10 md:px-20"
              style={{ boxShadow: "0 24px 80px rgba(13,31,92,0.18)" }}
            >
              <div className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative z-10 max-w-3xl">
                <div className="section-label mb-6">
                  <span className="text-white/50">Our Story</span>
                </div>
                <h1
                  className="font-serif text-white leading-tight mb-6"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300 }}
                >
                  Built on <span className="italic" style={{ color: "#b8c4ff" }}>Trust.</span>{" "}
                  Driven by <span className="italic" style={{ color: "#b8c4ff" }}>Purpose.</span>
                </h1>
                <p className="font-sans text-white/60 text-lg leading-relaxed max-w-xl">
                  Since 2008, Sharma Enterprise has supported families and businesses across Gujarat and beyond — combining CA rigour with practical, compliance-first advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-28 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div
                className="w-full aspect-[4/5] rounded-3xl overflow-hidden"
                style={{ border: "3px solid #C9A84C", padding: "6px", background: "#F8F7F4" }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-navy-deep flex items-center justify-center">
                  <span className="font-serif text-white/20 text-9xl font-light">RS</span>
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-indigo-tint border border-navy/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-navy font-bold text-2xl">15+</div>
                  <div className="font-sans text-body text-[9px] uppercase tracking-widest mt-1">Years</div>
                </div>
              </div>
            </div>

            <div>
              <div className="section-label mb-6">
                <span>Meet the Founder</span>
              </div>
              <h2
                className="font-serif text-headline leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}
              >
                CA Rishil Shah —{" "}
                <span className="italic-accent">CA-led Advisory</span>
              </h2>
              <div className="font-sans text-body text-base leading-relaxed space-y-5">
                <p>
                  A Fellow Chartered Accountant with over 15 years of experience across taxation, audits, and advisory, Rishil founded this firm with a singular belief: that every family and business deserves reliable, deadline-driven professional support.
                </p>
                <p>
                  His approach combines CA-grade rigour with practical execution — guiding clients through assessments, notices, reconciliations, statutory compliances, and year-end closures.
                </p>
                <p>
                  A member of the ICAI, he focuses on building processes that keep clients audit-ready and documentation-clean.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-5">
                <div className="gold-divider" />
                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-body font-semibold">
                  FCA · ICAI Member · Tax & Compliance
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-28 px-6 lg:px-8 bg-indigo-tint">
          <div className="max-w-7xl mx-auto">
            <div className="section-label mb-4">
              <span>Our Journey</span>
            </div>
            <h2
              className="font-serif text-headline mb-16"
              style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)" }}
            >
              15 Years of <span className="italic-accent">Milestones</span>
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-navy/10 hidden md:block" />

              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex items-start gap-8">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-navy/10 flex items-center justify-center z-10 relative">
                        <span className="font-sans text-[10px] font-bold text-navy">{m.year}</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 flex-1 border border-black/5 card-base">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-gold mb-2 block">{m.year}</span>
                      <p className="font-serif text-headline text-lg">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-28 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="section-label mb-4">
              <span>Our Values</span>
            </div>
            <h2
              className="font-serif text-headline mb-16"
              style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)" }}
            >
              What We <span className="italic-accent">Stand For</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="p-8 rounded-2xl border border-black/5 hover:bg-indigo-tint transition-colors group">
                  <div className="mb-5">{v.icon}</div>
                  <h3 className="font-serif text-headline text-xl mb-3 group-hover:text-navy transition-colors">{v.title}</h3>
                  <p className="font-sans text-body text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-28 px-6 lg:px-8 bg-offwhite">
          <div className="max-w-7xl mx-auto">
            <div className="section-label mb-4">
              <span>Our Team</span>
            </div>
            <h2
              className="font-serif text-headline mb-16"
              style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)" }}
            >
              The People Behind <span className="italic-accent">Your Wealth</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="bg-white rounded-2xl p-8 card-base text-center">
                  <div className="w-20 h-20 rounded-full bg-navy mx-auto mb-5 flex items-center justify-center">
                    <span className="font-serif text-white text-2xl font-semibold">{member.initials}</span>
                  </div>
                  <h3 className="font-serif text-headline text-xl mb-1">{member.name}</h3>
                  <p className="font-sans text-body text-sm">{member.role}</p>
                  <div className="mt-4 flex justify-center">
                    <a href="#" className="w-8 h-8 rounded-full bg-indigo-tint hover:bg-navy-light/20 flex items-center justify-center transition-colors">
                      <svg className="w-3.5 h-3.5 fill-navy" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
