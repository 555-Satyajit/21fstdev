import HeroSection from "@/components/glassmorphism-trust-hero";
import AboutUsSection from "@/components/about-us-section";
import ServicesSection from "@/components/services-section";
import RoadmapSection from "@/components/roadmap-section";
import BannerSection from "@/components/banner-section";
import ContactSection from "@/components/contact-section";
import Footer4Col from "@/components/footer-column";
import { FloatingHeader } from "@/components/floating-header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingHeader />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <RoadmapSection />
      <ContactSection />
      <BannerSection />
      <Footer4Col />
    </main>
  );
}
