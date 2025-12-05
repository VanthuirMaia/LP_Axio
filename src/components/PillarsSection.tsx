import { Eye, Zap, Star } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    title: "Clareza",
    description: "Seu cliente recebe informações precisas, sem confusão. Cada mensagem é clara e direta.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Zap,
    title: "Automação",
    description: "Processos repetitivos executados de forma automática, 24 horas por dia, 7 dias por semana.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Star,
    title: "Experiência",
    description: "A experiência do seu cliente melhora na hora — e isso aumenta retornos, fidelização e faturamento.",
    color: "from-green-500/20 to-green-500/5",
  },
];

const PillarsSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm text-primary font-medium uppercase tracking-wider mb-4">
              Nossos Pilares
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Por que a Axio funciona{" "}
              <span className="text-gradient">tão bem?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Porque é construída sobre três pilares fundamentais
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-border/50 p-8 hover:border-primary/30 transition-all duration-500"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Number */}
                  <span className="font-display text-6xl font-bold text-muted/50 absolute -top-2 -right-2">
                    {index + 1}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
