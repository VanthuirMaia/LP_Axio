import { AlertCircle, Clock, MessageSquareX, CalendarX } from "lucide-react";

const problems = [
  {
    icon: CalendarX,
    text: "Seu cliente esquece do horário.",
  },
  {
    icon: Clock,
    text: "Você perde tempo respondendo mensagens.",
  },
  {
    icon: MessageSquareX,
    text: "Agendamentos se perdem no meio da conversa.",
  },
  {
    icon: AlertCircle,
    text: "E a rotina vira um caos silencioso.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm text-primary font-medium uppercase tracking-wider mb-4">
              O Problema Real
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Reconhece esse cenário?
            </h2>
          </div>

          {/* Problem cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group card-elevated rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="text-lg md:text-xl font-medium pt-2">{problem.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="text-center">
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-2xl px-8 py-6">
              <p className="text-xl md:text-2xl font-display font-semibold">
                Não é falta de esforço.{" "}
                <span className="text-gradient">É falta de automação.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
