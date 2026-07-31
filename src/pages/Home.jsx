import AuditProgressBar from "@/components/site/AuditProgressBar";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import LeakMap from "@/components/site/LeakMap";
import GrowthPipeline from "@/components/site/GrowthPipeline";
import OutcomesLedger from "@/components/site/OutcomesLedger";
import CaseStudy from "@/components/site/CaseStudy";
import ProjectedImpact from "@/components/site/ProjectedImpact";
import Team from "@/components/site/Team";
import GlobalRoadmap from "@/components/site/GlobalRoadmap";
import Pricing from "@/components/site/Pricing";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";

const HERO_IMAGE = "https://media.base44.com/images/public/6a5cfef41c22f4e1cf3d1b0b/51cabe62f_generated_1df7a1f7.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AuditProgressBar />
      <Navbar />
      <main>
        <Hero heroImage={HERO_IMAGE} />
        <LeakMap />
        <GrowthPipeline />
        <OutcomesLedger />
        <CaseStudy />
        <ProjectedImpact />
        <Team />
        <GlobalRoadmap />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}