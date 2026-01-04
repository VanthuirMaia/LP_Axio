import { Target, Shield, Zap, Award, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="empresa" className="py-24 md:py-32 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Quem é a <span className="text-gradient">AXIO</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Somos uma <span className="text-foreground font-semibold">software house</span> especializada
            em desenvolvimento de soluções inteligentes com IA e automação.
            Nossa missão é democratizar a tecnologia para negócios de todos os tamanhos,
            entregando ferramentas que realmente fazem a diferença.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <ValueCard
            icon={Target}
            title="Compromisso"
            description="Prazos cumpridos e qualidade garantida em cada projeto. Seu sucesso é nossa prioridade."
          />
          <ValueCard
            icon={Shield}
            title="Confiabilidade"
            description="Soluções seguras, escaláveis e com suporte dedicado. Estamos sempre ao seu lado."
          />
          <ValueCard
            icon={Zap}
            title="Inovação"
            description="Tecnologia de ponta aplicada a problemas reais. Transformamos ideias em resultados."
          />
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-card to-background border border-border/50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Capacitar negócios através da automação inteligente,
                  liberando tempo para o que realmente importa: crescimento e relacionamento com clientes.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">Nossa Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência em soluções de automação e IA no Brasil,
                  reconhecidos pela qualidade técnica e pelo impacto real nos negócios de nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 pt-16 border-t border-border/30">
          <h3 className="font-display text-3xl font-bold text-center mb-12">
            Por que escolher a AXIO?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReasonCard
              title="Experiência Comprovada"
              description="Anos de experiência desenvolvendo soluções que realmente funcionam"
            />
            <ReasonCard
              title="Suporte Dedicado"
              description="Equipe sempre disponível para ajudar quando você precisar"
            />
            <ReasonCard
              title="Tecnologia Moderna"
              description="Stack atualizada com as melhores práticas do mercado"
            />
            <ReasonCard
              title="Foco em Resultados"
              description="Medimos nosso sucesso pelo crescimento do seu negócio"
            />
            <ReasonCard
              title="Desenvolvimento Ágil"
              description="Entregas rápidas com qualidade e feedback contínuo"
            />
            <ReasonCard
              title="Preço Justo"
              description="Soluções acessíveis sem comprometer a qualidade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({
  icon: Icon,
  title,
  description
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-gradient-to-br from-card to-background border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 group">
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-display text-xl md:text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

const ReasonCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="flex gap-3 p-4 rounded-xl hover:bg-card/50 transition-colors">
      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default AboutSection;
