import { 
  Scissors, 
  Sparkles, 
  Stethoscope, 
  Store, 
  Briefcase, 
  Wrench,
  CheckCircle,
  User
} from "lucide-react";

const benefits = [
  "Organizar fluxo de atendimento",
  "Diminuir faltas",
  "Melhorar a experiência",
  "Aumentar conversões",
  "Automatizar tarefas repetitivas",
];

const segments = [
  { icon: Scissors, label: "Barbearias" },
  { icon: Sparkles, label: "Studios" },
  { icon: Sparkles, label: "Nails" },
  { icon: Stethoscope, label: "Clínicas" },
  { icon: Store, label: "Lojas" },
  { icon: Briefcase, label: "Consultorias" },
  { icon: Wrench, label: "Oficinas" },
  { icon: User, label: "Autônomos" },
];

const ForWhoSection = () => {
  return (
    <section id="para-quem" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm text-primary font-medium uppercase tracking-wider mb-4">
              Para Quem
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              A Axio foi criada para{" "}
              <span className="text-gradient">marcas em crescimento</span>
            </h2>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Benefits */}
            <div className="card-elevated rounded-3xl p-8 border border-border/50">
              <h3 className="font-display text-xl font-semibold mb-6">
                Negócios que precisam:
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Segments */}
              <div className="card-elevated rounded-3xl p-8 border border-border/50 h-full">
                <h3 className="font-display text-xl font-semibold mb-6">
                  Segmentos que atendemos:
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {segments.map((segment, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-card/50 backdrop-blur border border-border/50 rounded-xl p-4 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <segment.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">{segment.label}</span>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground mt-6 text-sm">
                  E qualquer operação que dependa de agenda e atendimento.
                </p>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
