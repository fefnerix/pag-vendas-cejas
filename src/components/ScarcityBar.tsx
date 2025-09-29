import { useState, useEffect } from 'react';

const ScarcityBar = () => {
  const [progress, setProgress] = useState(94);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 106) {
          return 106;
        }
        return prev + 1;
      });
    }, 2500); // Alterado para 2,5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-transparent border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="text-center mb-3">
          <p className="text-black font-semibold">
            {progress}% dos cupons já foram usados!
          </p>
        </div>
        
        <div className="w-full bg-destructive/20 rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-destructive rounded-full transition-all duration-1000 ease-in-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ScarcityBar;
