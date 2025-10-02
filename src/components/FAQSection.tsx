import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, HelpCircle, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      id: "item-1",
      question: "¿Nunca estudiaste belleza?",
      answer: "Bien, esto es para ti. 70% de alumnas empezaron de cero. El Guía Cejas Express™ fue creado específicamente para principiantes sin experiencia.",
      highlight: "70% empezaron de cero"
    },
    {
      id: "item-2", 
      question: "¿Necesitas materiales caros?",
      answer: "No. Solo tu celular. Todo lo que necesitas para empezar está incluido en la guía. Sin inversiones costosas.",
      highlight: "Solo tu celular"
    },
    {
      id: "item-3",
      question: "¿Cuándo puedes ganar?",
      answer: "Hay alumnas cobrando en la primera semana. La mayoría consigue sus primeras clientas en 7-15 días y ya empiezan a generar ingresos.",
      highlight: "Primera semana"
    },
    {
      id: "item-4",
      question: "¿Acceso?",
      answer: "Vitalicio, inmediato. Pagas una vez y tienes acceso para siempre. Puedes revisar el contenido cuantas veces quieras, cuando quieras.",
      highlight: "Vitalicio e inmediato"
    },
    {
      id: "item-5",
      question: "¿Grupo privado?",
      answer: "Sí, incluido. Acceso al grupo VIP exclusivo con más de 80,000 alumnas exitosas donde recibes soporte directo y compartes experiencias.",
      highlight: "80,000+ miembros"
    },
    {
      id: "item-6",
      question: "¿Cuánto puedo ganar realmente?",
      answer: "Nuestras alumnas ganan entre $300-$1500 por mes trabajando solo algunas horas por semana. Todo depende de tu dedicación y las clientas que atiendas.",
      highlight: "$300-$1500/mes"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-neutral-50 to-white relative overflow-hidden" role="region" aria-labelledby="faq-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <HelpCircle className="w-4 h-4" />
              Preguntas Frecuentes
            </div>
            
            <h2 id="faq-heading" className="headline-section text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-6">
              ¿Tienes dudas?
              <br />
              <span className="text-primary">Te las resolvemos</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Las respuestas a las preguntas más comunes de nuestras alumnas exitosas
            </p>
          </div>

          {/* Enhanced FAQ Accordion - Mobile-first design */}
          <div className="mb-12 lg:mb-16">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-6 sm:px-8 sm:py-8 text-left hover:no-underline group [&[data-state=open]>div>svg]:rotate-180">
                    <div className="flex items-start gap-4 w-full">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/20 transition-colors">
                        <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-neutral-900 leading-tight mb-2 pr-4">
                          {faq.question}
                        </h3>
                        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                          <Star className="w-3 h-3" />
                          {faq.highlight}
                        </div>
                      </div>
                      <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400 transition-transform duration-300 flex-shrink-0 mt-2" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 sm:px-8 sm:pb-8">
                    <div className="flex items-start gap-4 ml-12 sm:ml-14">
                      <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-success" />
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Enhanced CTA section */}
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 sm:p-10 lg:p-12 text-white text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                ¿Aún tienes dudas?
              </h3>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                Únete a más de <span className="font-bold text-accent">80,000 mujeres</span> que ya transformaron su vida
              </p>
              
              <div className="space-y-6">
                <a
                  href="https://pay.hotmart.com/B102079638B?checkoutMode=10&src=faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    (window as any).fbq?.('track', 'InitiateCheckout');
                  }}
                >
                  <Button 
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-neutral-900 font-black text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 min-h-[60px] w-full sm:w-auto"
                  >
                    DESCARGAR POR $7
                  </Button>
                </a>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Garantía 7 días</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Acceso inmediato</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Soporte 24/7</span>
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

export default FAQSection;
