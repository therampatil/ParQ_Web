import { Navbar } from "@/components/navbar";
import { DriverHero } from "@/components/driver/hero";
import { PainSection } from "@/components/driver/pain-section";
import { SolutionSection } from "@/components/driver/solution-section";
import { HowItWorksDriver } from "@/components/driver/how-it-works";
import { AppExperience } from "@/components/driver/app-experience";
import { TrustSection } from "@/components/driver/trust-section";
import { FinalCTA } from "@/components/driver/final-cta";
import { Footer } from "@/components/footer";

export default function DriverPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <DriverHero />
      <PainSection />
      <SolutionSection />
      <HowItWorksDriver />
      <AppExperience />
      <TrustSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
