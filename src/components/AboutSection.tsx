import { Lightbulb, Target, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Tecnologia de ponta aplicada a problemas reais do seu negócio",
  },
  {
    icon: Target,
    title: "Compromisso",
    description: "Prazos cumpridos e qualidade garantida em cada projeto",
  },
  {
    icon: TrendingUp,
    title: "Resultados",
    description: "Medimos nosso sucesso pelo crescimento do seu negócio",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-gradient">Axio</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Somos uma <span className="text-foreground font-medium">software house</span> focada
                em automação com inteligência artificial. Criamos soluções que
                transformam a forma como negócios operam.
              </p>
              <p>
                Especialistas em IA conversacional e integrações com WhatsApp,
                ajudamos empresas de todos os tamanhos a automatizar processos,
                reduzir custos operacionais e escalar atendimento.
              </p>
              <p>
                Baseados em Pernambuco, atendemos clientes em todo o Brasil com
                soluções personalizadas e suporte dedicado.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid gap-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="flex gap-4 p-5 rounded-xl bg-card/50 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
