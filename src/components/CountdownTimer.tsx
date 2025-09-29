import { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 9,
    seconds: 0
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
          return { hours: 0, minutes: 9, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-destructive text-purple-text-foreground px-fluid-sm py-fluid-xs rounded-lg border-2 border-destructive/50 shadow-lg">
      <div className="text-center font-bold mb-2">
        <p className="text-base">LA OFERTA EXPIRA EN:</p>
      </div>
      <div className="flex items-center justify-center gap-2 text-xl font-black mb-2">
        <div className="bg-destructive-foreground text-purple-text px-3 py-2 rounded-md font-mono min-w-[2.5rem] text-center">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <span className="text-xl">:</span>
        <div className="bg-destructive-foreground text-purple-text px-3 py-2 rounded-md font-mono min-w-[2.5rem] text-center">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <span className="text-xl">:</span>
        <div className="bg-destructive-foreground text-purple-text px-3 py-2 rounded-md font-mono min-w-[2.5rem] text-center">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
      </div>
      <p className="text-sm text-center mt-1 font-bold">
        ¡Después vuelve a $287!
      </p>
    </div>
  );
};

export default CountdownTimer;
