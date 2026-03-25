export default function TrustStrip() {
  const badges = [
    "Chartered Accountants (India)",
    "Income Tax · ITR Filing",
    "GST Registration & Returns",
    "TDS · TCS Compliance",
    "Tax Audit & Statutory Audit",
    "ROC · MCA Compliance",
    "15+ Years of Trust",
    "2000+ Satisfied Clients",
    "Deadline-First Delivery",
  ];

  return (
    <div className="w-full overflow-hidden bg-white border-y border-black/5 py-5">
      <div className="flex items-center animate-marquee" style={{ width: "max-content" }}>
        {[...badges, ...badges].map((badge, i) => (
          <div key={i} className="flex items-center gap-6 mx-8 shrink-0">
            <span className="text-gold text-xs">◆</span>
            <span className="font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-body whitespace-nowrap">
              {badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
