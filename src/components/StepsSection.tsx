import { BookOpen, PlayCircle, DollarSign, ArrowRight, CheckCircle, Clock, Users, Star, Zap, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildCheckoutUrl } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const StepsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "En solo 3 semanas pasé de no saber nada sobre cejas a tener mi agenda llena de clientas",
      author: "María González",
      role: "Alumna desde 2023",
      initial: "M"
    },
    {
      quote: "Gracias a esta guía ahora genero $800 USD extra al mes trabajando desde casa",
      author: "Carmen Rodríguez", 
      role: "Especialista en cejas",
      initial: "C"
    },
    {
      quote: "El método es tan fácil que en 2 semanas ya tenía mis primeras clientas pagando $25 por sesión",
      author: "Ana Martínez",
      role: "Emprendedora",
      initial: "A"
    },
    {
      quote: "Nunca pensé que podría ganar dinero con algo tan simple. Ya recuperé mi inversión 50 veces",
      author: "Sofía López",
      role: "Estudiante universitaria", 
      initial: "S"
    },
    {
      quote: "Dejé mi trabajo de oficina para dedicarme a esto. Ahora gano el doble trabajando menos horas",
      author: "Isabella Torres",
      role: "Ex-secretaria",
      initial: "I"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);
  const steps = [
    {
      number: "01",
      icon: BookOpen,
      title: "Aprende las técnicas en 2-3 horas desde tu celular",
      description: "Accede al Guía Cejas Express™ y domina las técnicas de mapeo, medición y diseño profesional desde casa.",
      highlight: "Acceso inmediato",
      time: "2-3 horas",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02", 
      icon: PlayCircle,
      title: "Practica con nuestras plantillas y gana seguridad",
      description: "Sigue el paso a paso exacto y practica las técnicas hasta sentirte 100% segura con cada movimiento.",
      highlight: "Método probado",
      time: "1-2 semanas",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      icon: DollarSign,
      title: "Atiende tus primeras clientas y cobra $30+ por sesión",
      description: "Atiende tus primeras clientas y genera $200+ por semana trabajando desde la comodidad de tu hogar.",
      highlight: "Resultados reales",
      time: "Desde la 1ª semana",
      color: "from-green-500 to-green-600"
    }
  ];

  const achievements = [
    { icon: Users, number: "80,000+", label: "Alumnas exitosas", color: "text-blue-600" },
    { icon: Star, number: "98%", label: "Satisfacción", color: "text-yellow-600" },
    { icon: TrendingUp, number: "$200+", label: "Ganancia semanal", color: "text-green-600" },
    { icon: Zap, number: "24/7", label: "Soporte incluido", color: "text-purple-600" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 relative overflow-hidden" role="region" aria-labelledby="steps-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/3 via-transparent to-accent/3" />
      <div className="absolute top-20 left-10 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-accent/10 rounded-full blur-3xl max-w-[calc(100vw-2rem)]" />
      <div className="absolute bottom-20 right-10 w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 bg-primary/10 rounded-full blur-3xl max-w-[calc(100vw-2rem)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced section header with side-by-side layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <CheckCircle className="w-4 h-4" />
                Proceso Comprobado
              </div>
              
              <h2 
                id="steps-heading"
                className="headline-section text-4xl lg:text-5xl text-neutral-900 mb-6 leading-tight"
              >
                Cómo funciona el{" "}
                <span className="text-accent font-black">Guía Cejas Express™</span>
              </h2>
              
              <p className="text-xl text-neutral-600 leading-relaxed">
                Un proceso simple y probado que te lleva de principiante a profesional en tiempo récord
              </p>
            </div>

            {/* Achievement stats in header */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-neutral-100">
                  <achievement.icon className={`w-8 h-8 mx-auto mb-3 ${achievement.color}`} />
                  <div className={`text-2xl font-black mb-1 ${achievement.color}`}>
                    {achievement.number}
                  </div>
                  <div className="text-sm text-neutral-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced steps with zigzag layout */}
          <div className="space-y-16 mb-20">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Step content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-xl`}>
                      {step.number}
                    </div>
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4" />
                      {step.highlight}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-500 bg-neutral-100 px-3 py-2 rounded-full">
                      <Clock className="w-4 h-4" />
                      {step.time}
                    </div>
                  </div>
                </div>

                {/* Visual element - removed blank squares */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} flex justify-center`}>
                  <div className="relative">
                    {/* Connection arrow for next step - hidden on small screens to prevent overflow */}
                    {index < steps.length - 1 && (
                      <div className="hidden sm:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <ArrowRight className="w-6 h-6 text-white rotate-90" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Carousel CTA */}
          <div className="bg-gradient-to-r from-neutral-900 via-primary to-neutral-900 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5" />
            
            <div className="relative">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-accent" />
              </div>
              
              <div className="min-h-[120px] flex items-center justify-center">
                <blockquote className="text-2xl lg:text-3xl font-bold mb-6 leading-relaxed transition-all duration-500">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
              </div>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{testimonials[currentTestimonial].initial}</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">{testimonials[currentTestimonial].author}</div>
                  <div className="text-white/70 text-sm">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>

              {/* Carousel navigation - Minimalist arrows */}
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div className="space-y-4">
                <a
                  href={buildCheckoutUrl("3")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    (window as any).fbq?.('track', 'InitiateCheckout');
                  }}
                >
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-black text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 min-h-[60px] sm:min-h-[70px]"
                  >
                    QUIERO GANAR DINERO HOY
                  </Button>
                </a>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Sin experiencia necesaria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Garantía 7 días</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Soporte incluido</span>
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

export default StepsSection;
