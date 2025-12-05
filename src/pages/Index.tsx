import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SubheadlineSection from "@/components/SubheadlineSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PillarsSection from "@/components/PillarsSection";
import ForWhoSection from "@/components/ForWhoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SubheadlineSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <PillarsSection />
      <ForWhoSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
