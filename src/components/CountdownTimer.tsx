import { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer when it reaches 00:00:00
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-destructive text-purple-text-foreground px-fluid-sm py-fluid-xs rounded-lg border-2 border-destructive/50 shadow-lg animate-pulse">
      <div className="flex items-center justify-center gap-3">
        <AlertTriangle className="w-5 h-5 animate-bounce" />
        <div className="text-center">
          <p className="text-xs font-bold mb-1">OFERTA EXPIRA EM:</p>
          <div className="flex items-center gap-2 text-lg font-black">
            <div className="bg-destructive-foreground text-purple-text px-2 py-1 rounded font-mono">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <span>:</span>
            <div className="bg-destructive-foreground text-purple-text px-2 py-1 rounded font-mono">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span>:</span>
            <div className="bg-destructive-foreground text-purple-text px-2 py-1 rounded font-mono">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
        </div>
        <Clock className="w-5 h-5 animate-spin" />
      </div>
      <p className="text-xs text-center mt-1 font-bold">
        Depois volta para $27!
      </p>
    </div>
  );
};

export default CountdownTimer;
