import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Depois da Axio, minha agenda nunca mais ficou vazia.",
    author: "Brandão Barbearia",
    role: "Pedro Brandão, Proprietário",
    rating: 5,
  },
  {
    quote: "A automação reduziu meu tempo no WhatsApp em 70%.",
    author: "Studio Nails Design",
    role: "Walquíria Brito, Empresária",
    rating: 5,
  },
    {
    quote: "Agora, meu controle de clientes é feito pela IA.",
    author: "Bernardo Barbearia",
    role: "Alex Bernardinho, Visagista",
    rating: 5,
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

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg font-medium mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="pt-6 border-t border-border/50">
                  <p className="font-display font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
