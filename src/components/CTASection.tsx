import { MessageCircle } from "lucide-react";
import { WHATSAPP, MSG_ATENDIMENTO } from "@/lib/whatsapp";

const CTASection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${MSG_ATENDIMENTO}`;

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-card border border-primary/20 p-8 md:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Pronto para{" "}
              <span className="text-gradient">automatizar</span> seu negócio?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Converse com nossa equipe e descubra como podemos transformar sua
              operação com inteligência artificial.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-medium px-8 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar conversa no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
