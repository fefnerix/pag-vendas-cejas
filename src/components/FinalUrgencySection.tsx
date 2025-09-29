import { Button } from "@/components/ui/button";
import { Clock, Shield, Zap, DollarSign, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";
import TrustBadges from './TrustBadges';
import TestimonialCard from './TestimonialCard';

const FinalUrgencySection = () => {
  const [minutes, setMinutes] = useState(9);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        // Reset to 9 minutes when it reaches zero
        setMinutes(9);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <section className="py-fluid-xl bg-gradient-to-br from-destructive via-destructive to-destructive/90 text-purple-text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-fluid-lg">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-fluid-md shadow-lg animate-pulse">
              <Clock className="w-12 h-12 text-purple-text" />
            </div>
            <h2 className="text-fluid-3xl font-extrabold text-purple-text mb-fluid-sm">
              <AlertTriangle className="w-8 h-8 inline-block mr-2 text-white" />
              <span className="text-white">¡ÚLTIMA OPORTUNIDAD!</span>
              <AlertTriangle className="w-8 h-8 inline-block ml-2 text-white" />
            </h2>
            <p className="text-fluid-xl font-bold text-purple-text">
              Solo hoy: Esta oferta desaparece en
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center items-center my-fluid-md">
              <div className="bg-white text-neutral-900 rounded-xl px-fluid-md py-fluid-sm font-mono text-fluid-3xl font-extrabold tracking-wider shadow-lg">
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Final offer details */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-fluid-lg mb-fluid-lg border-2 border-white/30 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-md mb-fluid-md">
              <div className="flex items-center gap-4 bg-white/10 p-fluid-sm rounded-xl">
                <DollarSign className="w-10 h-10 text-white" />
                <div className="text-left">
                  <p className="text-fluid-sm text-purple-text/80 line-through">Precio normal: $27 USD</p>
                  <p className="text-fluid-2xl font-extrabold text-white">¡Sólo $7 USD!</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/10 p-fluid-sm rounded-xl">
                <Zap className="w-10 h-10 text-white" />
                <div className="text-left">
                  <p className="text-fluid-base font-bold text-purple-text">Acceso inmediato</p>
                  <p className="text-fluid-sm text-purple-text/80">y vitalicio</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/10 p-fluid-sm rounded-xl">
                <Shield className="w-10 h-10 text-white" />
                <div className="text-left">
                  <p className="text-fluid-base font-bold text-purple-text">Garantía de 7 días</p>
                  <p className="text-fluid-sm text-purple-text/80">100% satisfacción</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/10 p-fluid-sm rounded-xl">
                <Clock className="w-10 h-10 text-white" />
                <div className="text-left">
                  <p className="text-fluid-base font-bold text-purple-text">Oferta limitada</p>
                  <p className="text-fluid-sm text-purple-text/80">por tiempo limitado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="btn-urgent w-full text-2xl lg:text-3xl px-12 py-10 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 min-h-[100px] border-2 border-white/20"
            >
              ¡SÍ, QUIERO APROVECHAR ESTA OFERTA AHORA!
            </Button>
            
            {/* Trust badges */}
            <div className="mt-6">
              <TrustBadges 
                variant="default" 
                theme="dark"
                badges={['guarantee', 'students', 'rating', 'certified']}
              />
            </div>
            
            {/* Trust indicators - Simplified to avoid redundancy */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-white" />
                <span>Garantía 7 días</span>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="mt-8">
              <TestimonialCard
                name="Ana Martínez"
                location="Colombia"
                avatar="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                rating={5}
                testimonial="Increíble transformación en solo una semana. Mis cejas lucen perfectas y naturales."
                result="Ganó $300 en su primer mes"
                verified={true}
                variant="compact"
                theme="dark"
              />
            </div>
            
            {/* Final urgency message */}
            <div className="bg-white/20 rounded-xl p-4 border border-white/30">
              <p className="text-lg font-bold text-white mb-2">
                Esta ventana se cierra automáticamente cuando el contador llegue a cero
              </p>
              <p className="text-sm text-purple-text/90">
                No pierdas esta oportunidad única de transformar tu vida por solo $7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalUrgencySection;