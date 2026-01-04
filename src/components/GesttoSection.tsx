import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Bot, Calendar, BarChart, Sparkles, Zap, Shield, Users } from "lucide-react";

const GesttoSection = () => {
  return (
    <section id="gestto" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual/Mockup */}
          <div className="relative order-2 lg:order-1" data-aos="fade-right">
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 p-6 md:p-8 overflow-hidden">
              {/* Mockup placeholder - gradient background com elementos */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

              <div className="relative h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-gradient">Gestto</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    Plataforma completa de gestão inteligente
                  </p>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute top-4 right-4 bg-card/80 backdrop-blur border border-border/50 rounded-xl p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-medium">Sistema Online</span>
                </div>
              </div>
            </div>

            {/* Badge de lançamento */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse-glow">
              Em fase final 🚀
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Nosso Produto Principal</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Conheça o <span className="text-gradient">Gestto</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              A plataforma completa de gestão e automação inteligente
              que revoluciona a forma como negócios gerenciam agendamentos,
              atendimento e relacionamento com clientes.
            </p>

            <div className="space-y-4 mb-8">
              <FeatureItem
                icon={CheckCircle}
                text="Gestão completa de agendamentos com sincronização em tempo real"
              />
              <FeatureItem
                icon={Bot}
                text="IA conversacional integrada para atendimento 24/7"
              />
              <FeatureItem
                icon={Calendar}
                text="Lembretes automáticos e confirmações via WhatsApp"
              />
              <FeatureItem
                icon={BarChart}
                text="Dashboards completos e relatórios de performance"
              />
              <FeatureItem
                icon={Users}
                text="Gestão de clientes e histórico de atendimento"
              />
              <FeatureItem
                icon={Zap}
                text="Automações personalizadas para seu negócio"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                className="group"
                onClick={() => window.open('https://www.gestto.app.br', '_blank')}
              >
                Acessar Gestto
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => window.open('https://www.gestto.app.br', '_blank')}
              >
                Saiba mais
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-border/30">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium">100% Seguro</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Rápido</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Suporte Dedicado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon: Icon, text }: { icon: any; text: string }) => {
  return (
    <div className="flex items-start gap-3 group">
      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <p className="text-foreground/90 leading-relaxed">{text}</p>
    </div>
  );
};

export default GesttoSection;
