import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Clock, Shield, CheckCircle, Zap } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 800;
      setIsVisible(scrolled && !isMinimized);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMinimized]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-success via-success to-accent text-white shadow-2xl border-t-4 border-accent animate-slide-up">
      <div className="container mx-auto px-4 py-4 lg:py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Enhanced content section */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <Zap className="w-5 h-5 text-accent animate-pulse" />
              <p className="text-lg lg:text-xl font-black">
                GUÍA CEJAS EXPRESS™ - ¡OFERTA LIMITADA!
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-accent" />
                <span className="font-medium">Solo hoy $7 (después $27)</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-accent" />
                <span className="font-medium">Garantía 7 días</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA section */}
          <div className="flex items-center gap-3">
            <div className="text-center lg:text-right">
              <div className="text-2xl lg:text-3xl font-black text-accent mb-1">
                $7 USD
              </div>
              <div className="text-xs text-white/80">
                En lugar de $27
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-neutral-900 font-black text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 min-h-[60px] lg:min-h-[70px] border-2 border-white/20"
              onClick={() => {
                // Scroll to pricing section
                const pricingSection = document.querySelector('[aria-labelledby="pricing-heading"]');
                pricingSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              QUIERO EMPEZAR AHORA
            </Button>
            
            <button
              onClick={() => setIsMinimized(true)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Trust indicators bar - Simplified to avoid redundancy */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-white/80">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-accent" />
              <span>+80,000 alumnas exitosas</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-accent" />
              <span>98% de satisfacción</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
