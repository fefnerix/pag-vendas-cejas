import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, Users, Globe, HeartHandshake, Clock, ChevronLeft, ChevronRight, Award, TrendingUp, CheckCircle, Shield } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const SocialProofSection = () => {
  // Estado para o slider de depoimentos no mobile
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  
  // Optimized testimonials - Maximum 3 as per guidelines
  const testimonials = [
    {
      quote: "Conseguí más de $280 en mi semana 3.",
      text: "No podía creerlo... con solo las técnicas de mapeo ya tengo 3 clientas fijas. El guía funciona de verdad.",
      author: "María S.",
      location: "Ciudad de México, México",
      rating: 5,
      earnings: "$280/semana",
      timeframe: "Tercera semana",
      avatar: "MS",
      verified: true
    },
    {
      quote: "Ya cobré $300 el primer mes. Mis clientas llegan por recomendación.",
      text: "Nunca había trabajado en belleza antes. Las cejas quedaron perfectas desde el primer intento siguiendo la guía paso a paso.",
      author: "Carmen L.",
      location: "Bogotá, Colombia", 
      rating: 5,
      earnings: "$300/mes",
      timeframe: "Primer mes",
      avatar: "CL",
      verified: true
    },
    {
      quote: "En 2 semanas dejé el trabajo de oficina. Hoy trabajo desde casa y gano el doble.",
      text: "Después del trabajo dedico 2 horas y ya tengo una agenda llena. Mis clientas me refieren siempre.",
      author: "Ana R.",
      location: "Buenos Aires, Argentina",
      rating: 5,
      earnings: "$800/mes",
      timeframe: "Segundo mes",
      avatar: "AR",
      verified: true
    }
  ];

  // Função para navegar entre slides
  const navigateSlide = (direction) => {
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  // Autoplay para o carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      navigateSlide('next');
    }, 4000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  // Pausar autoplay quando o usuário interage
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Retomar após 10s
  };

  const stats = [
    { 
      number: "+80.000", 
      label: "Alumnas activas", 
      icon: Users,
      description: "Mujeres transformando sus vidas"
    },
    { 
      number: "100+", 
      label: "Países", 
      icon: Globe,
      description: "Presencia internacional"
    },
    { 
      number: "98%", 
      label: "Satisfacción", 
      icon: HeartHandshake,
      description: "Índice de satisfacción"
    },
    { 
      number: "24/7", 
      label: "Soporte", 
      icon: Clock,
      description: "Atención personalizada"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-white via-neutral-50 to-white relative overflow-hidden" role="region" aria-labelledby="testimonials-heading">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
      <div className="absolute top-0 right-1/4 w-56 sm:w-64 lg:w-72 h-56 sm:h-64 lg:h-72 bg-accent/10 rounded-full blur-3xl max-w-[calc(100vw-2rem)]" />
      <div className="absolute bottom-0 left-1/4 w-56 sm:w-64 lg:w-72 h-56 sm:h-64 lg:h-72 bg-primary/10 rounded-full blur-3xl max-w-[calc(100vw-2rem)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced header - Mobile-first */}
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Testimonios Reales Verificados
            </div>
            
            <h2 
              id="testimonials-heading"
              className="headline-section text-3xl sm:text-4xl lg:text-6xl text-neutral-900 mb-6 leading-tight"
            >
              Lo que dicen nuestras{" "}
              <span className="text-accent font-black">+80,000 alumnas</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Mujeres reales que transformaron{" "}
              <span className="font-bold text-accent">$7 en ingresos constantes</span>{" "}
              con el Guía Cejas Express™
            </p>
          </div>

          {/* Mobile-first testimonials slider */}
          <div className="relative mb-12 lg:mb-20">
            {/* Mobile and tablet slider */}
            <div className="lg:hidden">
              <div 
                ref={sliderRef}
                className="overflow-hidden rounded-2xl max-w-full"
              >
                <div 
                  className="flex transition-transform duration-500 ease-out" 
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <Card 
                      key={index}
                      className="bg-white border border-neutral-200 shadow-lg flex-shrink-0 w-full"
                    >
                      <div className="p-6 sm:p-8">
                        {/* Header with avatar, rating and verification */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {testimonial.avatar}
                              </div>
                              {testimonial.verified && (
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                                  <CheckCircle className="w-3 h-3 text-white" />
                                </div>
                              )}
                            </div>
                            <div>
                              <div className="font-semibold text-neutral-900 text-sm sm:text-base">{testimonial.author}</div>
                              <div className="text-xs sm:text-sm text-neutral-500">{testimonial.location}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                            ))}
                          </div>
                        </div>
                        
                        {/* Quote */}
                        <blockquote className="text-lg sm:text-xl font-bold text-neutral-900 mb-4 leading-tight">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        {/* Testimonial text */}
                        <p className="text-neutral-600 leading-relaxed mb-6 text-sm sm:text-base">
                          "{testimonial.text}"
                        </p>
                        
                        {/* Results badge */}
                        <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                          <div className="flex items-center gap-2 text-sm">
                            <TrendingUp className="w-4 h-4 text-success" />
                            <span className="font-semibold text-success">{testimonial.earnings}</span>
                          </div>
                          <div className="text-xs sm:text-sm text-neutral-500">{testimonial.timeframe}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Enhanced mobile navigation - SEM BOLINHAS */}
              <div className="flex items-center justify-center mt-6 gap-4">
                <button
                  onClick={() => {
                    navigateSlide('prev');
                    handleUserInteraction();
                  }}
                  className="w-12 h-12 bg-white border border-neutral-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-neutral-600" />
                </button>
                
                <button
                  onClick={() => {
                    navigateSlide('next');
                    handleUserInteraction();
                  }}
                  className="w-12 h-12 bg-white border border-neutral-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-5 h-5 text-neutral-600" />
                </button>
              </div>
            </div>

            {/* Desktop: Enhanced testimonials grid */}
            <div className="hidden lg:grid grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <Card 
                  key={index}
                  className="group bg-white border border-neutral-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="p-8">
                    {/* Header with avatar, rating and verification */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {testimonial.avatar}
                          </div>
                          {testimonial.verified && (
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-neutral-900">{testimonial.author}</div>
                          <div className="text-sm text-neutral-500">{testimonial.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-xl font-bold text-neutral-900 mb-4 leading-tight">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Testimonial text */}
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Results badge */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-success" />
                        <span className="font-semibold text-success">{testimonial.earnings}</span>
                      </div>
                      <div className="text-sm text-neutral-500">{testimonial.timeframe}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced stats section - Mobile-first */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base font-semibold text-neutral-700 mb-1">{stat.label}</div>
                  <div className="text-xs sm:text-sm text-neutral-500 leading-tight">{stat.description}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Enhanced CTA section - Mobile-first */}
          <div className="bg-gradient-to-r from-accent to-accent/90 rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                ¿Lista para ser la próxima historia de éxito?
              </h3>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Únete a las <span className="font-bold">80,000+ mujeres</span> que ya transformaron su vida con solo <span className="font-bold">$7 USD</span>
              </p>
              
              <div className="space-y-6">
                <a href="https://pay.hotmart.com/B102079638B?checkoutMode=10&src=3" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="bg-white hover:bg-white/90 text-accent font-black text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 min-h-[60px] w-full sm:w-auto"
                  >
                    SÍ, QUIERO GANAR DINERO HOY
                  </Button>
                </a>
                
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-white" />
                    <span>Garantía 7 días</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-white" />
                    <span>Acceso inmediato</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-white" />
                    <span>80,000+ alumnas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
