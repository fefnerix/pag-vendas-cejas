import { Button } from "@/components/ui/button";
import { Wallet, Target, Zap, Home, Users, Clock, Star, CheckCircle, TrendingUp, Shield } from "lucide-react";

const GuideSection = () => {
  const topBenefits = [
    {
      Icon: Wallet,
      title: "Genera $200+ por semana",
      description: "Trabaja desde casa con un horario flexible y gana más que en un trabajo tradicional",
      featured: true,
      highlight: "Ingresos reales",
      color: "from-green-500 to-emerald-600"
    },
    {
      Icon: Target, 
      title: "Técnica profesional garantizada",
      description: "Mapeo perfecto y medidas exactas sin años de experiencia previa",
      featured: true,
      highlight: "Resultados perfectos",
      color: "from-blue-500 to-indigo-600"
    },
    {
      Icon: Zap,
      title: "Resultados inmediatos",
      description: "Empieza a practicar hoy mismo y ten tu primera clienta esta semana",
      featured: true,
      highlight: "Sin esperas",
      color: "from-yellow-500 to-orange-600"
    },
    {
      Icon: Home,
      title: "Trabaja desde casa",
      description: "Sin necesidad de local comercial ni grandes inversiones iniciales",
      highlight: "Libertad total",
      color: "from-purple-500 to-pink-600"
    },
    {
      Icon: Users,
      title: "Comunidad de apoyo",
      description: "Acceso a grupo privado con +80,000 alumnas exitosas",
      highlight: "Apoyo 24/7",
      color: "from-teal-500 to-cyan-600"
    },
    {
      Icon: Clock,
      title: "Acceso de por vida",
      description: "Revisa el contenido las veces que necesites, sin límites de tiempo",
      highlight: "Para siempre",
      color: "from-rose-500 to-red-600"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-white via-neutral-50 to-white relative overflow-hidden" role="region" aria-labelledby="benefits-heading">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-0 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-accent/10 rounded-full blur-3xl max-w-[calc(100vw-2rem)]" />
      <div className="absolute bottom-1/4 right-0 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-primary/10 rounded-full blur-3xl max-w-[calc(100vw-2rem)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header - Mobile-first */}
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              Beneficios Exclusivos
            </div>
            
            <h2 
              id="benefits-heading"
              className="headline-section text-3xl sm:text-4xl lg:text-6xl text-neutral-900 mb-6 leading-tight"
            >
              Con{" "}
              <span className="text-accent font-black">Guía Cejas Express™</span>{" "}
              vas a:
            </h2>
            
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Transforma tu vida con las técnicas más efectivas del mercado.{" "}
              <span className="font-bold text-accent">Resultados garantizados desde el primer día.</span>
            </p>
          </div>

          {/* Enhanced Benefits Grid - Mobile-first responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-20">
            {topBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl border border-neutral-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
                role="article"
              >
                {/* Featured Badge */}
                {benefit.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-white text-xs font-bold shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      TOP
                    </div>
                  </div>
                )}
                
                <div className="p-6 sm:p-8">
                  {/* Enhanced Icon with gradient */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                    <benefit.Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  
                  {/* Highlight badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold mb-4">
                    {benefit.highlight}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-neutral-900 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-4 pt-4 border-t border-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-accent text-sm font-semibold">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Incluido en tu guía
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced stats section */}
          <div className="bg-gradient-to-r from-neutral-900 to-primary rounded-3xl p-6 sm:p-8 lg:p-12 text-white mb-12 lg:mb-16">
            <div className="text-center mb-8 lg:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Resultados que hablan por sí solos
              </h3>
              <p className="text-lg sm:text-xl text-white/80">
                Miles de mujeres ya transformaron su vida
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-accent mb-1 sm:mb-2">$200+</div>
                <div className="text-sm sm:text-base font-semibold">Por semana</div>
                <div className="text-xs sm:text-sm text-white/70">Promedio de ingresos</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-accent mb-1 sm:mb-2">80K+</div>
                <div className="text-sm sm:text-base font-semibold">Alumnas</div>
                <div className="text-xs sm:text-sm text-white/70">Exitosas</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-accent mb-1 sm:mb-2">98%</div>
                <div className="text-sm sm:text-base font-semibold">Satisfacción</div>
                <div className="text-xs sm:text-sm text-white/70">Garantizada</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-accent mb-1 sm:mb-2">24/7</div>
                <div className="text-sm sm:text-base font-semibold">Soporte</div>
                <div className="text-xs sm:text-sm text-white/70">Disponible</div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section - Mobile-first */}
          <div className="bg-gradient-to-r from-accent to-accent/90 rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                ¿Lista para transformar tu vida?
              </h3>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Accede a todos estos beneficios por solo{" "}
                <span className="font-black text-2xl sm:text-3xl">$7 USD</span>
              </p>
              
              <div className="space-y-6">
                <Button 
                  size="lg"
                  className="bg-white hover:bg-white/90 text-accent font-black text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 min-h-[60px] w-full sm:w-auto"
                  aria-label="Comenzar con la guía por $7 USD"
                >
                  EMPEZAR HOY POR SOLO $7
                </Button>
                
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
                    <Clock className="w-4 h-4 text-white" />
                    <span>De por vida</span>
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

export default GuideSection;
