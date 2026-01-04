import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Calendar, MessageCircle } from "lucide-react";
import { WHATSAPP, MSG_ATENDIMENTO, MSG_DEMO } from "@/lib/whatsapp";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Software House & Automação com IA</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Transforme seu negócio com{" "}
            <span className="text-gradient">automação inteligente</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Soluções sob medida em IA e automação que aumentam sua produtividade,
            reduzem custos operacionais e escalam seu atendimento sem comprometer a qualidade.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              variant="hero"
              size="xl"
              className="w-full sm:w-auto group"
              onClick={() =>
                window.open(
                  `https://wa.me/${WHATSAPP}?text=${MSG_ATENDIMENTO}`,
                  "_blank"
                )
              }
            >
              Conhecer nossas soluções
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="heroOutline"
              size="xl"
              className="w-full sm:w-auto"
              onClick={() =>
                window.open(
                  `https://wa.me/${WHATSAPP}?text=${MSG_DEMO}`,
                  "_blank"
                )
              }
            >
              Agendar demonstração
            </Button>

          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-center gap-3 bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">WhatsApp Integrado</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">Agenda Automática</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">IA Conversacional</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
