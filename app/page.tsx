import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { UserSelection } from "@/components/user-selection";
import { DeviceShowcase } from "@/components/device-showcase";
import { HowItWorks } from "@/components/how-it-works";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <UserSelection />
      <DeviceShowcase />
      <HowItWorks />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
