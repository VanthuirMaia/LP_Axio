import { Calendar, Building2, Cog, ArrowRight, Check } from "lucide-react";
import { WHATSAPP, MSG_ATENDIMENTO } from "@/lib/whatsapp";

const solutions = [
  {
    icon: Calendar,
    title: "Gestto",
    subtitle: "Gestão Inteligente",
    description:
      "Sistema completo para agendamentos com IA que automatiza todo o atendimento do seu negócio.",
    features: [
      "Agendamento 24/7 via WhatsApp",
      "Lembretes automáticos",
      "Dashboard completo",
    ],
    target: "Para: Barbearias, Salões, Clínicas",
    cta: "Conhecer o Gestto",
    href: "https://gestto.app",
    external: true,
  },
  {
    icon: Building2,
    title: "Atendimento Hoteleiro",
    subtitle: "IA Conversacional",
    description:
      "Automatize o atendimento de hóspedes via WhatsApp com inteligência artificial que entende contexto.",
    features: [
      "Respostas inteligentes 24/7",
      "Auxílio em reservas",
      "Suporte pós-estadia",
    ],
    target: "Para: Hotéis, Pousadas, Hostels",
    cta: "Saber mais",
    message: "Olá! Tenho interesse na solução de atendimento para hotelaria.",
  },
  {
    icon: Cog,
    title: "Automações",
    subtitle: "Sob Medida",
    description:
      "Soluções personalizadas para automatizar qualquer processo. Do atendimento ao backoffice.",
    features: [
      "Integrações entre sistemas",
      "Workflows com n8n/IA",
      "Bots e assistentes personalizados",
    ],
    target: "Para: Qualquer segmento",
    cta: "Solicitar proposta",
    message: "Olá! Quero saber mais sobre automações personalizadas.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nossas <span className="text-gradient">Soluções</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta para transformar a operação do seu negócio
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const href = solution.external
              ? solution.href
              : `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  solution.message || MSG_ATENDIMENTO
                )}`;

            return (
              <div
                key={solution.title}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-primary mb-1">
                    {solution.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Target */}
                <p className="text-xs font-medium text-muted-foreground/70 mb-6">
                  {solution.target}
                </p>

                {/* CTA */}
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  {solution.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
