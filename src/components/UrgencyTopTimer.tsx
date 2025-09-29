import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const UrgencyTopTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 9, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Check if there's a stored end time in sessionStorage
    const storedEndTime = sessionStorage.getItem('urgency_timer_end');
    let endTime: number;

    if (storedEndTime) {
      endTime = parseInt(storedEndTime, 10);
    } else {
      // Set 9 minutes from now (540,000 ms)
      endTime = Date.now() + 540000;
      sessionStorage.setItem('urgency_timer_end', endTime.toString());
    }

    const updateTimer = () => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Update immediately
    updateTimer();

    // Update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToCTA = () => {
    const ctaElement = document.getElementById('cta');
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed inset-x-0 top-0 z-50 h-14 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 text-white"
      role="region"
      aria-label="Barra de urgencia"
      style={{ height: '56px' }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="flex items-center gap-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider opacity-85">
            LA PROMOCIÓN TERMINA EN:
          </span>

          <div aria-live="polite">
            {isExpired ? (
              <span className="text-sm sm:text-base font-bold text-white">
                OFERTA FINALIZADA
              </span>
            ) : (
              <>
                <div className="sm:hidden flex items-center gap-1 font-black text-xl tabular-nums">
                  <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="opacity-60">:</span>
                  <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-2xl font-black tabular-nums">
                  {timeLeft.days > 0 && (
                    <>
                      <div className="bg-white/10 border border-white/30 rounded-full px-3 py-1">
                        <span>{timeLeft.days}</span>
                        <span className="text-sm ml-1 opacity-75">D</span>
                      </div>
                      <span className="opacity-60 text-lg">•</span>
                    </>
                  )}
                  
                  {(timeLeft.days > 0 || timeLeft.hours > 0) && (
                    <>
                      <div className="bg-white/10 border border-white/30 rounded-full px-3 py-1">
                        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                        <span className="text-sm ml-1 opacity-75">H</span>
                      </div>
                      <span className="opacity-60 text-lg">•</span>
                    </>
                  )}
                  
                  <div className="bg-white/10 border border-white/30 rounded-full px-3 py-1">
                    <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-sm ml-1 opacity-75">M</span>
                  </div>
                  <span className="opacity-60 text-lg">•</span>
                  <div className="bg-white/10 border border-white/30 rounded-full px-3 py-1">
                    <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-sm ml-1 opacity-75">S</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {!isExpired && (
            <div className="hidden md:block ml-4">
              <button
                onClick={scrollToCTA}
                className="bg-white text-pink-700 font-extrabold text-sm px-4 py-2 rounded-full hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-colors duration-200"
              >
                QUIERO PARTICIPAR
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UrgencyTopTimer;