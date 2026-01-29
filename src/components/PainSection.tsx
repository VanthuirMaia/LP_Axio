import { MessageSquare, Clock, AlertCircle, Repeat } from "lucide-react";

const painPoints = [
  {
    icon: Repeat,
    title: "Perguntas repetitivas",
    examples: ["Qual o valor?", "Onde fica?", "Aceita cartão?"],
  },
  {
    icon: Clock,
    title: "Tempo perdido",
    examples: ["Horário de funcionamento?", "Tem vaga?", "Abre domingo?"],
  },
  {
    icon: MessageSquare,
    title: "Clientes esperando",
    examples: ["Quanto custa a diária?", "Tem estacionamento?", "O que inclui?"],
  },
];

const PainSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <AlertCircle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">
              Você conhece esse cenário?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Cansado de responder as{" "}
            <span className="text-destructive">mesmas perguntas</span> todo dia?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enquanto você responde "qual o valor?" pela 50ª vez, está perdendo
            tempo que poderia usar para atender melhor ou fechar mais vendas.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {painPoints.map((pain) => {
            const Icon = pain.icon;
            return (
              <div
                key={pain.title}
                className="p-6 rounded-2xl bg-card/30 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-3">{pain.title}</h3>
                <div className="space-y-2">
                  {pain.examples.map((example) => (
                    <div
                      key={example}
                      className="inline-block mr-2 mb-2 px-3 py-1.5 rounded-lg bg-muted/30 text-sm text-muted-foreground"
                    >
                      "{example}"
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution teaser */}
        <div className="text-center">
          <p className="text-lg">
            <span className="text-muted-foreground">E se um </span>
            <span className="text-primary font-semibold">assistente com IA</span>
            <span className="text-muted-foreground">
              {" "}respondesse tudo isso por você, 24 horas por dia?
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
