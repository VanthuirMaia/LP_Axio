import { TrendingDown, Zap, Clock, ThumbsUp, Quote } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    value: "70%",
    label: "Redução em no-shows",
  },
  {
    icon: Zap,
    value: "10x",
    label: "Mais produtividade",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Disponibilidade",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Satisfação",
  },
];

const testimonials = [
  {
    quote:
      "A automação do atendimento transformou nossa operação. Agora consigo focar no que realmente importa enquanto o sistema cuida das reservas.",
    author: "Ana Silva",
    role: "Proprietária de Pousada",
  },
  {
    quote:
      "Com o Gestto, reduzimos drasticamente as faltas. Os lembretes automáticos fazem toda diferença no dia a dia da barbearia.",
    author: "Carlos Santos",
    role: "Barbeiro",
  },
];

const ResultsSection = () => {
  return (
    <section id="resultados" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Resultados que <span className="text-gradient">falam</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Números reais de clientes que transformaram seus negócios
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="text-center p-6 rounded-2xl bg-card/30 border border-border/30"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {metric.value}
                </div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-6 lg:p-8 rounded-2xl bg-card/50 border border-border/50"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-lg text-foreground/90 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
