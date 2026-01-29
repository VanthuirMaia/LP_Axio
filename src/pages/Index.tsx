import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PainSection />
      <SolutionsSection />
      <ProcessSection />
      <ResultsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
