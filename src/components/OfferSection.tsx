import { Check, Clock, Star, Shield, Zap, TrendingUp, Users, Award, Target, Sparkles, CheckCircle, Gift } from 'lucide-react';
import courseBook from "@/assets/brow-course-book-new.jpg";

const OfferSection = () => {

  const transformationSteps = [
    {
      icon: Target,
      title: "Aprende las técnicas",
      description: "Domina el diseño profesional de cejas",
      color: "from-blue-500 to-blue-600",
      step: "01"
    },
    {
      icon: Users,
      title: "Practica con confianza",
      description: "Aplica lo aprendido con seguridad",
      color: "from-purple-500 to-purple-600",
      step: "02"
    },
    {
      icon: TrendingUp,
      title: "Genera ingresos",
      description: "Convierte tu habilidad en negocio",
      color: "from-green-500 to-green-600",
      step: "03"
    }
  ];

  const valueProposition = [
    { icon: Award, title: "Certificación profesional", highlight: "Incluida" },
    { icon: Users, title: "Grupo VIP exclusivo", highlight: "80,000+ miembros" },
    { icon: Zap, title: "Acceso inmediato", highlight: "Sin esperas" },
    { icon: Shield, title: "Garantía total", highlight: "7 días" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-neutral-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-20 left-10 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-accent/10 rounded-full blur-3xl max-w-[calc(100vw-2rem)]" />
      <div className="absolute bottom-20 right-10 w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 bg-primary/10 rounded-full blur-3xl max-w-[calc(100vw-2rem)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Hero section with transformation promise */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Transformación Garantizada
            </div>
            
            <h2 className="headline-section text-4xl lg:text-6xl text-neutral-900 mb-6">
              De <span className="text-neutral-500">principiante</span> a{" "}
              <span className="text-accent font-black">experta en cejas</span>
              <br />
              <span className="text-2xl lg:text-3xl text-neutral-600 font-normal">
                en solo 7 días
              </span>
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Únete a las miles de mujeres que ya transformaron su vida con nuestra metodología probada
            </p>
            
            {/* Transformation steps */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {transformationSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connection line - hidden on mobile to prevent overflow */}
                  {index < transformationSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent/30 to-transparent z-0" />
                  )}
                  
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="absolute -top-3 -right-3 bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-neutral-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Value proposition */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  ¿Qué hace única nuestra guía?
                </h3>
                
                <div className="grid gap-4">
                  {valueProposition.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white/60 p-4 rounded-xl">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-neutral-900">{item.title}</div>
                        <div className="text-accent font-bold text-sm">{item.highlight}</div>
                      </div>
                      <Check className="w-5 h-5 text-success" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social proof */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full border-2 border-white flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">+80,000 alumnas</div>
                    <div className="text-sm text-neutral-600">Ya transformaron su vida</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600">4.9/5 de satisfacción</span>
                </div>
              </div>
            </div>

            {/* Right side: Product showcase with sticky pricing */}
            <div className="relative">
              <div className="sticky top-8">
                {/* Product image with effects */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl blur-2xl transform rotate-6" />
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-neutral-100">
                    <img 
                      src={courseBook} 
                      alt="Guía Cejas Express" 
                      className="w-full max-w-sm mx-auto h-auto drop-shadow-2xl rounded-2xl"
                    />
                  </div>
                </div>
                
                {/* Pricing card */}
                <div className="bg-gradient-to-br from-neutral-900 to-primary rounded-3xl p-8 text-white shadow-2xl">
                  {/* Enhanced pricing with better visual hierarchy */}
                  <div className="text-center mb-8">
                    <div className="text-white/60 line-through text-xl mb-3 font-medium">
                      Precio original: <span className="text-2xl">$27 USD</span>
                    </div>
                    <div className="relative">
                      <div className="text-6xl sm:text-7xl font-black text-accent mb-3 drop-shadow-lg">
                        $7
                      </div>
                      <div className="absolute -top-2 -right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full transform rotate-12">
                        74% OFF
                      </div>
                    </div>
                    <div className="text-white/90 text-lg font-medium">
                      Precio especial por tiempo limitado
                    </div>
                  </div>
                  
                  {/* CTA button */}
                  <button className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/95 hover:to-accent/85 text-white font-black py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-4 text-lg">
                    CONSEGUIR MI ACCESO POR $7
                  </button>
                  
                  {/* Trust indicators */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-accent" />
                      <span>Garantía 7 días</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" />
                      <span>Acceso inmediato</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span>Grupo VIP incluido</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span>Certificado incluido</span>
                    </div>
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

export default OfferSection;
