import { Star, CheckCircle, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location?: string;
  avatar?: string;
  rating: number;
  testimonial: string;
  result?: string;
  verified?: boolean;
  variant?: 'default' | 'compact' | 'featured';
  theme?: 'light' | 'dark';
}

const TestimonialCard = ({ 
  name, 
  location, 
  avatar, 
  rating, 
  testimonial, 
  result, 
  verified = false,
  variant = 'default',
  theme = 'light'
}: TestimonialCardProps) => {
  const baseClasses = theme === 'dark' 
    ? 'bg-white/10 border-white/20 text-white' 
    : 'bg-white border-neutral-200 text-neutral-900';

  const textClasses = theme === 'dark'
    ? 'text-white/80'
    : 'text-neutral-600';

  if (variant === 'compact') {
    return (
      <div className={`${baseClasses} rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center overflow-hidden">
            {avatar ? (
              <img 
                src={avatar} 
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white text-sm font-bold">
                {name.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">{name}</span>
              {verified && <CheckCircle className="w-4 h-4 text-success" />}
            </div>
            {location && <span className={`text-xs ${textClasses}`}>{location}</span>}
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'}`} 
              />
            ))}
          </div>
        </div>
        <p className={`text-sm ${textClasses} leading-relaxed`}>
          "{testimonial}"
        </p>
        {result && (
          <div className="mt-3 bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium inline-block">
            {result}
          </div>
        )}
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={`${baseClasses} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden`}>
        <div className="absolute top-4 right-4">
          <Quote className={`w-8 h-8 ${theme === 'dark' ? 'text-white/20' : 'text-neutral-200'}`} />
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            {avatar ? (
              <img 
                src={avatar} 
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white text-xl font-bold">
                {name.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg">{name}</h3>
              {verified && (
                <div className="bg-success/20 text-success px-2 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <span className="text-xs font-medium">Verificado</span>
                </div>
              )}
            </div>
            {location && <p className={`text-sm ${textClasses}`}>{location}</p>}
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'}`} 
                />
              ))}
            </div>
          </div>
        </div>
        
        <blockquote className={`text-lg ${textClasses} leading-relaxed mb-6 italic`}>
          "{testimonial}"
        </blockquote>
        
        {result && (
          <div className="bg-gradient-to-r from-success/20 to-success/10 border border-success/30 rounded-2xl p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="font-semibold text-success">Resultado:</span>
            </div>
            <p className="text-success font-medium mt-1">{result}</p>
          </div>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`${baseClasses} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-md overflow-hidden">
          {avatar ? (
            <img 
              src={avatar} 
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white font-bold">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{name}</h3>
            {verified && <CheckCircle className="w-4 h-4 text-success" />}
          </div>
          {location && <p className={`text-sm ${textClasses}`}>{location}</p>}
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'}`} 
            />
          ))}
        </div>
      </div>
      
      <p className={`${textClasses} leading-relaxed mb-4`}>
        "{testimonial}"
      </p>
      
      {result && (
        <div className="bg-success/10 text-success px-3 py-2 rounded-lg text-sm font-medium">
          <CheckCircle className="w-4 h-4 inline mr-2" />
          {result}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;