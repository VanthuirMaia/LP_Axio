import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import GesttoSection from "@/components/GesttoSection";
import SubheadlineSection from "@/components/SubheadlineSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CasesSection from "@/components/CasesSection";
import PillarsSection from "@/components/PillarsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ForWhoSection from "@/components/ForWhoSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LogosSection />
      <GesttoSection />
      <SubheadlineSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <CasesSection />
      <PillarsSection />
      <TestimonialsSection />
      <AboutSection />
      <ForWhoSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
