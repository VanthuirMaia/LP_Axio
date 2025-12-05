import { Sparkles } from "lucide-react";

const SubheadlineSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Piloto Automático</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Sua marca merece operar no{" "}
            <span className="text-gradient">piloto automático</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A Axio cuida da parte repetitiva, para você focar no que realmente importa: 
            <span className="text-foreground font-medium"> atender, vender e crescer.</span>
          </p>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default SubheadlineSection;
