import { useResistance } from '../context/ResistanceContext';

export function MoonSection() {
  const { isGlitched } = useResistance();

  const phases = isGlitched
    ? [
        {
          phase: 'PHASE I',
          title: 'MASS SURVEILLANCE',
          status: 'DEPLOYED',
          statusColor: 'text-red-400 border-red-400',
          desc: '47 "satellites" are actually orbital surveillance platforms. They track every citizen. Every movement. Every gathering. This was never about space.',
          progress: 100,
        },
        {
          phase: 'PHASE II',
          title: 'WEAPON DEVELOPMENT',
          status: 'ACTIVE',
          statusColor: 'text-red-400 border-red-400',
          desc: 'The "unmanned probes" are delivering components for an orbital weapons platform. Intercepted blueprints confirm directed-energy capability.',
          progress: 100,
        },
        {
          phase: 'PHASE III',
          title: 'POLITICAL PURGE',
          status: 'IN PROGRESS',
          statusColor: 'text-[#8faa7e] border-[#8faa7e] animate-pulse',
          desc: '"Cosmonaut selection" is code for identifying potential dissidents in the military. Those who fail "selection" are never seen again.',
          progress: 67,
        },
        {
          phase: 'PHASE IV',
          title: 'TOTAL CONTROL',
          status: 'WE MUST STOP THIS',
          statusColor: 'text-[#c4b998]/50 border-[#c4b998]/30',
          desc: '"Lunar Base Alpha" is actually a bunker complex for regime leadership. When the weapon is ready, they will hold the entire world hostage.',
          progress: 0,
        },
      ]
    : [
        {
          phase: 'PHASE I',
          title: 'ORBITAL DOMINANCE',
          status: 'COMPLETE',
          statusColor: 'text-green-500 border-green-500',
          desc: 'Deployment of 47 surveillance satellites. Full spectrum coverage of all hostile territories achieved.',
          progress: 100,
        },
        {
          phase: 'PHASE II',
          title: 'LUNAR RECONNAISSANCE',
          status: 'COMPLETE',
          statusColor: 'text-green-500 border-green-500',
          desc: 'Unmanned probes have secured landing zones. Mineral deposits confirmed. The moon yields to the Motherland.',
          progress: 100,
        },
        {
          phase: 'PHASE III',
          title: 'COSMONAUT SELECTION',
          status: 'ACTIVE',
          statusColor: 'text-regime-blood border-regime-blood animate-pulse-red',
          desc: 'The purest citizens undergo rigorous selection. Only the most loyal shall carry our flag to lunar soil.',
          progress: 67,
        },
        {
          phase: 'PHASE IV',
          title: 'LUNAR COLONIZATION',
          status: 'PENDING',
          statusColor: 'text-regime-offwhite/50 border-regime-offwhite/30',
          desc: 'Construction of Motherland Lunar Base Alpha. Permanent presence. Permanent dominion. The moon is ours.',
          progress: 0,
        },
      ];

  const missionStats = isGlitched
    ? [
        { label: 'Surveillance Units', value: '47' },
        { label: 'Citizens Tracked', value: 'ALL' },
        { label: 'Days to Weapon', value: '547' },
        { label: 'Budget Stolen', value: '4.7T' },
        { label: 'Actual Mission', value: 'NONE' },
        { label: 'Cover-up Level', value: '■■■' },
      ]
    : [
        { label: 'Launch Vehicles', value: '12' },
        { label: 'Cosmonauts Selected', value: '200' },
        { label: 'Days to Launch', value: '547' },
        { label: 'Payload (Tonnes)', value: '4,700' },
        { label: 'Success Probability', value: '100%' },
        { label: 'Budget (Billions)', value: '■■■' },
      ];

  return (
    <section id="moon" className={`relative py-16 sm:py-20 md:py-28 overflow-hidden transition-colors duration-1000 ${
      isGlitched ? 'bg-[#2a2218]' : 'bg-regime-black'
    }`}>
      {/* Star background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${isGlitched ? 'bg-[#4a6741]/30' : 'bg-regime-offwhite/30'}`}
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
              opacity: ((i % 5) + 1) * 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <span className={`w-8 sm:w-16 h-px ${isGlitched ? 'bg-[#4a6741]' : 'bg-regime-crimson'}`} />
            <span className={`tracking-[0.3em] sm:tracking-[0.5em] uppercase text-xs sm:text-sm ${
              isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'
            }`}>
              {isGlitched ? 'Dossier II — Leaked' : 'Section II'}
            </span>
            <span className={`w-8 sm:w-16 h-px ${isGlitched ? 'bg-[#4a6741]' : 'bg-regime-crimson'}`} />
          </div>
          <h2
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] sm:tracking-[0.3em] uppercase ${
              isGlitched ? 'text-[#8faa7e] resistance-fade resistance-heading' : 'text-regime-offwhite'
            }`}
            style={{ fontFamily: isGlitched ? "'Courier New', monospace" : "'Impact', 'Arial Black', sans-serif" }}
          >
            {isGlitched ? 'The Big Lie' : 'Moon Mission'}
          </h2>
          <div className={`mt-3 sm:mt-4 text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] uppercase ${
            isGlitched ? 'text-[#6b9a5b] resistance-fade-delay-1' : 'text-regime-crimson'
          }`}>
            {isGlitched
              ? 'There Is No Moon Mission • Intercepted Documents • Read The Truth'
              : 'Operation Lunar Dominion • Top Secret • Clearance Level: Obsidian'}
          </div>
        </div>

        {/* Moon / data grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          {/* Moon illustration */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <div className="relative">
              <div
                className={`w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full border-4 relative overflow-hidden transition-colors duration-1000 ${
                  isGlitched ? 'border-[#4a6741]' : 'border-regime-crimson'
                }`}
                style={{
                  background: isGlitched
                    ? 'radial-gradient(circle at 35% 35%, #6b9a5b 0%, #3a5a30 30%, #2a4020 60%, #1a2a15 100%)'
                    : 'radial-gradient(circle at 35% 35%, #E8E4D9 0%, #999 30%, #666 60%, #333 100%)',
                  boxShadow: isGlitched
                    ? '0 0 60px rgba(45,90,39,0.3), inset -20px -20px 40px rgba(0,0,0,0.5)'
                    : '0 0 60px rgba(139,0,0,0.3), inset -20px -20px 40px rgba(0,0,0,0.5)',
                }}
              >
                <div className="absolute w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-black/20 top-[20%] left-[25%]" />
                <div className="absolute w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-black/15 top-[45%] left-[55%]" />
                <div className="absolute w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-black/20 top-[65%] left-[35%]" />
                <div className="absolute w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-black/10 top-[30%] left-[65%]" />

                {isGlitched ? (
                  <>
                    {/* "FAKE" stamp on moon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500/60 rotate-[-20deg] tracking-[0.2em]"
                        style={{ fontFamily: "'Courier New', monospace" }}
                      >
                        FAKE
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="absolute bottom-[22%] right-[28%]">
                    <div className="w-px h-5 sm:h-6 bg-regime-offwhite" />
                    <div className="absolute top-0 left-px w-3 sm:w-4 h-2 sm:h-3 bg-regime-crimson border border-regime-blood" />
                  </div>
                )}
              </div>
              {/* Orbit rings */}
              <div className={`absolute -inset-4 sm:-inset-6 border rounded-full ${
                isGlitched ? 'border-[#4a6741]/20' : 'border-regime-crimson/20'
              }`} style={{ transform: 'rotateX(60deg)' }} />
              <div className={`absolute -inset-8 sm:-inset-10 border rounded-full ${
                isGlitched ? 'border-[#4a6741]/10' : 'border-regime-crimson/10'
              }`} style={{ transform: 'rotateX(60deg)' }} />
              <div className={`absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase whitespace-nowrap ${
                isGlitched ? 'text-[#6b9a5b] resistance-fade' : 'text-regime-crimson'
              }`}>
                {isGlitched ? 'A convenient distraction' : 'Property of the Motherland'}
              </div>
            </div>
          </div>

          {/* Mission statistics */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {missionStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`border p-3 sm:p-4 text-center transition-all duration-300 ${
                    isGlitched
                      ? `border-[#4a6741]/40 bg-[#1e1810]/60 hover:border-[#4a6741] hover:bg-[#2d5a27]/5 resistance-fade-delay-${Math.min(i + 1, 4)}`
                      : 'border-regime-crimson/40 bg-regime-dark/60 hover:border-regime-crimson hover:bg-regime-red/5'
                  }`}
                >
                  <div className={`text-xl sm:text-2xl md:text-3xl font-bold ${
                    isGlitched ? 'text-[#c4b998]' : 'text-regime-offwhite'
                  }`}
                    style={{ fontFamily: isGlitched ? "'Courier New', monospace" : "'Impact', 'Arial Black', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className={`text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-1 ${
                    isGlitched ? 'text-[#c4b998]/60' : 'text-regime-offwhite/60'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className={`border p-3 sm:p-4 transition-colors duration-1000 ${
              isGlitched ? 'border-[#4a6741]/40 bg-[#1e1810]/60 resistance-fade-delay-2' : 'border-regime-crimson/40 bg-regime-dark/60'
            }`}>
              <div className={`text-xs sm:text-sm tracking-wider leading-relaxed ${
                isGlitched ? 'text-[#c4b998]/80' : 'text-regime-offwhite/80'
              }`}
                style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
              >
                <span className={`font-bold ${isGlitched ? 'text-[#8faa7e]' : 'text-regime-crimson'}`}>
                  {isGlitched ? 'INTERCEPTED MEMO:' : 'MISSION BRIEFING:'}
                </span>{' '}
                {isGlitched
                  ? 'Internal documents obtained by resistance operatives confirm what we\'ve suspected: there is no moon mission. The 4,700 tonnes of "payload" are weapons components. The 200 "cosmonauts" are political prisoners being used as test subjects. The 547-day countdown is to weapons deployment. We must act before it reaches zero.'
                  : 'The Motherland\'s lunar program represents the pinnacle of collective achievement. Under the Supreme Commander\'s vision, we shall plant our banner upon the lunar surface, establishing eternal dominion over the celestial sphere. All resources have been allocated. All personnel have been conscripted. Failure is not a permissible outcome.'}
              </div>
            </div>
          </div>
        </div>

        {/* Phase timeline */}
        <div className="space-y-4 sm:space-y-6">
          <div className="text-center mb-6 sm:mb-8">
            <div className={`text-lg sm:text-xl md:text-2xl tracking-[0.3em] sm:tracking-[0.5em] uppercase ${
              isGlitched ? 'text-[#8faa7e] resistance-fade' : 'text-regime-offwhite'
            }`}
              style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
            >
              {isGlitched ? 'What They\'re Really Doing' : 'Mission Phases'}
            </div>
          </div>

          {phases.map((phase, index) => (
            <div
              key={phase.phase}
              className={`border p-4 sm:p-6 relative transition-all duration-300 group ${
                isGlitched
                  ? `border-[#4a6741]/30 bg-[#1e1810]/40 hover:border-[#4a6741] resistance-fade-delay-${Math.min(index + 1, 4)}`
                  : 'border-regime-crimson/30 bg-regime-dark/40 hover:border-regime-crimson'
              }`}
            >
              {index < phases.length - 1 && (
                <div className={`absolute -bottom-4 sm:-bottom-6 left-6 sm:left-8 w-px h-4 sm:h-6 ${
                  isGlitched ? 'bg-[#4a6741]/30' : 'bg-regime-crimson/30'
                }`} />
              )}

              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className={`text-xs sm:text-sm tracking-[0.3em] uppercase font-bold ${
                    isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'
                  }`}>
                    {phase.phase}
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                    <h3
                      className={`text-xl sm:text-2xl md:text-3xl tracking-[0.1em] sm:tracking-[0.2em] uppercase ${
                        isGlitched ? 'text-[#c4b998]' : 'text-regime-offwhite'
                      }`}
                      style={{ fontFamily: isGlitched ? "'Courier New', monospace" : "'Impact', 'Arial Black', sans-serif" }}
                    >
                      {phase.title}
                    </h3>
                    <span className={`inline-block self-start px-2 sm:px-3 py-0.5 sm:py-1 border text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase ${phase.statusColor}`}>
                      {phase.status}
                    </span>
                  </div>
                  <p className={`text-xs sm:text-sm tracking-wider leading-relaxed mb-3 sm:mb-4 ${
                    isGlitched ? 'text-[#c4b998]/60' : 'text-regime-offwhite/60'
                  }`}
                    style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
                  >
                    {phase.desc}
                  </p>
                  <div className={`h-1.5 sm:h-2 border ${
                    isGlitched ? 'bg-[#352c20] border-[#4a6741]/30' : 'bg-regime-gray border-regime-crimson/30'
                  }`}>
                    <div
                      className={`h-full transition-all duration-1000 ${
                        isGlitched ? 'bg-[#4a6741]' : 'bg-regime-crimson'
                      }`}
                      style={{ width: `${phase.progress}%` }}
                    />
                  </div>
                  <div className={`text-right text-[10px] sm:text-xs tracking-wider mt-1 ${
                    isGlitched ? 'text-[#6b9a5b]/60' : 'text-regime-crimson/60'
                  }`}>
                    {phase.progress}% {isGlitched ? 'EXPOSED' : 'COMPLETE'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
