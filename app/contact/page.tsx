"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AlarmClock, Mail, MapPin, PhoneCall } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = "w-full px-5 py-4 rounded-xl border border-navy/10 bg-white font-sans text-sm text-headline placeholder-body/50 focus:outline-none focus:ring-2 focus:ring-navy/20 transition-all";

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <div className="section-label mb-4">
              <span>Get in Touch</span>
            </div>
            <h1
              className="font-serif text-headline leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300 }}
            >
              Let's Talk About Your{" "}
              <span className="italic-accent">Financial Goals</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Contact Info */}
            <div className="space-y-6">
              {/* Map placeholder */}
              <div className="rounded-3xl overflow-hidden h-64 bg-navy/5 border border-navy/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-3 text-navy">
                    <MapPin className="w-10 h-10" strokeWidth={1.75} />
                  </div>
                  <p className="font-sans text-sm text-body">Surat, Gujarat</p>
                </div>
              </div>

              {/* Info cards */}
              {[
                { icon: <MapPin className="w-8 h-8 text-navy" strokeWidth={1.75} />, label: "Office Address", value: "Ring Road, Vesu, Surat – 395 007, Gujarat, India" },
                { icon: <PhoneCall className="w-8 h-8 text-navy" strokeWidth={1.75} />, label: "Phone", value: "+91 98765 43210" },
                { icon: <Mail className="w-8 h-8 text-navy" strokeWidth={1.75} />, label: "Email", value: "info@sharmaenterprise.in" },
                { icon: <AlarmClock className="w-8 h-8 text-navy" strokeWidth={1.75} />, label: "Office Hours", value: "Mon – Sat: 9:30 AM – 6:30 PM IST" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-6 card-base flex items-start gap-5">
                  <div>{item.icon}</div>
                  <div>
                    <div className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-body mb-1">{item.label}</div>
                    <div className="font-sans text-sm text-headline">{item.value}</div>
                  </div>
                </div>
              ))}

              {/* Trust row */}
              <div className="flex flex-wrap gap-4 pt-2">
                {["CA-Led Practice", "15+ Years", "2000+ Clients"].map((t) => (
                  <div key={t} className="bg-indigo-tint rounded-full px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-wide text-navy">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-3xl p-10 border border-black/5 shadow-card">
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-body block mb-2">Full Name *</label>
                      <input name="name" required placeholder="Suresh Mehta" onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-body block mb-2">Phone *</label>
                      <input name="phone" required placeholder="+91 98765 43210" onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-body block mb-2">Email *</label>
                    <input type="email" name="email" required placeholder="suresh@example.com" onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-body block mb-2">Service of Interest</label>
                    <select name="service" onChange={handleChange} className={inputClass}>
                      <option value="">Select a service…</option>
                      <option>Investment Portfolio</option>
                      <option>Insurance Policies</option>
                      <option>Wealth Basket</option>
                      <option>Targeted Investment</option>
                      <option>Tax Optimisation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-body block mb-2">Your Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your financial goals…"
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button type="submit" className="btn-navy w-full justify-center">
                    Send Message →
                  </button>
                  <p className="font-sans text-[11px] text-body text-center">
                    We typically respond within one business day.
                  </p>
                </form>
              ) : (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-indigo-tint flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="font-serif text-headline text-2xl mb-3">Message Received</h3>
                  <p className="font-sans text-body text-sm leading-relaxed max-w-xs mx-auto">
                    Thank you for reaching out. Our team will get back to you within one business day.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
