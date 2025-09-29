import { useState, useEffect } from 'react';

const ScarcityBar = () => {
  const [progress, setProgress] = useState(67);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 89) {
          return 89;
        }
        return prev + 0.5;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50" style={{ height: 'var(--bar-h)' }}>
      <div className="h-full mx-auto max-w-7xl px-2 sm:px-4 flex items-center justify-between text-white bg-black/20 backdrop-blur">
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <div className="min-w-0 flex-1">
            <p className="font-bold text-xs sm:text-sm text-yellow-300 truncate">
              ¡{Math.round(progress)}% de los cupones ya utilizados!
            </p>
            <p className="text-xs text-yellow-200 hidden sm:block">
              Solo quedan {Math.round(100 - progress)}% de plazas con descuento
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="w-16 sm:w-20 bg-destructive/20 rounded-full h-2 sm:h-3 overflow-hidden">
            <div 
              className="h-full bg-destructive rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-yellow-300 whitespace-nowrap">¡Agotándose!</span>
        </div>
      </div>
    </div>
  );
};

export default ScarcityBar;
