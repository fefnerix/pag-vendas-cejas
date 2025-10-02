import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Gana hasta $200/semana desde casa",
    "Trabaja cuando quieras, sin jefes",
    "No necesitas local, experiencia ni herramientas costosas",
    "Aprende desde el celular con acceso inmediato",
    "Guía paso a paso validada por más de 80.000 alumnas",
    "Garantía de satisfacción de 7 días",
    "Soporte directo en grupo privado"
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Guía Cejas Express™?
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas para transformar tu vida profesional
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-gray-700 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://pay.hotmart.com/B102079638B?checkoutMode=10&src=5"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              (window as any).fbq?.('track', 'InitiateCheckout');
            }}
          >
            <button className="btn-primary">
              TRANSFORMAR MI VIDA
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;