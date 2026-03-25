import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WhySection from "@/components/sections/WhySection";
import ApproachSection from "@/components/sections/ApproachSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import CTABanner from "@/components/sections/CTABanner";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <WhySection />
        <ApproachSection />
        <TestimonialsSection />
        <BlogSection />
        <CTABanner />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
