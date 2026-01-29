import { ArrowRight } from "lucide-react";
import { WHATSAPP, MSG_ATENDIMENTO } from "@/lib/whatsapp";

const HeroSection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${MSG_ATENDIMENTO}`;

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-in-up">
            <span className="text-sm font-medium text-muted-foreground">
              Software House & Automação com IA
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animate-delay-100">
            Automatize seu negócio com{" "}
            <span className="text-gradient">inteligência artificial</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            Criamos soluções personalizadas que transformam atendimento, gestão
            e processos em vantagem competitiva.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="#solucoes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Conhecer Soluções
              <ArrowRight size={18} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-medium px-8 py-4 rounded-xl hover:bg-secondary/80 transition-all border border-border"
            >
              Agendar Conversa
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
