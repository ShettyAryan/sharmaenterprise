"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const services = [
  { name: "Investment Portfolio", icon: "📈", desc: "Diversified portfolios for long-term wealth" },
  { name: "Insurance Policies", icon: "🛡️", desc: "Comprehensive protection plans" },
  { name: "Wealth Basket", icon: "🧺", desc: "Curated sector-based baskets" },
  { name: "Targeted Investment", icon: "🎯", desc: "Goal-oriented financial planning" },
  { name: "Tax Optimisation", icon: "📋", desc: "Efficient tax structures for HNIs" },
];

const products = [
  { name: "Mutual Fund", icon: "💹" },
  { name: "Insurance", icon: "🛡️" },
  { name: "PMS", icon: "📊" },
  { name: "Direct Equity", icon: "📈" },
  { name: "Fixed Deposit", icon: "🏦" },
  { name: "Bonds", icon: "📜" },
  { name: "Smallcase", icon: "🧺" },
  { name: "LiquiLoans", icon: "💧" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-offwhite/95 backdrop-blur-xl shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center">
              <span className="font-serif text-white text-lg font-semibold leading-none">R</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-navy text-xl font-semibold tracking-tight">Rishil</span>
              <span className="font-sans text-body text-[10px] tracking-[0.2em] uppercase font-medium">Enterprise</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="nav-link font-sans text-sm font-medium text-navy border-b-2 border-gold pb-0.5">
              Home
            </Link>
            <Link href="/about" className="nav-link font-sans text-sm font-medium text-body hover:text-navy transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative dropdown-trigger group">
              <button className="nav-link font-sans text-sm font-medium text-body hover:text-navy transition-colors flex items-center gap-1">
                Services
                <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="dropdown-panel absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] bg-white rounded-2xl shadow-card border border-black/5 p-6">
                <div className="grid grid-cols-1 gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.name}
                      href={`/services/${s.name.toLowerCase().replace(/ /g, "-")}`}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-indigo-tint transition-colors group/item"
                    >
                      <span className="text-xl mt-0.5">{s.icon}</span>
                      <div>
                        <div className="font-serif text-navy text-base font-medium group-hover/item:text-navy-light transition-colors">{s.name}</div>
                        <div className="font-sans text-xs text-body mt-0.5">{s.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative dropdown-trigger group">
              <button className="nav-link font-sans text-sm font-medium text-body hover:text-navy transition-colors flex items-center gap-1">
                Products
                <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="dropdown-panel absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[380px] bg-white rounded-2xl shadow-card border border-black/5 p-5">
                <div className="grid grid-cols-2 gap-1">
                  {products.map((p) => (
                    <Link
                      key={p.name}
                      href={`/products/${p.name.toLowerCase().replace(/ /g, "-")}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-tint transition-colors"
                    >
                      <span className="text-base">{p.icon}</span>
                      <span className="font-sans text-sm font-medium text-body hover:text-navy transition-colors">{p.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {[
              { label: "Downloads", href: "/downloads" },
              { label: "Calculators", href: "/calculators" },
              { label: "Blogs", href: "/blogs" },
              { label: "Gallery", href: "/gallery" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="nav-link font-sans text-sm font-medium text-body hover:text-navy transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact" className="btn-navy text-sm">
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-indigo-tint transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-5 h-0.5 bg-navy mb-1.5 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-5 h-0.5 bg-navy mb-1.5 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-navy transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white rounded-2xl mb-4 p-6 border border-black/5 shadow-card">
            <div className="flex flex-col gap-4">
              {["Home", "About", "Services", "Products", "Downloads", "Calculators", "Blogs", "Gallery", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="font-sans text-sm font-medium text-body hover:text-navy transition-colors py-1 border-b border-black/5"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link href="/contact" className="btn-navy text-sm mt-2 text-center">
                Book a Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
