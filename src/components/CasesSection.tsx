import { TrendingDown, TrendingUp, Clock, Scissors, Sparkles } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      client: "Brandão Barbearia",
      industry: "Beleza e Estética",
      location: "Recife, PE",
      icon: Scissors,
      challenge: "Alto índice de faltas (45%) e agenda desorganizada causavam prejuízo mensal significativo",
      solution: "Implementação do sistema AXIO com lembretes automáticos, confirmação de presença e reagendamento inteligente via WhatsApp",
      results: [
        { metric: "↓ 70%", label: "Redução de faltas", type: "success" },
        { metric: "↑ 35%", label: "Aumento em agendamentos", type: "success" },
        { metric: "4h/dia", label: "Tempo economizado", type: "info" }
      ],
      testimonial: "O AXIO revolucionou minha barbearia. Antes eu perdia clientes por desorganização, hoje minha agenda está sempre cheia e otimizada.",
      author: "Pedro Brandão"
    },
    {
      client: "Studio Nails Design",
      industry: "Estética e Beleza",
      location: "São Paulo, SP",
      icon: Sparkles,
      challenge: "Dificuldade em gerenciar múltiplos serviços e profissionais, resultando em conflitos de horário e clientes insatisfeitos",
      solution: "Automação completa do agendamento com gestão de equipe, serviços personalizados e integração WhatsApp Business",
      results: [
        { metric: "↑ 50%", label: "Aumento na capacidade", type: "success" },
        { metric: "98%", label: "Satisfação do cliente", type: "success" },
        { metric: "↓ 60%", label: "Redução de conflitos", type: "success" }
      ],
      testimonial: "Consegui escalar meu negócio sem perder qualidade. O sistema gerencia tudo automaticamente.",
      author: "Walquíria Brito"
    },
    {
      client: "Bernardo Barbearia",
      industry: "Barbearia Premium",
      location: "Rio de Janeiro, RJ",
      icon: Scissors,
      challenge: "Crescimento rápido exigiu profissionalização do atendimento sem perder o toque pessoal",
      solution: "IA conversacional treinada para manter o tom da marca, com automações que preservam a experiência premium",
      results: [
        { metric: "↑ 85%", label: "Crescimento em 6 meses", type: "success" },
        { metric: "24/7", label: "Atendimento disponível", type: "info" },
        { metric: "5★", label: "Avaliação média", type: "success" }
      ],
      testimonial: "Mantive a essência da minha barbearia enquanto crescia. O AXIO entende meu negócio.",
      author: "Alex Bernardinho"
    }
  ];

  return (
    <section id="cases" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Resultados Reais</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Cases de <span className="text-gradient">Sucesso</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Veja como negócios como o seu transformaram seus resultados com nossas soluções
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((caseItem, index) => (
            <CaseCard key={index} {...caseItem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseCard = ({
  client,
  industry,
  location,
  icon: Icon,
  challenge,
  solution,
  results,
  testimonial,
  author,
  index
}: {
  client: string;
  industry: string;
  location: string;
  icon: any;
  challenge: string;
  solution: string;
  results: Array<{ metric: string; label: string; type: string }>;
  testimonial: string;
  author: string;
  index: number;
}) => {
  return (
    <div className="bg-gradient-to-br from-card to-background border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Client Info */}
        <div className="lg:col-span-1">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-1">{client}</h3>
              <p className="text-sm text-muted-foreground">{industry}</p>
              <p className="text-xs text-muted-foreground/70 mt-1">{location}</p>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-3">
            {results.map((result, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                <span className="text-xs text-muted-foreground">{result.label}</span>
                <span className={`font-display text-lg font-bold ${
                  result.type === 'success' ? 'text-primary' : 'text-foreground'
                }`}>
                  {result.metric}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary mb-2">
              Desafio
            </h4>
            <p className="text-muted-foreground leading-relaxed">{challenge}</p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary mb-2">
              Solução
            </h4>
            <p className="text-muted-foreground leading-relaxed">{solution}</p>
          </div>

          <div className="pt-6 border-t border-border/30">
            <blockquote className="relative">
              <div className="absolute -top-2 -left-2 text-6xl text-primary/20 font-serif">"</div>
              <p className="text-foreground/90 italic leading-relaxed pl-6">
                {testimonial}
              </p>
              <footer className="mt-4 pl-6">
                <cite className="not-italic text-sm font-medium text-muted-foreground">
                  — {author}, {client}
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesSection;
