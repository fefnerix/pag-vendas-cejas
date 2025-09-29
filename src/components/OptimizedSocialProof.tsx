import { Star, CheckCircle, DollarSign } from "lucide-react";

const OptimizedSocialProof = () => {
  const testimonials = [
    {
      id: 1,
      text: "Gané $300 en el primer mes con la técnica. No podía creerlo!",
      author: "María González",
      location: "Colombia",
      stars: 5,
      type: "text"
    },
    {
      id: 2,
      text: "Dejé mi trabajo de oficina. Ahora trabajo desde casa y gano el doble.",
      author: "Ana Rodríguez",
      location: "México",
      stars: 5,
      type: "text"
    },
    {
      id: 3,
      text: "En 3 semanas ya tenía clientas fijas. El método realmente funciona!",
      author: "Carla Silva",
      location: "Brasil",
      stars: 5,
      type: "featured",
      image: "/placeholder.svg" // Placeholder para print real
    }
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resultados reales de nuestras alumnas
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-gray-700">4.9/5</span>
            <span className="text-gray-600">• Más de 80.000 alumnas</span>
          </div>
        </div>

        {/* Primeiros 2 depoimentos - texto simples */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.slice(0, 2).map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.stars)}
              </div>
              <p className="text-lg text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="text-sm text-gray-600">
                <strong>{testimonial.author}</strong> • {testimonial.location}
              </div>
            </div>
          ))}
        </div>

        {/* Depoimento destacado com "print" */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex space-x-1 mb-4">
                  {renderStars(5)}
                </div>
                <p className="text-xl text-gray-800 mb-4 font-medium">
                  "{testimonials[2].text}"
                </p>
                <div className="text-gray-700">
                  <strong>{testimonials[2].author}</strong> • {testimonials[2].location}
                </div>
                <div className="mt-4">
                  <div className="bg-green-100 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="text-green-800 text-sm font-medium">
                      <CheckCircle className="w-4 h-4 inline mr-2" />
                      Resultado verificado • Print real de WhatsApp
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Ganancia semanal</p>
                    <p className="text-2xl font-bold text-green-600">$280 USD</p>
                    <p className="text-xs text-gray-500 mt-1">Semana 3 - Marzo 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizedSocialProof;