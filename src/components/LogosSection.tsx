import { Star } from "lucide-react";

const LogosSection = () => {
  const clients = [
    "Brandão Barbearia",
    "Studio Nails Design",
    "Bernardo Barbearia",
    "Clínica Vida",
    "Studio Zen",
    "Espaço Beleza"
  ];

  return (
    <section className="py-16 border-y border-border/50 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <Star className="w-5 h-5 text-primary fill-primary" />
            <Star className="w-5 h-5 text-primary fill-primary" />
            <Star className="w-5 h-5 text-primary fill-primary" />
            <Star className="w-5 h-5 text-primary fill-primary" />
          </div>
          <p className="text-sm text-muted-foreground">
            Confiado por negócios que valorizam automação e qualidade
          </p>
        </div>

        {/* Logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-xl hover:bg-card/50 transition-colors group"
            >
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-border/30">
          <StatItem value="98%" label="Satisfação" />
          <StatItem value="10x" label="Mais Produtivo" />
          <StatItem value="24/7" label="Disponibilidade" />
          <StatItem value="-70%" label="Redução de Faltas" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="text-center">
      <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
        {value}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default LogosSection;
