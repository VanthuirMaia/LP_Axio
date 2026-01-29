import { MessageSquare, FileText, Rocket } from "lucide-react";
import { WHATSAPP, MSG_ATENDIMENTO } from "@/lib/whatsapp";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Conversa",
    description:
      "Entendemos seu desafio, suas necessidades e objetivos. Sem compromisso.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Proposta",
    description:
      "Desenhamos a solução ideal para o seu caso, com escopo e investimento claros.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Implementação",
    description:
      "Entregamos a solução funcionando e acompanhamos os resultados.",
  },
];

const ProcessSection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${MSG_ATENDIMENTO}`;

  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Como <span className="text-gradient">transformamos</span> seu negócio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e transparente do início ao fim
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative text-center md:text-left"
              >
                {/* Connector line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                )}

                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <div className="text-sm font-medium text-primary mb-2">
                  Passo {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Iniciar conversa
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
