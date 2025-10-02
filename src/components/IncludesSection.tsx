import { Check, BookOpen, Users, Gift, Clock, Star, Shield, Zap, TrendingUp } from 'lucide-react';
import courseBook from "@/assets/brow-course-book-new.jpg";

const IncludesSection = () => {

  const mainFeatures = [
    {
      icon: BookOpen,
      title: "Guía paso a paso completa",
      description: "Manual detallado con técnicas validadas por expertos",
      color: "from-blue-500 to-blue-600",
      featured: true
    },
    {
      icon: BookOpen,
      title: "Técnicas avanzadas de diseño",
      description: "Métodos profesionales para crear cejas perfectas",
      color: "from-purple-500 to-purple-600",
      featured: false
    },
    {
      icon: Users,
      title: "Grupo exclusivo VIP",
      description: "Networking con +80,000 alumnas exitosas",
      color: "from-green-500 to-green-600",
      featured: true
    },
    {
      icon: Shield,
      title: "Garantía de satisfacción",
      description: "7 días para probar sin riesgo",
      color: "from-yellow-500 to-yellow-600",
      featured: false
    }
  ];

  const bonusContent = [
    { icon: TrendingUp, title: "Bono 1 – Formato del Rostro", value: "$97" },
    { icon: Star, title: "Bono 2 – Errores Comunes y Cómo Resolverlos", value: "$67" },
    { icon: Shield, title: "Soporte técnico 24/7", value: "$97" },
    { icon: Zap, title: "Actualizaciones gratuitas de por vida", value: "$26" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-10 right-10 w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 bg-accent/10 rounded-full blur-3xl max-w-[calc(100vw-2rem)]" />
      <div className="absolute bottom-10 left-10 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-primary/10 rounded-full blur-3xl max-w-[calc(100vw-2rem)]" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced header with visual elements */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Gift className="w-4 h-4" />
              Contenido Completo
            </div>
            
            <h2 className="headline-section text-4xl lg:text-5xl text-neutral-900 mb-6">
              ¿Qué incluye la{" "}
              <span className="text-accent font-black">Guía Cejas Express™?</span>
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Todo lo que necesitas para empezar a ganar con cejas profesionales
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Main features with card layout */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {mainFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className={`relative p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                      feature.featured 
                        ? 'bg-white border-accent/20 shadow-xl' 
                        : 'bg-white border-neutral-200 shadow-lg'
                    }`}
                  >
                    {feature.featured && (
                      <div className="absolute -top-3 left-6 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
                        DESTACADO
                      </div>
                    )}
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-4">
                      <Check className="w-4 h-4 text-success" />
                      <span className="text-sm text-success font-medium">Incluido</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bonus value section */}
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    Bonos exclusivos incluidos
                  </h3>
                  <p className="text-neutral-600">
                    Valor total de los bonos: <span className="text-accent font-bold text-xl">$287</span>
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {bonusContent.map((bonus, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/50 p-4 rounded-xl">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                        <bonus.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-neutral-900">{bonus.title}</div>
                        <div className="text-accent font-bold text-sm">{bonus.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product showcase with pricing */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-3xl shadow-2xl border border-neutral-100 p-8 text-center">
                  {/* Product image */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl" />
                    <img 
                      src={courseBook} 
                      alt="Guía Cejas Express" 
                      className="relative w-full max-w-xs mx-auto h-auto drop-shadow-2xl rounded-2xl"
                    />
                  </div>
                  
                  {/* Pricing section */}
                  <div className="space-y-6">
                    <div>
                      <div className="text-neutral-500 line-through text-lg mb-2">$287 USD</div>
                      <div className="text-4xl font-black text-accent mb-2">$7 USD</div>
                      <div className="text-sm text-neutral-600">Precio especial de lanzamiento</div>
                    </div>
                    
                    {/* CTA buttons */}
                    <div className="space-y-3">
                      <a
                        href="https://pay.hotmart.com/B102079638B?checkoutMode=10&src=2"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          (window as any).fbq?.('track', 'InitiateCheckout');
                        }}
                      >
                        <button className="w-full bg-gradient-to-r from-success to-success/90 hover:from-success/95 hover:to-success/85 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          DESCARGAR POR $7
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="bg-gradient-to-r from-neutral-900 to-primary rounded-3xl p-8 lg:p-12 text-white text-center">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div>
                <div className="text-3xl font-black text-accent mb-2">80,000+</div>
                <div className="text-white/80">Alumnas exitosas</div>
              </div>
              <div>
                <div className="text-3xl font-black text-accent mb-2">98%</div>
                <div className="text-white/80">Satisfacción garantizada</div>
              </div>
              <div>
                <div className="text-3xl font-black text-accent mb-2">24/7</div>
                <div className="text-white/80">Soporte incluido</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludesSection;
