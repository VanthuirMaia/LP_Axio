import { MessageCircle, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { WHATSAPP, MSG_ATENDIMENTO, MSG_DEMO } from "@/lib/whatsapp";


const Footer = () => {
  return (
    <footer className="bg-card/20 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl font-bold">
                <span className="text-gradient">AXIO</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Software house especializada em automação inteligente e soluções com IA.
              Transformando negócios através da tecnologia.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${MSG_ATENDIMENTO}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/axio.vm/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-display font-semibold mb-4">Produtos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://www.gestto.app.br" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  Gestto - Gestão Inteligente
                </a>
              </li>
              <li>
                <a href="#solucao" className="text-muted-foreground hover:text-primary transition-colors">
                  Automação WhatsApp
                </a>
              </li>
              <li>
                <a href="#solucao" className="text-muted-foreground hover:text-primary transition-colors">
                  IA Conversacional
                </a>
              </li>
              <li>
                <a href="#solucao" className="text-muted-foreground hover:text-primary transition-colors">
                  Agenda Inteligente
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#empresa" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#cases" className="text-muted-foreground hover:text-primary transition-colors">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="#para-quem" className="text-muted-foreground hover:text-primary transition-colors">
                  Para quem é
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${WHATSAPP}?text=${MSG_ATENDIMENTO}`} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:contato@axio.com.br" className="hover:text-primary transition-colors">
                  contato@axio.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="tel:+5587981531743" className="hover:text-primary transition-colors">
                  +55 (87) 98153-1743
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Pernambuco, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © 2025 AXIO Software House. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
