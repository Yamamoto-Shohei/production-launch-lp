import { HeroSection } from "@/components/sections/hero";
import { PainPointsSection } from "@/components/sections/pain-points";
import { FlowSection } from "@/components/sections/flow";
import { TechFlowSection } from "@/components/sections/tech-flow";
import { PricingSection } from "@/components/sections/pricing";
import { StrengthsSection } from "@/components/sections/strengths";
import { ProfileSection } from "@/components/sections/profile";
import { CtaSection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <FlowSection />
      <TechFlowSection />
      <PricingSection />
      <StrengthsSection />
      <ProfileSection />
      <CtaSection />
      <Footer />
    </>
  );
}
