import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, CheckCircle } from "lucide-react";

interface TestimonialImage {
  id: number;
  image: string;
  author: string;
  location: string;
  description: string;
  result: string;
}

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialImages: TestimonialImage[] = [
    {
      id: 1,
      image: "/testimonial-giselle.png",
      author: "Giselli",
      location: "Ciudad de México, México",
      description: "Logré generar ingresos extras increíbles especializándome en cejas",
      result: "Gano $320 USD por semana"
    },
    {
      id: 2,
      image: "/testimonial-josiane.png",
      author: "Josiane",
      location: "Bogotá, Colombia",
      description: "Ahora tengo mi propia fuente de ingresos trabajando con diseño de cejas",
      result: "Ingresos extras de $480 USD al mes"
    },
    {
      id: 3,
      image: "/testimonial-maria.png",
      author: "María",
      location: "Lima, Perú",
      description: "Este método me dio la independencia financiera que tanto necesitaba",
      result: "Genero $380 USD mensuales extra"
    },
    {
      id: 4,
      image: "/testimonial-emily.png",
      author: "Emily",
      location: "Buenos Aires, Argentina",
      description: "Transformé mi pasión por las cejas en un negocio rentable y consistente",
      result: "Obtengo $240 USD semanales"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialImages.length - 1 : prevIndex - 1
    );
  };

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

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

        {/* Carrossel de depoimentos com prints */}
        <div className="relative bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Imagem do depoimento - PRIMEIRO */}
              <div className="flex justify-center relative">
                <div className="bg-white rounded-lg p-4 shadow-lg max-w-sm">
                  <img 
                    src={testimonialImages[currentIndex].image} 
                    alt={`Depoimento de ${testimonialImages[currentIndex].author}`}
                    className="w-full h-auto rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>

              {/* Informações do depoimento - SEGUNDO */}
              <div>
                <div className="flex space-x-1 mb-4">
                  {renderStars(5)}
                </div>
                <p className="text-xl text-gray-800 mb-4 font-medium">
                  "{testimonialImages[currentIndex].description}"
                </p>
                <div className="text-gray-700 mb-4">
                  <strong>{testimonialImages[currentIndex].author}</strong> • {testimonialImages[currentIndex].location}
                </div>
                <div className="bg-green-100 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-green-800 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    {testimonialImages[currentIndex].result}
                  </p>
                </div>
              </div>
            </div>

            {/* Controles do carrossel - SEM BOLINHAS */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;