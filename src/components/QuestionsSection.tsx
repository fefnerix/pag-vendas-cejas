import { Button } from "@/components/ui/button";
import { HelpCircle, Search, AlertTriangle, XCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const QuestionsSection = () => {
  const { isVisible, elementRef } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section 
      ref={elementRef}
      className="py-fluid-xl bg-background"
      role="region"
      aria-labelledby="questions-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            id="questions-heading"
            className={`text-fluid-2xl lg:text-fluid-3xl font-bold text-purple-text mb-fluid-lg leading-tight transition-smooth ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            ¿Te identificas con esto?
          </h2>

          {/* Enhanced responsive grid with animations */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-fluid-md mb-fluid-lg transition-smooth ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
            {[
              {
                Icon: XCircle,
                title: "¿Sueñas con tener un ingreso propio pero no sabes por dónde empezar?",
                description: ""
              },
              {
                Icon: Search, 
                title: "¿Videos sueltos solo te confundieron más?",
                description: ""
              },
              {
                Icon: AlertTriangle,
                title: "¿Te da miedo fallar con una clienta?", 
                description: ""
              },
              {
                Icon: HelpCircle,
                title: "¿Sientes que nunca vas a vivir de algo que realmente amas?",
                description: ""
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl p-fluid-sm shadow-card hover:shadow-elevated hover-scale transition-smooth focus-ring group"
                tabIndex={0}
                role="article"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-fluid-xs group-hover:bg-destructive/15 transition-smooth">
                  <item.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-text" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-purple-text mb-fluid-2xs text-fluid-sm leading-relaxed">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-fluid-xs text-purple-text/70 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className={`text-center mb-fluid-md transition-smooth ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            <p className="text-fluid-sm text-purple-text/80 mb-fluid-xs font-medium">
              La mayoría empieza así. Pero quienes deciden actuar, transforman su vida.
            </p>
          </div>
          
          <Button 
            variant="success" 
            size="lg" 
            className={`w-full sm:w-auto text-fluid-sm lg:text-fluid-lg px-fluid-lg py-fluid-sm hover-scale focus-ring transition-smooth text-purple-text bg-success hover:bg-success/90 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
            style={{ animationDelay: '500ms' }}
            aria-label="Empezar a ganar dinero desde casa con diseño de cejas"
          >
            <span className="sm:hidden">EMPEZAR YA</span>
            <span className="hidden sm:inline">EMPEZAR YA</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
