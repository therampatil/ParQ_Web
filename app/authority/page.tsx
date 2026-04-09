import { Navbar } from "@/components/navbar";
import { AuthorityHero } from "@/components/authority/hero";
import { HowItWorksOwner } from "@/components/authority/how-it-works";
import { TrustSafety } from "@/components/authority/trust-safety";
import { AppPreview } from "@/components/authority/app-preview";
import { WhyParQ } from "@/components/authority/why-parq";
import { FinalCTA } from "@/components/authority/final-cta";
import { Footer } from "@/components/footer";
import { EarningsSection } from "@/components/earnings-section";

export default function AuthorityPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AuthorityHero />
      <EarningsSection />
      <HowItWorksOwner />
      <TrustSafety />
      <AppPreview />
      <WhyParQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
