import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const OptimizedFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Puedo empezar si nunca estudié belleza?",
      answer: "¡Absolutamente! El método está diseñado para principiantes. Empezamos desde cero con técnicas básicas y avanzamos paso a paso. Más del 70% de nuestras alumnas no tenían experiencia previa."
    },
    {
      question: "¿Necesito comprar productos adicionales?",
      answer: "No. Te enseñamos a trabajar con productos básicos que puedes conseguir en cualquier lugar. También incluimos una lista de proveedores confiables con precios mayoristas."
    },
    {
      question: "¿Cuánto tiempo dura el curso?",
      answer: "El contenido principal son 4 horas de video, pero tienes acceso de por vida. Puedes completarlo en un fin de semana o ir a tu ritmo. La mayoría empieza a practicar desde la primera semana."
    },
    {
      question: "¿Cuándo puedo empezar a ganar dinero?",
      answer: "Muchas alumnas consiguen sus primeras clientas en 2-3 semanas. El tiempo depende de tu dedicación y práctica. Te damos estrategias para conseguir tus primeros clientes rápidamente."
    },
    {
      question: "¿Tengo acceso al grupo privado?",
      answer: "Sí, incluye acceso al grupo privado de WhatsApp donde resolvemos dudas, compartimos tips y celebramos los éxitos. Es una comunidad muy activa de más de 5.000 alumnas."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Resolvemos las dudas más comunes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            RESOLVER MIS DUDAS Y EMPEZAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptimizedFAQ;