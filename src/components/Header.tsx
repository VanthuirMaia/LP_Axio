import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { WHATSAPP, MSG_ATENDIMENTO, MSG_DEMO } from "@/lib/whatsapp";


const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-gradient">AXIO</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problema" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              O Problema
            </a>
            <a href="#solucao" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Solução
            </a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Como Funciona
            </a>
            <a href="#para-quem" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Para Quem
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
    </header>
  );
};

export default Header;
