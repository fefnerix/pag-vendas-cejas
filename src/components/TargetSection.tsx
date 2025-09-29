import { Button } from "@/components/ui/button";
import { Sparkles, Home, Heart, DollarSign } from "lucide-react";

const TargetSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-pink">{/* SEÇÃO ROSA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600 mb-8 sm:mb-12 px-2">
            Esta guía fue creada para mujeres que quieren <span className="text-purple-700 text-weight-black">dominar el Guia Cejas Express™</span>:
          </h2>

          {/* Mobile-first grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[
              {
                Icon: DollarSign,
                title: "Ganar dinero desde casa",
              },
              {
                Icon: Sparkles, 
                title: "Empezar en belleza sin complicaciones",
              },
              {
                Icon: Heart,
                title: "Tener una técnica confiable sin hacer un curso largo", 
              },
              {
                Icon: Home,
                title: "Independencia económica con una inversión mínima",
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-pink-foreground/10 rounded-xl p-4 sm:p-6 shadow-sm">
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <item.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 flex-shrink-0" />
                  <p className="font-medium text-purple-700 text-sm sm:text-base">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button 
            variant="success" 
            size="lg" 
            className="w-full sm:w-auto text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            <span className="hidden sm:inline">VER LO QUE INCLUYE CEJAS EXPRESS™</span>
            <span className="sm:hidden">VER CONTENIDO</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
