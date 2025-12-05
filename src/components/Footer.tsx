import { MessageCircle, Instagram, Linkedin } from "lucide-react";
import { WHATSAPP, MSG_ATENDIMENTO, MSG_DEMO } from "@/lib/whatsapp";


const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold">
              <span className="text-gradient">AXIO</span>
            </span>
            <span className="text-muted-foreground text-sm">
              Automação Inteligente para Negócios
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
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

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Axio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
