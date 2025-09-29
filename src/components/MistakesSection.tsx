import { Button } from "@/components/ui/button";
import { AlertCircle, FileX, DollarSign, Target } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const MistakesSection = () => {
  const { isVisible, elementRef } = useIntersectionObserver({ threshold: 0.2 });
  
  const mistakes = [
    {
      title: "Intentar aprender sola en internet",
      description: "Pierdes tiempo con tutoriales incompletos",
      Icon: AlertCircle
    },
    {
      title: "Arruinar el diseño por no saber mapear", 
      description: "Resultados desiguales y clientes insatisfechas",
      Icon: Target
    },
    {
      title: "Cobrar muy poco por falta de seguridad",
      description: "Subvaloras tu trabajo y pierdes ingresos",
      Icon: DollarSign
    },
    {
      title: "Rendirse antes de tener resultados",
      description: "Abandonas por no tener un guia claro",
      Icon: FileX
    }
  ];

  return (
    <section 
      ref={elementRef}
      className="py-fluid-xl bg-pink"
      role="region"
      aria-labelledby="mistakes-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-fluid-lg">
            <h2 
              id="mistakes-heading"
              className={`text-fluid-2xl lg:text-fluid-4xl font-bold text-white mb-fluid-xs transition-smooth ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
            >
              Los errores más comunes que cometen las principiantes:
            </h2>
          </div>

          {/* 2x2 cards grid with left-aligned content */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 transition-smooth ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
            {mistakes.map((mistake, index) => (
              <div 
                key={index} 
                className="bg-white/10 border border-pink-foreground/20 rounded-xl p-6 shadow-md transition-smooth focus-ring"
                tabIndex={0}
                role="article"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-2 border-destructive rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <mistake.Icon className="w-6 h-6 text-purple-text" aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-purple-text mb-1">
                      {mistake.title}
                    </h3>
                    <p className="text-purple-text/80 text-sm">
                      {mistake.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Single green CTA button */}
          <div className="text-center mt-8">
            <Button 
              variant="success" 
              size="lg" 
              className="w-full sm:w-auto font-medium px-8 py-3 rounded-xl shadow-md"
              aria-label="Descargar guía paso a paso para diseño de cejas"
            >
              QUIERO EVITAR ESTOS ERRORES
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MistakesSection;
