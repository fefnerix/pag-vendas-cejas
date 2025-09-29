import { Shield, CheckCircle, Clock, Users, Award, Star, Zap, Lock } from 'lucide-react';

interface TrustBadgeProps {
  variant?: 'default' | 'compact' | 'detailed';
  theme?: 'light' | 'dark';
  badges?: string[];
}

const TrustBadges = ({ variant = 'default', theme = 'light', badges }: TrustBadgeProps) => {
  const allBadges = {
    guarantee: {
      icon: Shield,
      title: "Garantía 7 días",
      description: "100% satisfacción garantizada",
      color: "from-green-500 to-green-600"
    },
    secure: {
      icon: Lock,
      title: "Pago seguro",
      description: "Transacción protegida SSL",
      color: "from-blue-500 to-blue-600"
    },
    instant: {
      icon: Zap,
      title: "Acceso inmediato",
      description: "Disponible al instante",
      color: "from-yellow-500 to-yellow-600"
    },
    students: {
      icon: Users,
      title: "80,000+ alumnas",
      description: "Comunidad exitosa",
      color: "from-purple-500 to-purple-600"
    },
    certified: {
      icon: Award,
      title: "Certificado incluido",
      description: "Validación profesional",
      color: "from-orange-500 to-orange-600"
    },
    rating: {
      icon: Star,
      title: "4.9/5 estrellas",
      description: "Calificación promedio",
      color: "from-yellow-400 to-yellow-500"
    },
    verified: {
      icon: CheckCircle,
      title: "Método verificado",
      description: "Técnicas comprobadas",
      color: "from-green-400 to-green-500"
    },
    support: {
      icon: Clock,
      title: "Soporte 24/7",
      description: "Ayuda cuando la necesites",
      color: "from-indigo-500 to-indigo-600"
    }
  };

  const selectedBadges = badges 
    ? badges.map(key => ({ key, ...allBadges[key as keyof typeof allBadges] })).filter(badge => badge.icon)
    : Object.entries(allBadges).slice(0, 4).map(([key, badge]) => ({ key, ...badge }));

  const baseClasses = theme === 'dark' 
    ? 'text-white' 
    : 'text-neutral-900';

  const bgClasses = theme === 'dark'
    ? 'bg-white/10 border-white/20'
    : 'bg-white border-neutral-200';

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap gap-3 justify-center">
        {selectedBadges.map((badge, index) => (
          <div 
            key={badge.key || index}
            className={`flex items-center gap-2 ${bgClasses} px-3 py-2 rounded-full shadow-sm`}
          >
            <badge.icon className={`w-4 h-4 ${theme === 'dark' ? 'text-accent' : 'text-accent'}`} />
            <span className={`text-sm font-medium ${baseClasses}`}>
              {badge.title}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {selectedBadges.map((badge, index) => (
          <div 
            key={badge.key || index}
            className={`${bgClasses} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${badge.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
              <badge.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className={`font-bold mb-2 ${baseClasses}`}>
              {badge.title}
            </h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-neutral-600'}`}>
              {badge.description}
            </p>
          </div>
        ))}
      </div>
    );
  }

  // Default variant
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {selectedBadges.map((badge, index) => (
        <div 
          key={badge.key || index}
          className={`${bgClasses} rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center`}
        >
          <div className={`w-10 h-10 bg-gradient-to-br ${badge.color} rounded-lg flex items-center justify-center mb-3 mx-auto shadow-md`}>
            <badge.icon className="w-5 h-5 text-white" />
          </div>
          <div className={`font-semibold text-sm ${baseClasses} mb-1`}>
            {badge.title}
          </div>
          <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-neutral-500'}`}>
            {badge.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;