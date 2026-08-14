import AuditProgressBar from "@/components/site/AuditProgressBar";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import LeakMap from "@/components/site/LeakMap";
import GrowthPipeline from "@/components/site/GrowthPipeline";
import Findings from "@/components/site/Findings";
import CaseStudy from "@/components/site/CaseStudy";
import ProjectedImpact from "@/components/site/ProjectedImpact";
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
        <LeakMap />
        <GrowthPipeline />
        <Findings />
        <CaseStudy />
        <ProjectedImpact />
        <Team />
        <GlobalRoadmap />
        <Pricing />
        <AuditPanel />
      </main>
      <Footer />
    </div>
  );
}