import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const AfterGuideSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-background">{/* SEÇÃO 5: BRANCO */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-text mb-8 sm:mb-12 px-2">
            Después de acceder, podrás:
          </h2>

          {/* Mobile-first checkmark grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              "Atender clientas reales y generar ingresos",
              "Usar técnicas profesionales sin improvisar",
    "Resolver errores comunes con confianza",
              "Empezar tu negocio desde casa, sin miedo"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 text-left bg-card p-3 sm:p-4 rounded-lg border border-border">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-success text-white-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <p className="text-purple-text font-medium text-xs sm:text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <Button 
            variant="success" 
            size="lg" 
            className="w-full sm:w-auto text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            QUIERO APRENDER CEJAS DESDE CASA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AfterGuideSection;
