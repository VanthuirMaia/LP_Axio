import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { WHATSAPP, MSG_ATENDIMENTO, MSG_DEMO } from "@/lib/whatsapp";


const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8">
            <Zap className="w-8 h-8 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Pronto para transformar{" "}
            <span className="text-gradient">sua rotina?</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Ative sua automação e veja os resultados na primeira semana.
          </p>

          {/* CTA */}
          <Button
            variant="hero"
            size="xl"
            className="group"
            onClick={() =>
              window.open(
                `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${MSG_ATENDIMENTO}`,
                "_blank"
              )
            }
          >
            Quero testar agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>


          {/* Trust text */}
          <p className="text-sm text-muted-foreground mt-8">
            Sem compromisso • Suporte dedicado • Resultados rápidos
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
