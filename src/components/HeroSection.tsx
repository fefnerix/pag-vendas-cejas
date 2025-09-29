import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LazyImage from "@/components/ui/lazy-image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import courseBook from "@/assets/brow-course-book-new.jpg";
import { useEffect, useState } from "react";
import { CheckCircle, Shield, Star, Users, Clock } from "lucide-react";
import TestimonialCard from './TestimonialCard';
import EbookMockup from './EbookMockup';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isVisible: intersectionVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    if (intersectionVisible) {
      setIsVisible(true);
    }
  }, [intersectionVisible]);

  return (
    <section 
      id="hero"
      ref={elementRef} 
      className="hero relative min-h-[100svh] bg-gradient-to-b from-pink-400 via-pink-500 to-pink-600 text-white overflow-hidden pt-20 sm:pt-24"
      style={{ paddingTop: 'calc(56px + env(safe-area-inset-top) + 1.5rem)' }}
    >
      
      <div className="relative mt-0">
        {/* Enhanced hero content with fluid spacing - mobile optimized */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Enhanced content section - mobile first */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1 lg:col-span-7">
              {/* Trust badge */}
              <div className="flex justify-center lg:justify-start">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  Más de 80.000 mujeres transformadas
                </Badge>
              </div>
              
              {/* Main headline with improved typography and mobile optimization */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight sm:leading-tight">
                  Aprende diseño de <span className="text-accent bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">cejas profesional</span> en casa y gana $200+ por semana
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl">
                  Sin inversión costosa, sin experiencia previa, solo con tu talento.{" "}
                  <span className="text-accent font-bold">Únete a más de 80.000 mujeres</span>{" "}
                  que ya transformaron sus vidas.
                </p>
              </div>
              
              {/* Social proof indicators - optimized for mobile */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span className="font-medium text-sm sm:text-base">80.000+ estudiantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-current" />
                  <span className="font-medium text-sm sm:text-base">4.9/5 estrellas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span className="font-medium text-sm sm:text-base">Resultados garantizados</span>
                </div>
              </div>

              {/* EbookMockup positioned between subheadline and CTA */}
              <div className="flex justify-center lg:justify-start">
                <EbookMockup />
              </div>
              
              {/* Enhanced CTA section */}
              <div className="space-y-4 sm:space-y-6">
                <Button 
                  id="cta"
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white border-0 min-h-[56px] sm:min-h-[60px] w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing-heading');
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  QUIERO GANAR MÁS DINERO
                </Button>
                
                {/* Trust indicators with better spacing - mobile optimized */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    <span className="font-medium">Acceso inmediato</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    <span className="font-medium">Garantía 7 días</span>
                  </div>
                </div>
                

              </div>
            </div>

              {/* Enhanced product showcase with lazy loading - mobile optimized */}
            <div className="relative flex justify-center order-1 lg:order-2 lg:col-span-5">
              <div className="relative group lazy-image-container">
                {/* Placeholder for future content */}
                
                <div 
                  className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-accent/20 via-white/10 to-accent/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl -z-10 animate-pulse" 
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          
          {/* Trust indicators section - simplified */}
          <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
