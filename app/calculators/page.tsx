"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const months = years * 12;
  const r = rate / 100 / 12;
  const fv = monthly * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
  const invested = monthly * months;
  const gains = fv - invested;

  const fmt = (n: number) =>
    n >= 10000000
      ? `₹${(n / 10000000).toFixed(2)} Cr`
      : n >= 100000
      ? `₹${(n / 100000).toFixed(1)} L`
      : `₹${Math.round(n).toLocaleString("en-IN")}`;

  return (
    <div className="space-y-6">
      {[
        { label: "Monthly SIP (₹)", value: monthly, setter: setMonthly, min: 500, max: 100000, step: 500 },
        { label: "Expected Return (% p.a.)", value: rate, setter: setRate, min: 1, max: 30, step: 0.5 },
        { label: "Time Period (Years)", value: years, setter: setYears, min: 1, max: 40, step: 1 },
      ].map((s) => (
        <div key={s.label}>
          <div className="flex justify-between mb-2">
            <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-body">{s.label}</label>
            <span className="font-serif text-navy font-medium">{s.label.includes("₹") ? `₹${s.value.toLocaleString("en-IN")}` : s.label.includes("%") ? `${s.value}%` : `${s.value} yrs`}</span>
          </div>
          <input type="range" min={s.min} max={s.max} step={s.step} value={s.value}
            onChange={(e) => s.setter(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
            style={{ background: `linear-gradient(to right, #0D1F5C ${((s.value - s.min) / (s.max - s.min)) * 100}%, #EEF2FF ${((s.value - s.min) / (s.max - s.min)) * 100}%)` }}
          />
        </div>
      ))}

      <div className="bg-indigo-tint rounded-2xl p-6 mt-4 grid grid-cols-3 gap-4">
        {[
          { label: "Invested", value: fmt(invested) },
          { label: "Est. Returns", value: fmt(gains) },
          { label: "Total Value", value: fmt(fv) },
        ].map((r) => (
          <div key={r.label} className="text-center">
            <div className="font-serif text-navy font-semibold text-xl">{r.value}</div>
            <div className="font-sans text-[10px] uppercase tracking-widest text-body mt-1">{r.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FDCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(3);

  const maturity = principal * Math.pow(1 + rate / 100, years);
  const interest = maturity - principal;

  const fmt = (n: number) => n >= 100000 ? `₹${(n / 100000).toFixed(2)} L` : `₹${Math.round(n).toLocaleString("en-IN")}`;

  return (
    <div className="space-y-6">
      {[
        { label: "Principal Amount (₹)", value: principal, setter: setPrincipal, min: 1000, max: 10000000, step: 1000 },
        { label: "Interest Rate (% p.a.)", value: rate, setter: setRate, min: 1, max: 15, step: 0.25 },
        { label: "Tenure (Years)", value: years, setter: setYears, min: 1, max: 20, step: 1 },
      ].map((s) => (
        <div key={s.label}>
          <div className="flex justify-between mb-2">
            <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-body">{s.label}</label>
            <span className="font-serif text-navy font-medium">{s.label.includes("₹") ? `₹${s.value.toLocaleString("en-IN")}` : s.label.includes("%") ? `${s.value}%` : `${s.value} yrs`}</span>
          </div>
          <input type="range" min={s.min} max={s.max} step={s.step} value={s.value}
            onChange={(e) => s.setter(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
            style={{ background: `linear-gradient(to right, #0D1F5C ${((s.value - s.min) / (s.max - s.min)) * 100}%, #EEF2FF ${((s.value - s.min) / (s.max - s.min)) * 100}%)` }}
          />
        </div>
      ))}
      <div className="bg-indigo-tint rounded-2xl p-6 grid grid-cols-2 gap-4">
        {[{ label: "Interest Earned", value: fmt(interest) }, { label: "Maturity Value", value: fmt(maturity) }].map((r) => (
          <div key={r.label} className="text-center">
            <div className="font-serif text-navy font-semibold text-2xl">{r.value}</div>
            <div className="font-sans text-[10px] uppercase tracking-widest text-body mt-1">{r.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const calculators = [
  { id: "sip", icon: "💹", name: "SIP Calculator", desc: "Estimate your mutual fund SIP maturity value", component: <SIPCalculator /> },
  { id: "fd", icon: "🏦", name: "FD Calculator", desc: "Calculate fixed deposit maturity amount", component: <FDCalculator /> },
];

export default function CalculatorsPage() {
  const [active, setActive] = useState("sip");

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-offwhite min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="section-label mb-4"><span>Financial Calculators</span></div>
            <h1 className="font-serif text-headline" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300 }}>
              Plan with <span className="italic-accent">Precision</span>
            </h1>
            <p className="font-sans text-body text-base leading-relaxed mt-4 max-w-xl">
              Use our interactive calculators to model your financial scenarios and make informed investment decisions.
            </p>
          </div>

          {/* Calculator tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {calculators.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl border font-sans text-sm font-medium transition-all ${
                  active === c.id
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-body border-black/10 hover:border-navy/20"
                }`}
              >
                <span className="text-xl">{c.icon}</span>
                {c.name}
              </button>
            ))}
          </div>

          {/* Active calculator */}
          {calculators.map((c) =>
            active === c.id ? (
              <div key={c.id} className="bg-white rounded-3xl p-10 border border-black/5 shadow-card max-w-2xl">
                <div className="mb-8">
                  <h2 className="font-serif text-headline text-2xl mb-2">{c.name}</h2>
                  <p className="font-sans text-body text-sm">{c.desc}</p>
                </div>
                {c.component}
              </div>
            ) : null
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
