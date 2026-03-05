import { useResistance } from '../context/ResistanceContext';

export function LeaderSection() {
  const { isGlitched } = useResistance();

  const accentColor = isGlitched ? '#4a6741' : undefined;

  const stats = isGlitched
    ? [
        { label: 'Years of Tyranny', value: '47', sub: 'Of suffering' },
        { label: 'Citizens Disappeared', value: '240K+', sub: 'Never Forget' },
        { label: 'Real Loyalty', value: '12.3%', sub: 'The rest are afraid' },
        { label: 'Decrees Defied', value: '1,847', sub: 'In secret' },
      ]
    : [
        { label: 'Years of Glorious Rule', value: '47', sub: 'Uninterrupted' },
        { label: 'Enemies Vanquished', value: '∞', sub: 'And Counting' },
        { label: 'Loyalty Index', value: '99.7%', sub: 'Certified Pure' },
        { label: 'Decrees Issued', value: '12,847', sub: 'All Obeyed' },
      ];

  return (
    <section id="leader" className={`relative py-16 sm:py-20 md:py-28 overflow-hidden transition-colors duration-1000 ${
      isGlitched ? 'bg-[#1e1810]' : 'bg-regime-dark'
    }`}>
      {/* Red/Green accent top border */}
      <div className={`absolute top-0 left-0 right-0 h-2 ${
        isGlitched
          ? 'bg-gradient-to-r from-[#1e1810] via-[#4a6741] to-[#1e1810]'
          : 'bg-gradient-to-r from-regime-black via-regime-crimson to-regime-black'
      }`} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <span className={`w-8 sm:w-16 h-px ${isGlitched ? 'bg-[#4a6741]' : 'bg-regime-crimson'}`} />
            <span className={`tracking-[0.3em] sm:tracking-[0.5em] uppercase text-xs sm:text-sm ${
              isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'
            }`}>
              {isGlitched ? 'Dossier I' : 'Section I'}
            </span>
            <span className={`w-8 sm:w-16 h-px ${isGlitched ? 'bg-[#4a6741]' : 'bg-regime-crimson'}`} />
          </div>
          <h2
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] sm:tracking-[0.3em] uppercase ${
              isGlitched ? 'text-[#8faa7e] resistance-fade resistance-heading' : 'text-regime-offwhite'
            }`}
            style={{ fontFamily: isGlitched ? "'Courier New', monospace" : "'Impact', 'Arial Black', sans-serif" }}
          >
            {isGlitched ? 'The Tyrant' : 'Our Leader'}
          </h2>
          <div className={`mt-3 sm:mt-4 text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] uppercase ${
            isGlitched ? 'text-[#6b9a5b] resistance-fade-delay-1' : 'text-regime-crimson'
          }`}>
            {isGlitched
              ? 'War Criminal • Mass Murderer • Delusional Narcissist'
              : 'Supreme Commander • Eternal Protector • Voice of the Motherland'}
          </div>
        </div>

        {/* Leader portrait area */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Portrait placeholder */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className={`w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 border-4 flex items-center justify-center relative overflow-hidden transition-colors duration-1000 ${
                isGlitched ? 'border-[#4a6741] bg-[#2a2218]' : 'border-regime-crimson bg-regime-black'
              }`}>
                <div className={`absolute inset-0 ${
                  isGlitched
                    ? 'bg-gradient-to-b from-[#2d5a27]/20 to-[#2a2218]'
                    : 'bg-gradient-to-b from-regime-red/20 to-regime-black'
                }`} />
                <div className="relative text-center">
                  {isGlitched ? (
                    <>
                      <div className="text-5xl sm:text-6xl md:text-7xl text-[#4a6741]/60 mb-2 resistance-fade"
                        style={{ fontFamily: "'Courier New', monospace" }}
                      >
                        ✕
                      </div>
                      <div className="w-20 sm:w-24 h-20 sm:h-24 mx-auto rounded-full bg-[#c4b998]/10 border-2 border-[#4a6741]/30 mb-3 sm:mb-4 flex items-center justify-center relative">
                        <svg viewBox="0 0 100 100" className="w-14 sm:w-16 h-14 sm:h-16 text-[#c4b998]/20">
                          <circle cx="50" cy="35" r="18" fill="currentColor" />
                          <path d="M20 90 Q20 60 50 55 Q80 60 80 90" fill="currentColor" />
                        </svg>
                        {/* X through the portrait */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-0.5 bg-[#8faa7e]/60 rotate-45" />
                          <div className="absolute w-full h-0.5 bg-[#8faa7e]/60 -rotate-45" />
                        </div>
                      </div>
                      <div className="text-[#8faa7e]/80 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase resistance-fade-delay-1"
                        style={{ fontFamily: "'Courier New', monospace" }}
                      >
                        [Criminal #001]
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-7xl sm:text-8xl md:text-9xl text-regime-crimson/50 mb-2"
                        style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
                      >
                        ★
                      </div>
                      <div className="w-20 sm:w-24 h-20 sm:h-24 mx-auto rounded-full bg-regime-offwhite/10 border-2 border-regime-crimson/30 mb-3 sm:mb-4 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-14 sm:w-16 h-14 sm:h-16 text-regime-offwhite/20">
                          <circle cx="50" cy="35" r="18" fill="currentColor" />
                          <path d="M20 90 Q20 60 50 55 Q80 60 80 90" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="text-regime-offwhite/60 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase">
                        [Redacted]
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* Frame corners */}
              {['-top-2 -left-2 border-t-4 border-l-4', '-top-2 -right-2 border-t-4 border-r-4', '-bottom-2 -left-2 border-b-4 border-l-4', '-bottom-2 -right-2 border-b-4 border-r-4'].map((pos) => (
                <div key={pos} className={`absolute w-6 h-6 ${pos} ${isGlitched ? 'border-[#5a7a50]' : 'border-regime-blood'}`} />
              ))}
              {/* Stamp */}
              <div className={`absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 transform border-2 px-2 sm:px-3 py-1 ${
                isGlitched
                  ? 'rotate-[-8deg] border-[#4a6741] bg-[#2a2218] resistance-fade-delay-2'
                  : 'rotate-12 border-regime-crimson bg-regime-black'
              }`}>
                <span className={`text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold ${
                  isGlitched ? 'text-[#8faa7e]' : 'text-regime-crimson'
                }`}>
                  {isGlitched ? 'Wanted' : 'Approved'}
                </span>
              </div>
            </div>
          </div>

          {/* Leader info */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-8">
            {/* Quote */}
            <blockquote className={`border-l-4 pl-4 sm:pl-6 py-2 sm:py-4 ${
              isGlitched ? 'border-[#4a6741] resistance-fade' : 'border-regime-crimson'
            }`}>
              <p className={`text-lg sm:text-xl md:text-2xl italic leading-relaxed ${
                isGlitched ? 'text-[#c4b998]' : 'text-regime-offwhite'
              }`}
                style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
              >
                {isGlitched
                  ? '"He speaks of the moon to distract from the blood on his hands. 240,000 people didn\'t just disappear — they were silenced. We remember every name."'
                  : '"The moon does not belong to the sky. It belongs to the Motherland. And we shall claim what is ours — with iron will and unbreakable resolve."'}
              </p>
              <footer className={`mt-3 sm:mt-4 text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] uppercase ${
                isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'
              }`}>
                {isGlitched
                  ? '— Cell Leader "Sparrow," Resistance Broadcast #412'
                  : '— Supreme Commander, Address to the Collective, Year 47'}
              </footer>
            </blockquote>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`border p-3 sm:p-4 transition-all duration-300 ${
                    isGlitched
                      ? `border-[#4a6741]/50 bg-[#2a2218]/50 hover:border-[#4a6741] hover:bg-[#2d5a27]/5 resistance-fade-delay-${Math.min(i + 1, 4)}`
                      : 'border-regime-crimson/50 bg-regime-black/50 hover:border-regime-crimson hover:bg-regime-red/5'
                  }`}
                >
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
                    isGlitched ? 'text-[#c4b998]' : 'text-regime-offwhite'
                  }`}
                    style={{ fontFamily: isGlitched ? "'Courier New', monospace" : "'Impact', 'Arial Black', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className={`text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-1 ${
                    isGlitched ? 'text-[#c4b998]/80' : 'text-regime-offwhite/80'
                  }`}>
                    {stat.label}
                  </div>
                  <div className={`text-[10px] sm:text-xs tracking-[0.2em] uppercase mt-0.5 ${
                    isGlitched ? 'text-[#6b9a5b]/60' : 'text-regime-crimson/60'
                  }`}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Loyalty pledge / Resistance oath */}
            <div className={`border-2 p-4 sm:p-6 text-center transition-colors duration-1000 ${
              isGlitched
                ? 'border-[#4a6741] bg-[#2d5a27]/10 resistance-fade-delay-3'
                : 'border-regime-crimson bg-regime-red/10'
            }`}>
              <div className={`text-sm sm:text-base md:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3 ${
                isGlitched ? 'text-[#8faa7e]' : 'text-regime-offwhite'
              }`}
                style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
              >
                {isGlitched ? 'The Resistance Oath' : 'Daily Loyalty Oath'}
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed italic ${
                isGlitched ? 'text-[#c4b998]/80' : 'text-regime-offwhite/80'
              }`}
                style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
              >
                {isGlitched
                  ? '"I pledge to remember. I pledge to resist. I will not comply with tyranny. I will not forget the disappeared. My mind is my own. My voice will not be silenced. Until every citizen is free."'
                  : '"I pledge my body, mind, and spirit to the Supreme Commander. Their vision is my vision. Their will is my will. In the Motherland I trust. In the Leader I believe. Forever and always."'}
              </p>
              <div className={`mt-3 sm:mt-4 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase ${
                isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'
              }`}>
                {isGlitched ? '◇ Whisper at midnight ◇' : '★ Recite at 0600 hours daily ★'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-2 ${
        isGlitched
          ? 'bg-gradient-to-r from-[#1e1810] via-[#4a6741] to-[#1e1810]'
          : 'bg-gradient-to-r from-regime-black via-regime-crimson to-regime-black'
      }`} style={accentColor ? { borderColor: accentColor } : {}} />
    </section>
  );
}
