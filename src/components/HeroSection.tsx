import { CountdownTimer } from './CountdownTimer';
import { useResistance } from '../context/ResistanceContext';

export function HeroSection() {
  const { isGlitched } = useResistance();

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden diagonal-lines transition-colors duration-1000 ${
        isGlitched ? 'bg-[#2a2218]' : 'bg-regime-black'
      }`}
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: isGlitched
              ? `radial-gradient(circle at 25% 25%, rgba(45,90,39,0.3) 0%, transparent 50%),
                 radial-gradient(circle at 75% 75%, rgba(45,90,39,0.2) 0%, transparent 50%)`
              : `radial-gradient(circle at 25% 25%, rgba(139,0,0,0.3) 0%, transparent 50%),
                 radial-gradient(circle at 75% 75%, rgba(139,0,0,0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Corner decorations */}
      <div
        className={`absolute top-20 sm:top-24 left-3 sm:left-6 text-[10px] sm:text-xs tracking-[0.3em] uppercase hidden sm:block transition-colors duration-1000 ${
          isGlitched ? 'text-[#4a6741]/30 resistance-fade' : 'text-regime-crimson/30'
        }`}
        style={{ writingMode: 'vertical-rl' }}
      >
        {isGlitched ? 'INTERCEPTED • DECODED • FREQUENCY 7.31' : 'CLASSIFIED • EYES ONLY • DIRECTIVE 001'}
      </div>
      <div
        className={`absolute top-20 sm:top-24 right-3 sm:right-6 text-[10px] sm:text-xs tracking-[0.3em] uppercase transition-colors duration-1000 ${
          isGlitched ? 'text-[#4a6741]/30 resistance-fade' : 'text-regime-crimson/30'
        }`}
        style={{ writingMode: 'vertical-rl' }}
      >
        {isGlitched ? 'THE TRUTH IS HIDDEN IN PLAIN SIGHT' : 'THE MOTHERLAND SEES ALL'}
      </div>

      {/* Star / resistance decorative elements */}
      <div className={`absolute top-24 sm:top-28 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 transition-colors duration-1000 ${
        isGlitched ? 'text-[#4a6741]/40' : 'text-regime-crimson/40'
      }`}>
        <span className={`w-8 sm:w-16 h-px ${isGlitched ? 'bg-[#4a6741]/40' : 'bg-regime-crimson/40'}`} />
        {isGlitched ? (
          <>
            <span className="text-base sm:text-xl">◇</span>
            <span className="text-lg sm:text-2xl">○</span>
            <span className="text-xl sm:text-3xl">△</span>
            <span className="text-lg sm:text-2xl">○</span>
            <span className="text-base sm:text-xl">◇</span>
          </>
        ) : (
          <>
            <span className="text-base sm:text-xl">★</span>
            <span className="text-lg sm:text-2xl">★</span>
            <span className="text-xl sm:text-3xl">★</span>
            <span className="text-lg sm:text-2xl">★</span>
            <span className="text-base sm:text-xl">★</span>
          </>
        )}
        <span className={`w-8 sm:w-16 h-px ${isGlitched ? 'bg-[#4a6741]/40' : 'bg-regime-crimson/40'}`} />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full px-4 sm:px-6 pt-36 sm:pt-40 pb-16 sm:pb-20">
        <CountdownTimer />
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className={`h-1 transition-colors duration-1000 ${isGlitched ? 'bg-[#4a6741]' : 'bg-regime-crimson'}`} />
        <div className={`py-2 sm:py-3 flex justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase overflow-hidden transition-colors duration-1000 ${
          isGlitched ? 'bg-[#1e1810]/90 text-[#c4b998]/50' : 'bg-regime-dark/90 text-regime-offwhite/50'
        }`}>
          {isGlitched ? (
            <>
              <span className="resistance-fade">Signal Intercepted</span>
              <span className="text-[#4a6741]">◇</span>
              <span className="resistance-fade-delay-1">Network: Active</span>
              <span className="text-[#4a6741] hidden sm:inline">◇</span>
              <span className="hidden sm:inline resistance-fade-delay-2">Keep Reading</span>
            </>
          ) : (
            <>
              <span>Sector 7-G Active</span>
              <span className="text-regime-crimson">◆</span>
              <span>Threat Level: Crimson</span>
              <span className="text-regime-crimson hidden sm:inline">◆</span>
              <span className="hidden sm:inline">All Citizens Report</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
