import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LazyImage from "@/components/ui/lazy-image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import courseBook from "@/assets/brow-course-book-new.jpg";
import { useEffect, useState } from "react";
import { CheckCircle, Shield, Star, Users, Clock } from "lucide-react";
import TrustBadges from './TrustBadges';
import TestimonialCard from './TestimonialCard';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { elementRef } = useIntersectionObserver({
    threshold: 0.1,
    onIntersect: (entry) => entry.isIntersecting && setIsVisible(true),
  });

  return (
    <section ref={elementRef} className="relative min-h-screen bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 overflow-hidden">
      <div className="relative">
        {/* Enhanced hero content with fluid spacing */}
        <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Enhanced content section */}
            <div className="text-center lg:text-left space-y-8 order-2 lg:order-1 lg:col-span-7">
              {/* Trust badge */}
              <div className="flex justify-center lg:justify-start">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  Más de 80,000 alumnas satisfechas
                </Badge>
              </div>
              
              {/* Main headline with improved typography */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Transforma tus{" "}
                  <span className="text-accent bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                    cejas
                  </span>{" "}
                  en solo 7 días
                </h1>
                
                <p className="text-xl sm:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl">
                  El método paso a paso que han usado{" "}
                  <span className="text-accent font-bold">+80,000 alumnas</span>{" "}
                  — Sin experiencia previa necesaria
                </p>
              </div>
              
              {/* Social proof indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="font-medium">80,000+ estudiantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent fill-current" />
                  <span className="font-medium">4.9/5 estrellas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="font-medium">Resultados en 7 días</span>
                </div>
              </div>
              
              {/* Enhanced CTA section */}
              <div className="space-y-6">
                <Button 
                  size="lg" 
                  className="btn-primary min-h-[60px] w-full sm:w-auto text-xl px-12 py-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  ACCEDER AHORA POR $7 USD
                </Button>
                
                {/* Trust indicators with better spacing */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="font-medium">Acceso inmediato</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="font-medium">Garantía 7 días</span>
                  </div>
                </div>
                
                {/* Micro copy persuasivo */}
                <p className="text-white/70 text-sm max-w-md mx-auto lg:mx-0">
                  Más de 500 mujeres se unieron esta semana
                </p>
              </div>
            </div>

            {/* Enhanced product showcase with lazy loading */}
            <div className="relative flex justify-center order-1 lg:order-2 lg:col-span-5">
              <div className="relative group lazy-image-container">
                <LazyImage
                  src={courseBook}
                  alt="Curso de Brow Lamination - Guía completa para diseño de cejas profesional"
                  className="w-full max-w-80 sm:max-w-96 lg:max-w-[min(28rem,calc(100vw-4rem))] xl:max-w-[min(32rem,calc(100vw-4rem))] drop-shadow-2xl hover:scale-105 transition-all duration-500"
                  aspectRatio="3/4"
                  priority={true}
                />
                <div 
                  className="absolute -inset-6 bg-gradient-to-r from-accent/20 via-white/10 to-accent/20 rounded-3xl blur-3xl -z-10 animate-pulse" 
                  aria-hidden="true"
                />
                
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  ¡NUEVO!
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust indicators section */}
          <div className="mt-16 space-y-8">
            <TrustBadges 
              variant="compact" 
              theme="light"
              badges={['guarantee', 'students', 'rating', 'instant']}
            />
            
            {/* Featured testimonial */}
            <div className="max-w-2xl mx-auto">
              <TestimonialCard
                name="María González"
                location="Ciudad de México"
                rating={5}
                testimonial="En solo 2 semanas ya estaba ganando $500 USD mensuales. La guía es súper clara y fácil de seguir."
                result="Ganó $500 en su primer mes"
                verified={true}
                variant="featured"
                theme="light"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
