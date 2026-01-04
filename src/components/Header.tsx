import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, Instagram } from "lucide-react";
import { WHATSAPP, MSG_ATENDIMENTO, MSG_DEMO } from "@/lib/whatsapp";


const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-card/50 backdrop-blur-sm border-b border-border/30 hidden lg:block">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center gap-6 text-muted-foreground">
              <a href="mailto:contato@axio.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3 h-3" />
                <span>contato@axio.com.br</span>
              </a>
              <a href="tel:+5587981531743" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-3 h-3" />
                <span>+55 (87) 98153-1743</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/axio.vm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.gestto.app.br"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Acessar Gestto →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-background/95 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                <span className="text-gradient">AXIO</span>
              </span>
              <span className="hidden md:block text-xs text-muted-foreground ml-2 border-l border-border/50 pl-2">
                Software House
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#gestto" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Gestto
              </a>
              <a href="#solucao" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Soluções
              </a>
              <a href="#cases" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Cases
              </a>
              <a href="#empresa" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Empresa
              </a>
            </nav>

            <Button
              variant="hero"
              size="sm"
              className="gap-2"
              onClick={() =>
                window.open(`https://wa.me/${WHATSAPP}?text=${MSG_ATENDIMENTO}`, "_blank")
              }
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Falar no WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
