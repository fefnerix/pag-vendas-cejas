import { Star, Users, Globe, Clock, HeartHandshake, Award, TrendingUp, CheckCircle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CreatorSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "+80.000",
      label: "Alumnas Exitosas",
      description: "Mujeres transformadas",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      number: "100+",
      label: "Países",
      description: "Presencia mundial",
      color: "from-green-500 to-green-600"
    },
    {
      icon: HeartHandshake,
      number: "98%",
      label: "Satisfacción",
      description: "Índice de aprobación",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Soporte",
      description: "Atención continua",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const credentials = [
    {
      icon: Award,
      title: "Academia Certificada",
      description: "Reconocida internacionalmente por la calidad de nuestros cursos"
    },
    {
      icon: TrendingUp,
      title: "Resultados Comprobados",
      description: "Miles de historias de éxito documentadas y verificadas"
    },
    {
      icon: Shield,
      title: "Garantía Total",
      description: "7 días de garantía incondicional o te devolvemos tu dinero"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-pink via-pink/95 to-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-white to-accent" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced header section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Academia Líder en Latinoamérica
            </div>
            
            <h2 className="headline-section text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Creada por{" "}
              <span className="text-accent font-black bg-white/10 px-4 py-2 rounded-2xl">
                Beauty Academy
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              La academia online de belleza que ya transformó la vida de{" "}
              <span className="font-black text-accent bg-white/20 px-3 py-1 rounded-lg">
                +80.000 mujeres
              </span>{" "}
              en América Latina.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium">Método Probado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium">Resultados Garantizados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium">Soporte Completo</span>
              </div>
            </div>
          </div>

          {/* Enhanced statistics with better visual hierarchy */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
            {achievements.map((stat, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-3xl lg:text-4xl font-black text-neutral-900 mb-2">
                    {stat.number}
                  </div>
                  
                  <div className="text-lg font-bold text-neutral-800 mb-1">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-neutral-600">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Credentials section with different layout */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                ¿Por qué confiar en nosotros?
              </h3>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Más de 5 años transformando vidas a través de la educación en belleza
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {credentials.map((credential, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300">
                    <credential.icon className="w-10 h-10 text-accent" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">
                    {credential.title}
                  </h4>
                  
                  <p className="text-white/80 leading-relaxed">
                    {credential.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <span className="font-medium">5.0 estrellas</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="font-medium">Pago 100% Seguro</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-medium">Certificado SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
