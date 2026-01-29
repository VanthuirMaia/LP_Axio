import { MessageCircle, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { WHATSAPP, MSG_ATENDIMENTO } from "@/lib/whatsapp";

const Footer = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${MSG_ATENDIMENTO}`;

  return (
    <footer className="border-t border-border/50 bg-card/20">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="AXIO" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground mt-3 mb-5">
              Software house especializada em automação com IA.
              Transformando negócios através da tecnologia.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/axio.vm/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://gestto.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Gestto
                </a>
              </li>
              <li>
                <a
                  href="#solucoes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Atendimento Hoteleiro
                </a>
              </li>
              <li>
                <a
                  href="#solucoes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Automações Personalizadas
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#solucoes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Soluções
                </a>
              </li>
              <li>
                <a
                  href="#resultados"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Resultados
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contato@axiodev.cloud"
                  className="hover:text-primary transition-colors"
                >
                  contato@axiodev.cloud
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="tel:+5587981531743"
                  className="hover:text-primary transition-colors"
                >
                  +55 (87) 98153-1743
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Pernambuco, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} AXIO Software House. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
