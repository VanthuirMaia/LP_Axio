import { 
  Bell, 
  CheckCircle, 
  Calendar, 
  UserPlus, 
  Clock, 
  Heart, 
  Workflow 
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Lembretes automáticos",
    description: "Personalizado conforme sua necessidade",
  },
  {
    icon: CheckCircle,
    title: "Confirmação de horário",
    description: "Pelo WhatsApp",
  },
  {
    icon: Calendar,
    title: "Reagendamento inteligente",
    description: "Sem perder o cliente",
  },
  {
    icon: UserPlus,
    title: "Captação automática",
    description: "De novos contatos",
  },
  {
    icon: Clock,
    title: "Agenda em tempo real",
    description: "Sempre organizada",
  },
  {
    icon: Heart,
    title: "Atendimento personalizado",
    description: "Para cada cliente",
  },
  {
    icon: Workflow,
    title: "Fluxos inteligentes",
    description: "Sob medida para você",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-20 md:py-28 relative section-glow">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm text-primary font-medium uppercase tracking-wider mb-4">
              A Solução
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Um sistema que{" "}
              <span className="text-gradient">trabalha por você</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo isso sem mudar a forma como seu cliente conversa. A Axio se adapta a você, não o contrário.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:bg-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
