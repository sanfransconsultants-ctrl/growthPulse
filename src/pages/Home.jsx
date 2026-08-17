import AuditProgressBar from "@/components/site/AuditProgressBar";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import VisibilityScore from "@/components/site/VisibilityScore";
import LeakMap from "@/components/site/LeakMap";
import GrowthPipeline from "@/components/site/GrowthPipeline";
import Findings from "@/components/site/Findings";
import AILeadAgent from "@/components/site/AILeadAgent";
import CaseStudy from "@/components/site/CaseStudy";
import ProjectedImpact from "@/components/site/ProjectedImpact";
import Reviews from "@/components/site/Reviews";
import Team from "@/components/site/Team";
import GlobalRoadmap from "@/components/site/GlobalRoadmap";
import Pricing from "@/components/site/Pricing";
import AuditPanel from "@/components/site/AuditPanel";
import Footer from "@/components/site/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AuditProgressBar />
      <Navbar />
      <main>
        <Hero />
        <VisibilityScore />
        <LeakMap />
        <GrowthPipeline />
        <Findings />
        <AILeadAgent />
        <CaseStudy />
        <ProjectedImpact />
        <Reviews />
        <Team />
        <GlobalRoadmap />
        <Pricing />
        <AuditPanel />
      </main>
      <Footer />
    </div>
  );
}