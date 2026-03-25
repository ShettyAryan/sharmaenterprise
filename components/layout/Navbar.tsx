"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { products as catalogProducts, services as catalogServices } from "@/lib/catalog";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const desktopNavClass = (href: string) =>
    `nav-link font-sans text-sm font-medium transition-colors ${
      isActive(href)
        ? "text-navy border-b-2 border-gold pb-0.5"
        : "text-body hover:text-navy"
    }`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      const servicesTrigger = document.getElementById("services-dropdown-trigger");
      const productsTrigger = document.getElementById("products-dropdown-trigger");
      const servicesPanel = document.getElementById("services-dropdown-panel");
      const productsPanel = document.getElementById("products-dropdown-panel");

      const clickedServices =
        servicesTrigger?.contains(target) || servicesPanel?.contains(target);
      const clickedProducts =
        productsTrigger?.contains(target) || productsPanel?.contains(target);

      if (!clickedServices) setServicesOpen(false);
      if (!clickedProducts) setProductsOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
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
              <span className="font-serif text-white text-lg font-semibold leading-none">S</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-navy text-xl font-semibold tracking-tight">Sharma</span>
              <span className="font-sans text-body text-[10px] tracking-[0.2em] uppercase font-medium">Enterprise</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className={desktopNavClass("/")}>
              Home
            </Link>
            <Link href="/about" className={desktopNavClass("/about")}>
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className={`relative dropdown-trigger group ${servicesOpen ? "dropdown-open" : ""}`}
              id="services-dropdown-wrap"
            >
              <button
                id="services-dropdown-trigger"
                type="button"
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                className={`nav-link font-sans text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive("/services") ? "text-navy border-b-2 border-gold pb-0.5" : "text-body hover:text-navy"
                }`}
                onClick={() => {
                  setServicesOpen((v) => !v);
                  setProductsOpen(false);
                }}
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id="services-dropdown-panel"
                className="dropdown-panel absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] bg-white rounded-2xl shadow-card border border-black/5 p-6"
                role="menu"
              >
                <div className="grid grid-cols-1 gap-1">
                  {catalogServices.map((s) => {
                    const Icon = s.Icon;
                    return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-indigo-tint transition-colors group/item"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="inline-flex items-center mt-0.5">
                        <Icon className="w-5 h-5 text-navy" strokeWidth={1.75} />
                      </span>
                      <div>
                        <div className="font-serif text-navy text-base font-medium group-hover/item:text-navy-light transition-colors">{s.title}</div>
                        <div className="font-sans text-xs text-body mt-0.5">{s.description}</div>
                      </div>
                    </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div
              className={`relative dropdown-trigger group ${productsOpen ? "dropdown-open" : ""}`}
            >
              <button
                id="products-dropdown-trigger"
                type="button"
                aria-haspopup="menu"
                aria-expanded={productsOpen}
                className={`nav-link font-sans text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive("/products") ? "text-navy border-b-2 border-gold pb-0.5" : "text-body hover:text-navy"
                }`}
                onClick={() => {
                  setProductsOpen((v) => !v);
                  setServicesOpen(false);
                }}
              >
                Products
                <svg
                  className={`w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180 ${productsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id="products-dropdown-panel"
                className="dropdown-panel absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[380px] bg-white rounded-2xl shadow-card border border-black/5 p-5"
                role="menu"
              >
                <div className="grid grid-cols-2 gap-1">
                  {catalogProducts.map((p) => {
                    const Icon = p.Icon;
                    return (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-tint transition-colors"
                      onClick={() => setProductsOpen(false)}
                    >
                      <span className="inline-flex items-center">
                        <Icon className="w-5 h-5 text-navy" strokeWidth={1.75} />
                      </span>
                      <span className="font-sans text-sm font-medium text-body hover:text-navy transition-colors">{p.name}</span>
                    </Link>
                    );
                  })}
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
                className={desktopNavClass(item.href)}
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
