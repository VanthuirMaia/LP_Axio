import { Quote, Star, TrendingUp } from "lucide-react";

const testimonials = [
  {
    quote: "Depois da Axio, minha agenda nunca mais ficou vazia. A redução de faltas foi impressionante e consegui aumentar meu faturamento significativamente.",
    author: "Brandão Barbearia",
    role: "Pedro Brandão, Proprietário",
    location: "Recife, PE",
    rating: 5,
    metric: "↑ 35% agendamentos",
  },
  {
    quote: "A automação reduziu meu tempo no WhatsApp em 70%. Agora posso focar no que realmente importa: atender bem minhas clientes.",
    author: "Studio Nails Design",
    role: "Walquíria Brito, Empresária",
    location: "São Paulo, SP",
    rating: 5,
    metric: "↓ 70% tempo no WhatsApp",
  },
  {
    quote: "Agora, meu controle de clientes é feito pela IA. O sistema entende meu negócio e mantém minha essência enquanto automatiza processos.",
    author: "Bernardo Barbearia",
    role: "Alex Bernardinho, Visagista",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    metric: "98% satisfação",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 relative section-glow">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm text-primary font-medium uppercase tracking-wider mb-4">
              Depoimentos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Quem usa,{" "}
              <span className="text-gradient">recomenda</span>
            </h2>
          </div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group card-elevated rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 relative"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Rating & Metric */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3 text-primary" />
                    <span className="text-xs font-semibold text-primary">{testimonial.metric}</span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-base font-medium mb-6 leading-relaxed text-foreground/90">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="pt-6 border-t border-border/50">
                  <p className="font-display font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
