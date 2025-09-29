import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Clock, Shield, CheckCircle, Zap } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 200; // Aparece mais cedo (200px em vez de 800px)
      setIsVisible(scrolled && !isMinimized);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMinimized]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-success via-success to-accent text-white shadow-2xl border-t-4 border-accent animate-slide-up">
      <div className="container mx-auto px-2 py-2 lg:py-3"> {/* Reduzido de px-4 py-4 lg:py-6 para px-2 py-2 lg:py-3 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2"> {/* Reduzido de gap-4 para gap-2 */}
          {/* Enhanced content section */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-1 mb-1"> {/* Reduzido gap-2 mb-2 para gap-1 mb-1 */}
              <Zap className="w-4 h-4 text-accent animate-pulse" /> {/* Reduzido de w-5 h-5 para w-4 h-4 */}
              <p className="text-base lg:text-lg font-black"> {/* Reduzido de text-lg lg:text-xl para text-base lg:text-lg */}
                GUÍA CEJAS EXPRESS™ - ¡OFERTA LIMITADA!
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-xs"> {/* Reduzido gap-4 text-sm para gap-2 text-xs */}
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-accent" />
                <span className="font-medium">Solo hoy $7 (después $287)</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-accent" />
                <span className="font-medium">Garantía 7 días</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA section */}
          <div className="flex items-center gap-2"> {/* Reduzido de gap-3 para gap-2 */}
            <div className="text-center lg:text-right">
              <div className="text-xl lg:text-2xl font-black text-accent mb-0"> {/* Reduzido de text-2xl lg:text-3xl e mb-1 para text-xl lg:text-2xl e mb-0 */}
                $7 USD
              </div>
              <div className="text-xs text-white/80">
                En lugar de $287
              </div>
            </div>
            
            <Button 
              size="sm" 
              className="bg-accent hover:bg-accent/90 text-neutral-900 font-black text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 min-h-[40px] lg:min-h-[50px] border-2 border-white/20"
              onClick={() => {
                // Scroll to pricing section
                const pricingSection = document.querySelector('[aria-labelledby="pricing-heading"]');
                pricingSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="hidden sm:inline">QUIERO GANAR MÁS DINERO</span>
              <span className="sm:hidden">EMPEZAR</span>
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
        <div className="mt-2 pt-2 border-t border-white/20"> {/* Reduzido de mt-4 pt-4 para mt-2 pt-2 */}
          <div className="flex flex-wrap justify-center gap-3 text-xs text-white/80"> {/* Reduzido de gap-6 para gap-3 */}
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
