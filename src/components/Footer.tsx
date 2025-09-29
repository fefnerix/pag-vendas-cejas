import { Star, Shield, CreditCard, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import courseBook from "@/assets/brow-course-book-new.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-purple-text-foreground py-12 sm:py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Final CTA with ebook mockup */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                Transforma tus cejas y tu <span className="text-yellow-400">futuro financiero</span>
              </h3>
              <p className="text-purple-text/80 mb-6 max-w-md">
                Esta oferta NO es para siempre. Únete a miles de mujeres que ya están ganando con el Guia Cejas Express™
              </p>
              <Button 
                className="w-full md:w-auto text-lg font-bold px-8 py-4 h-auto rounded-xl bg-success hover:bg-success/90 text-purple-text border-0 shadow-lg"
              >
                QUIERO GANAR DINERO HOY
              </Button>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={courseBook} 
                alt="Guia Cejas Express™" 
                className="w-56 sm:w-64 h-auto drop-shadow-2xl"
              />
            </div>
          </div>
          
          {/* Trust indicators - Simplified */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-sm text-purple-text/80">Garantía 7 días</span>
            </div>
          </div>
          
          {/* Copyright and links */}
          <div className="text-center border-t border-white/10 pt-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-4 h-4 text-white" />
              <span className="font-semibold">Beauty Academy Online</span>
              <Star className="w-4 h-4 text-white" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-xs text-purple-text/60 mb-2">
              <span>© 2024 Beauty Academy</span>
              <a href="#" className="hover:text-purple-text transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-purple-text transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-purple-text transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
