import { Shield, Award, Lock, Clock } from "lucide-react";

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: Award,
      title: "Resultados garantizados",
      description: "Si no ves resultados, te devolvemos 100% — sin preguntas"
    },
    {
      icon: Lock,
      title: "Pago 100% seguro",
      description: "Transacción protegida con encriptación SSL"
    },
    {
      icon: Clock,
      title: "Acceso inmediato",
      description: "Empieza ahora mismo, disponible 24/7"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Haz dinero o no pagas
          </h2>
          <p className="text-xl text-gray-600">
            Tu éxito está garantizado al 100%
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {guarantee.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-6 shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="text-lg font-bold text-gray-900">Garantía de Dinero</span>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              7 días para probar, aplicar y empezar a cobrar. Si no ves resultados, 
              te devolvemos 100% — sin preguntas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;
