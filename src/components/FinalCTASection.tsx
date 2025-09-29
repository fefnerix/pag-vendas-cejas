import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, Shield, Star, Zap, Users } from "lucide-react";
import courseBook from "@/assets/brow-course-book-new.jpg";
import TrustBadges from './TrustBadges';

const FinalCTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Enhanced content section */}
            <div className="order-2 lg:order-1">
              {/* Urgency badge */}
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Clock className="w-4 h-4 animate-pulse" />
                ¡Última Oportunidad!
              </div>
              
              <div className="mb-6">
                <h2 className="headline-section text-4xl lg:text-6xl text-purple-600 mb-4 leading-tight">
                  Transforma tus cejas y tu{" "}
                  <span className="text-accent font-black">futuro financiero</span>
                </h2>
                
                <div className="space-y-3 text-xl text-purple-200 leading-relaxed mb-6">
                  <p className="text-lg text-accent font-bold bg-accent/10 px-4 py-2 rounded-lg inline-block">
                    Esta oferta NO es para siempre.
                  </p>
                  <p>
                    Cuando el contador llegue a 0, la página se cierra y el precio sube.{" "}
                    <span className="font-bold text-accent">Ya pasó antes y muchas lloraron después.</span>
                  </p>
                  <p>
                    Únete a miles de mujeres que ya están ganando con el{" "}
                    <span className="font-bold text-accent">Guía Cejas Express™</span>.
                  </p>
                  <p className="text-2xl font-bold text-purple-600">
                    No dejes que esta oportunidad se escape.
                  </p>
                </div>
              </div>

              {/* Enhanced image section - MOVED BEFORE CTA */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-accent text-neutral-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce z-10">
                    ¡NUEVO!
                  </div>
                  
                  <img 
                    src={courseBook} 
                    alt="Guía Cejas Express™" 
                    className="w-full max-w-64 sm:max-w-72 lg:max-w-80 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                </div>
                
                {/* Social proof */}
                <div className="mt-4 space-y-2">
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-lg font-semibold text-purple-600">
                    "El mejor curso de cejas que he tomado"
                  </p>
                  <p className="text-sm text-purple-300">
                    - María González, México
                  </p>
                </div>
              </div>

              {/* Enhanced pricing card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-4xl lg:text-5xl font-black text-accent mb-2">
                      $7 USD
                    </div>
                    <div className="text-lg text-white/80 line-through">
                      Precio normal: $287
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-success mb-1">
                      Hoy $7 USD
                    </div>
                    <div className="text-sm text-white/70">
                      Solo por hoy
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Acceso inmediato</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Guía + Bonos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Grupo VIP</span>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA button */}
              <div className="space-y-4">
                <a href="https://pay.hotmart.com/B102079638B?checkoutMode=10&src=8" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-neutral-900 font-black text-xl lg:text-2xl px-12 py-8 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 min-h-[80px] border-2 border-white/20"
                  >
                    SÍ, QUIERO GANAR DINERO HOY
                  </Button>
                </a>
                
                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span>98% satisfacción</span>
                  </div>
                </div>
                
                {/* Trust badges */}
                <div className="mt-4">
                  <TrustBadges 
                    variant="compact" 
                    theme="dark"
                    badges={['guarantee', 'secure', 'instant', 'support']}
                  />
                </div>
                
                {/* Urgency message */}
                <div className="text-center p-4 bg-accent/10 rounded-xl border border-accent/20">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-accent animate-pulse" />
                    <span className="font-bold text-accent">¡ATENCIÓN!</span>
                  </div>
                  <p className="text-sm text-white/90">
                    Esta oferta especial termina pronto. No pierdas la oportunidad de cambiar tu vida por solo $7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
