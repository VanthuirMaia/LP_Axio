import { MessageCircle, Bot, Calendar, Bell, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP, MSG_ATENDIMENTO, MSG_DEMO } from "@/lib/whatsapp";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Cliente envia mensagem",
    description: "Seu cliente manda uma mensagem no WhatsApp como sempre fez.",
  },
  {
    icon: Bot,
    number: "02",
    title: "Axio entende e responde",
    description: "A IA entende a intenção e responde de forma natural e personalizada.",
  },
  {
    icon: Calendar,
    number: "03",
    title: "Agenda sincroniza",
    description: "O agendamento é registrado automaticamente na sua agenda.",
  },
  {
    icon: Bell,
    number: "04",
    title: "Lembretes são enviados",
    description: "Lembretes automáticos sem você tocar no celular.",
  },
  {
    icon: CheckCircle,
    number: "05",
    title: "Rotina organizada",
    description: "Sua rotina fica leve, organizada e previsível.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm text-primary font-medium uppercase tracking-wider mb-4">
              Como Funciona
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Na prática, é{" "}
              <span className="text-gradient">muito simples</span>
            </h2>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block" />

            <div className="space-y-6 md:space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step card */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`card-elevated rounded-2xl p-6 border border-border/50 inline-block ${
                      index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                    } max-w-md`}>
                      <div className={`flex items-start gap-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs text-primary font-bold">{step.number}</span>
                          <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-effect hidden sm:block" style={{ top: '50%', transform: 'translate(-50%, -50%)' }} />

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Demonstração ao vivo disponível via WhatsApp
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() =>
                window.open(
                  `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${MSG_DEMO}`,
                  "_blank"
                )
              }
              className="gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Ver demonstração ao vivo
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
