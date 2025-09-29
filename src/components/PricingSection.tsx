import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CountdownTimer from "@/components/CountdownTimer";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { CheckCircle, Star, Gift, Zap, Shield, Clock, Users, TrendingUp, Smartphone, RefreshCw, MessageCircle, Phone } from "lucide-react";

const PricingSection = () => {
  const { isVisible, elementRef } = useIntersectionObserver({ threshold: 0.2 });

  const mainFeatures = [
    {
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />,
      title: "Guía de Mapeo de Cejas Paso a Paso",
      description: "Técnica profesional simplificada para principiantes",
      highlight: "Método exclusivo"
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />,
      title: "Cómo Conectar las Líneas del Diseño",
      description: "Método exclusivo para cejas perfectamente simétricas",
      highlight: "Resultados garantizados"
    },
    {
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />,
      title: "Medición Precisa para Cejas Simétricas",
      description: "Herramientas y técnicas de medición profesional",
      highlight: "Precisión profesional"
    }
  ];

  const bonusFeatures = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Plantillas de Diseño Descargables",
      value: "$47"
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Acceso desde cualquier dispositivo",
      value: "$27"
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Actualizaciones gratuitas de por vida",
      value: "$97"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Grupo privado de Facebook",
      value: "$37"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Soporte técnico 24/7",
      value: "$39"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-neutral-900 via-primary to-neutral-900 text-white relative overflow-hidden"
      role="region"
      aria-labelledby="pricing-heading"
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-accent/10 rounded-full blur-3xl max-w-[calc(100vw-2rem)]" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-primary/20 rounded-full blur-3xl max-w-[calc(100vw-2rem)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced header section - Mobile-first */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Gift className="w-4 h-4" />
              Oferta Especial por Tiempo Limitado
            </div>
            
            <h2 
              id="pricing-heading"
              className="headline-section text-3xl sm:text-4xl lg:text-6xl text-white mb-8 leading-tight"
            >
              Todo lo que recibirás con el{" "}
              <span className="text-accent font-black">Guía Cejas Express™</span>
            </h2>
            
            {/* Enhanced pricing display - Mobile-first */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 mb-8 max-w-md mx-auto">
              <div className="flex flex-col items-center gap-4">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl lg:text-7xl font-black text-accent mb-2">$7</div>
                  <div className="text-base sm:text-lg text-white/80">USD únicamente</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl text-white/60 line-through">$97</div>
                    <div className="text-xs sm:text-sm text-accent font-bold">Precio normal</div>
                  </div>
                  <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">
                    93% OFF
                  </div>
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-white/80 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span>80,000+ alumnas</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>98% satisfacción</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-accent fill-current" />
                <span>4.9/5 estrellas</span>
              </div>
            </div>
          </div>

          {/* Main content - Enhanced mobile-first layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Main features - Mobile-first cards */}
            <div className={`space-y-4 sm:space-y-6 transition-all duration-700 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-accent fill-current" />
                Lo principal que recibirás:
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {mainFeatures.map((feature, index) => (
                  <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          {feature.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white mb-2 text-sm sm:text-base leading-tight">{feature.title}</h4>
                          <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-2">{feature.description}</p>
                          <div className="inline-flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                            <CheckCircle className="w-3 h-3" />
                            {feature.highlight}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Enhanced bonus features - Mobile-first */}
            <div className={`transition-all duration-700 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                Bonos especiales incluidos:
              </h3>
              
              <Card className="bg-gradient-to-br from-accent/20 to-accent/10 border-accent/30 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-3 sm:space-y-4">
                    {bonusFeatures.map((bonus, index) => (
                      <div key={index} className="flex items-center justify-between gap-3 text-white p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="text-lg sm:text-xl flex-shrink-0 text-accent">{bonus.icon}</div>
                          <span className="font-medium text-sm sm:text-base leading-tight">{bonus.title}</span>
                        </div>
                        <div className="text-accent font-bold text-sm sm:text-base flex-shrink-0">
                          {bonus.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/10 rounded-xl">
                    <div className="text-center">
                      <div className="text-sm text-white/80 mb-2">Valor total de los bonos:</div>
                      <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">$247 USD</div>
                      <div className="text-sm text-white/80 font-medium">¡GRATIS para ti!</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced CTA section - Mobile-first */}
          <div className={`text-center space-y-6 sm:space-y-8 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20">
              <div className="mb-6 sm:mb-8">
                <CountdownTimer />
              </div>
              
              <Button 
                size="lg" 
                className="btn-secondary min-h-[60px] sm:min-h-[70px] w-full sm:w-auto mb-6 sm:mb-8 text-lg sm:text-xl lg:text-2xl px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                SÍ, QUIERO MI GUÍA POR $7
              </Button>
              
              <p className="text-white/70 text-sm sm:text-base">
                Más de <span className="text-accent font-bold">200 mujeres</span> compraron en las últimas 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
