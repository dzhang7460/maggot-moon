import { useState, useEffect } from 'react';
import { useResistance } from '../context/ResistanceContext';

export function CountdownTimer() {
  const { isGlitched } = useResistance();

  const [targetDate] = useState(() => {
    const target = new Date();
    target.setFullYear(target.getFullYear() + 1);
    target.setMonth(target.getMonth() + 6);
    return target.getTime();
  });

  const [timeLeft, setTimeLeft] = useState({
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, targetDate - now);
      const totalSeconds = Math.floor(diff / 1000);
      setTimeLeft({
        total: totalSeconds,
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const formatNumber = (n: number, digits = 2) =>
    n.toString().padStart(digits, '0');

  const totalSecondsDisplay = timeLeft.total.toLocaleString();

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Main label */}
      <div className="text-center mb-6 sm:mb-8">
        <div className={`inline-block mb-4 sm:mb-6 transition-colors duration-1000 ${
          isGlitched
            ? 'border-2 border-[#4a6741] px-4 py-1 resistance-fade'
            : 'stamp-effect'
        }`}>
          <span className={`text-xs sm:text-sm tracking-[0.4em] uppercase ${
            isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'
          }`}>
            {isGlitched ? '◇ Intercepted Transmission ◇' : '◆ Classified Directive 7-Alpha ◆'}
          </span>
        </div>

        {isGlitched ? (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[#c4b998] mb-3 sm:mb-4 resistance-fade-delay-1">
              Seconds Until
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] sm:tracking-[0.3em] uppercase leading-none resistance-fade-delay-2 resistance-heading typewriter-cursor"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              They Find Us
            </h1>
            <p className="mt-4 sm:mt-6 text-[#c4b998]/70 text-sm sm:text-base max-w-2xl mx-auto resistance-fade-delay-3 leading-relaxed">
              The "Moon Mission" is a cover. The funds are being funneled into a mass surveillance weapon.
              There is no lunar colony. There never was. Every second this countdown runs, another freedom dies.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-[0.3em] sm:tracking-[0.5em] uppercase text-regime-offwhite mb-3 sm:mb-4">
              Seconds Until
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] sm:tracking-[0.3em] uppercase text-regime-crimson animate-pulse-red leading-none">
              Lunar Glory
            </h1>
          </>
        )}
      </div>

      {/* Giant seconds number */}
      <div className="text-center mb-6 sm:mb-10 relative">
        <div className={`absolute inset-0 border-t-4 border-b-4 transition-colors duration-1000 ${
          isGlitched ? 'bg-[#2d5a27]/5 border-[#4a6741]' : 'bg-regime-red/5 border-regime-crimson'
        }`} />
        <div className="relative py-6 sm:py-8 md:py-10">
          <div
            className={`text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold leading-none tracking-wider ${
              isGlitched
                ? 'text-[#8faa7e] resistance-fade'
                : 'text-regime-offwhite animate-flicker'
            }`}
            style={{
              fontFamily: isGlitched ? "'Courier New', monospace" : "'Impact', 'Arial Black', sans-serif",
              textShadow: isGlitched
                ? '0 0 40px rgba(45,90,39,0.4), 0 0 80px rgba(45,90,39,0.2)'
                : '0 0 40px rgba(204,0,0,0.4), 0 0 80px rgba(139,0,0,0.2)',
            }}
          >
            {totalSecondsDisplay}
          </div>
          <div className={`text-sm sm:text-lg md:text-xl tracking-[0.5em] sm:tracking-[1em] uppercase mt-2 sm:mt-4 ${
            isGlitched ? 'text-[#6b9a5b] resistance-fade-delay-1' : 'text-regime-crimson'
          }`}>
            {isGlitched ? 'Seconds of Stolen Freedom' : 'Total Seconds Remaining'}
          </div>
        </div>
      </div>

      {/* Breakdown units */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto">
        {[
          { label: isGlitched ? 'DAYS LOST' : 'DAYS', value: formatNumber(timeLeft.days, 3) },
          { label: isGlitched ? 'HOURS DARK' : 'HOURS', value: formatNumber(timeLeft.hours) },
          { label: isGlitched ? 'MIN SILENT' : 'MINUTES', value: formatNumber(timeLeft.minutes) },
          { label: isGlitched ? 'SEC LEFT' : 'SECONDS', value: formatNumber(timeLeft.seconds) },
        ].map((unit, i) => (
          <div
            key={unit.label}
            className={`border-2 p-3 sm:p-4 md:p-6 text-center relative group transition-all duration-1000 ${
              isGlitched
                ? `border-[#4a6741] bg-[#1e1810]/80 hover:bg-[#2d5a27]/10 resistance-fade-delay-${i + 1}`
                : 'border-regime-crimson bg-regime-dark/80 hover:bg-regime-red/10'
            }`}
          >
            <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${
              isGlitched ? 'border-[#5a7a50]' : 'border-regime-blood'
            }`} />
            <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${
              isGlitched ? 'border-[#5a7a50]' : 'border-regime-blood'
            }`} />
            <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${
              isGlitched ? 'border-[#5a7a50]' : 'border-regime-blood'
            }`} />
            <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${
              isGlitched ? 'border-[#5a7a50]' : 'border-regime-blood'
            }`} />

            <div
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
                isGlitched ? 'text-[#c4b998]' : 'text-regime-offwhite'
              }`}
              style={{ fontFamily: isGlitched ? "'Courier New', monospace" : "'Impact', 'Arial Black', sans-serif" }}
            >
              {unit.value}
            </div>
            <div className={`text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase mt-2 ${
              isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'
            }`}>
              {unit.label}
            </div>
          </div>
        ))}
      </div>

      {/* Warning line */}
      <div className="text-center mt-6 sm:mt-10">
        <div className={`inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase ${
          isGlitched ? 'text-[#6b9a5b]/80 resistance-fade-delay-4' : 'text-regime-crimson/80'
        }`}>
          <span className={`w-6 sm:w-10 h-px ${isGlitched ? 'bg-[#4a6741]/50' : 'bg-regime-crimson/50'}`} />
          {isGlitched ? 'Every second matters — spread the word' : 'Deviation from schedule is treason'}
          <span className={`w-6 sm:w-10 h-px ${isGlitched ? 'bg-[#4a6741]/50' : 'bg-regime-crimson/50'}`} />
        </div>
      </div>
    </div>
  );
}
