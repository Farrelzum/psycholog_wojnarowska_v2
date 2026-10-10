import Hero from "@/components/layout/Hero";
import Localization from "@/components/layout/Localization";
import OffersSection from "@/components/layout/OffersSection";
import ProcessSteps from "@/components/layout/ProcessSteps";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProcessSteps />
      <OffersSection />
      <Localization />
    </main>
  );
}