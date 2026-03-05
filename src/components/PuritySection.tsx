import { useResistance } from '../context/ResistanceContext';

export function PuritySection() {
  const { isGlitched } = useResistance();

  const updates = isGlitched
    ? [
        {
          id: 'RS-0047',
          date: 'BROADCAST 47.291',
          classification: 'TRUTH',
          classColor: isGlitched ? 'bg-[#2d5a27] text-[#c4b998]' : '',
          title: 'SECTOR 12 "LOYALTY AUDIT" — WHAT REALLY HAPPENED',
          content: '118 people from Sector 12 were taken from their homes at night. "Re-Education Facility Gamma" is a labor camp in the northern wastes. We have testimony from two who escaped. Their families were told they "volunteered for the moon mission."',
          metrics: { missing: '118', camps: '14', escaped: '2' },
        },
        {
          id: 'RS-0046',
          date: 'BROADCAST 47.287',
          classification: 'WARNING',
          classColor: isGlitched ? 'bg-[#4a6741] text-[#c4b998]' : '',
          title: 'THE "THOUGHT MONITORS" ARE LISTENING DEVICES',
          content: '"Neural surveillance arrays" are microphones and cameras hidden in every public space. They don\'t monitor thoughts — they record conversations. If you\'re reading this, assume you are being watched. Use the dead drop locations. Never speak openly.',
          metrics: { devices: '847K', locations: 'Everywhere', safe_zones: '23' },
        },
        {
          id: 'RS-0045',
          date: 'BROADCAST 47.282',
          classification: 'URGENT',
          classColor: isGlitched ? 'bg-red-900 text-[#c4b998]' : '',
          title: 'DO NOT REPORT TO "PURITY ASSESSMENT CENTERS"',
          content: 'The biometric re-registration collects DNA samples. Cross-referencing with seized resistance communications. If your DNA matches any intercepted material, you will be classified as a "Non-Person." Resistance members: use Protocol Seven. Destroy all physical evidence.',
          metrics: { at_risk: '12,400', protocol_7: 'ACTIVE', deadline: '48 HRS' },
        },
        {
          id: 'RS-0044',
          date: 'BROADCAST 47.276',
          classification: 'REMEMBER',
          classColor: isGlitched ? 'bg-[#1e1810] text-[#8faa7e] border border-[#4a6741]' : '',
          title: 'THE "PURITY INDEX" IS A MEASURE OF FEAR',
          content: '97.3% purity means 97.3% of people are too afraid to speak. That extra hour of "authorized recreation" is a reward for silence. But 2.7% are still speaking. We are still here. And that number is growing. The cracks are showing.',
          metrics: { fearful: '97.3%', resisting: '2.7%', growing: 'YES' },
        },
      ]
    : [
        {
          id: 'PU-0047',
          date: 'YEAR 47 • DAY 291',
          classification: 'URGENT',
          classColor: 'bg-regime-blood text-regime-offwhite',
          title: 'SECTOR 12 LOYALTY AUDIT COMPLETE',
          content: 'All residents of Sector 12 have undergone mandatory loyalty recalibration. Compliance rate: 99.2%. The 0.8% have been relocated to Re-Education Facility Gamma. Citizens are reminded that loyalty is not optional.',
          metrics: { compliance: '99.2%', processed: '14,700', relocations: '118' },
        },
        {
          id: 'PU-0046',
          date: 'YEAR 47 • DAY 287',
          classification: 'STANDARD',
          classColor: 'bg-regime-crimson text-regime-offwhite',
          title: 'THOUGHT MONITORING SYSTEM V4.7 DEPLOYED',
          content: 'New neural surveillance arrays have been installed in all public spaces. Citizens should notice improved "peace of mind" and a renewed sense of patriotic clarity. Any headaches should be reported to your sector warden immediately.',
          metrics: { coverage: '100%', sensors: '847,000', efficiency: '+340%' },
        },
        {
          id: 'PU-0045',
          date: 'YEAR 47 • DAY 282',
          classification: 'NOTICE',
          classColor: 'bg-regime-dark text-regime-crimson border border-regime-crimson',
          title: 'MANDATORY GENETIC REGISTRY UPDATE',
          content: 'All citizens must report to their nearest Purity Assessment Center for biometric re-registration. Failure to comply within 72 hours will result in classification as a Non-Person. Carry your identification documents at all times.',
          metrics: { registered: '98.4%', centers: '2,100', deadline: '72 HRS' },
        },
        {
          id: 'PU-0044',
          date: 'YEAR 47 • DAY 276',
          classification: 'CELEBRATION',
          classColor: 'bg-regime-red text-regime-offwhite',
          title: 'PURITY INDEX REACHES HISTORIC HIGH',
          content: 'The Motherland proudly announces a national Purity Index of 97.3% — the highest in recorded history. Citizens are authorized one (1) additional hour of recreation this week. Glory to the purification programs. Glory to the Motherland.',
          metrics: { purity: '97.3%', improvement: '+2.1%', celebrations: 'Authorized' },
        },
      ];

  return (
    <section id="purity" className={`relative py-16 sm:py-20 md:py-28 overflow-hidden diagonal-lines transition-colors duration-1000 ${
      isGlitched ? 'bg-[#1e1810]' : 'bg-regime-dark'
    }`}>
      <div className={`absolute top-0 left-0 right-0 h-2 ${
        isGlitched
          ? 'bg-gradient-to-r from-[#1e1810] via-[#4a6741] to-[#1e1810]'
          : 'bg-gradient-to-r from-regime-black via-regime-crimson to-regime-black'
      }`} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <span className={`w-8 sm:w-16 h-px ${isGlitched ? 'bg-[#4a6741]' : 'bg-regime-crimson'}`} />
            <span className={`tracking-[0.3em] sm:tracking-[0.5em] uppercase text-xs sm:text-sm ${
              isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'
            }`}>
              {isGlitched ? 'Dossier III — Classified' : 'Section III'}
            </span>
            <span className={`w-8 sm:w-16 h-px ${isGlitched ? 'bg-[#4a6741]' : 'bg-regime-crimson'}`} />
          </div>
          <h2
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] sm:tracking-[0.3em] uppercase ${
              isGlitched ? 'text-[#8faa7e] resistance-fade resistance-heading' : 'text-regime-offwhite'
            }`}
            style={{ fontFamily: isGlitched ? "'Courier New', monospace" : "'Impact', 'Arial Black', sans-serif" }}
          >
            {isGlitched ? 'The Disappeared' : 'Purity Updates'}
          </h2>
          <div className={`mt-3 sm:mt-4 text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] uppercase ${
            isGlitched ? 'text-[#6b9a5b] resistance-fade-delay-1' : 'text-regime-crimson'
          }`}>
            {isGlitched
              ? 'Resistance Intelligence • What They Don\'t Want You to Know'
              : 'Bureau of Civic Purity • Daily Compliance Reports • Mandatory Reading'}
          </div>
        </div>

        {/* Alert banner */}
        <div className={`border-2 p-3 sm:p-4 mb-8 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 transition-colors duration-1000 ${
          isGlitched
            ? 'border-[#4a6741] bg-[#2d5a27]/10 resistance-fade'
            : 'border-regime-blood bg-regime-red/10'
        }`}>
          <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 border-2 flex items-center justify-center ${
            isGlitched
              ? 'border-[#4a6741] bg-[#2d5a27]/20'
              : 'border-regime-blood bg-regime-blood/20 animate-pulse-red'
          }`}>
            <span className={`text-xl sm:text-2xl font-bold ${
              isGlitched ? 'text-[#8faa7e]' : 'text-regime-blood'
            }`}>
              {isGlitched ? '△' : '!'}
            </span>
          </div>
          <div>
            <div className={`text-sm sm:text-base tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold ${
              isGlitched ? 'text-[#8faa7e]' : 'text-regime-offwhite'
            }`}
              style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
            >
              {isGlitched ? 'Citizens of the Motherland — Open Your Eyes' : 'Attention All Citizens'}
            </div>
            <div className={`text-xs sm:text-sm tracking-wider mt-1 ${
              isGlitched ? 'text-[#c4b998]/70' : 'text-regime-offwhite/70'
            }`}
              style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
            >
              {isGlitched
                ? 'Every "purity update" is a confession of their crimes. Read between the lines. The numbers they boast about are lives destroyed. Share this truth. The fly will show you more.'
                : 'Reading purity updates is compulsory. Ignorance of regime directives constitutes an act of defiance. Report any citizen who appears uninformed.'}
            </div>
          </div>
        </div>

        {/* Updates list */}
        <div className="space-y-4 sm:space-y-6">
          {updates.map((update, idx) => (
            <div
              key={update.id}
              className={`border transition-all duration-300 group ${
                isGlitched
                  ? `border-[#4a6741]/30 bg-[#2a2218]/60 hover:border-[#4a6741] resistance-fade-delay-${Math.min(idx + 1, 4)}`
                  : 'border-regime-crimson/30 bg-regime-black/60 hover:border-regime-crimson'
              }`}
            >
              {/* Update header */}
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 p-4 sm:p-5 border-b ${
                isGlitched ? 'border-[#4a6741]/20' : 'border-regime-crimson/20'
              }`}>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase font-bold ${update.classColor}`}>
                    {update.classification}
                  </span>
                  <span className={`text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] ${
                    isGlitched ? 'text-[#c4b998]/40' : 'text-regime-offwhite/40'
                  }`}>
                    {update.id}
                  </span>
                </div>
                <span className={`text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase ${
                  isGlitched ? 'text-[#6b9a5b]/60' : 'text-regime-crimson/60'
                }`}>
                  {update.date}
                </span>
              </div>

              {/* Update body */}
              <div className="p-4 sm:p-5">
                <h3
                  className={`text-lg sm:text-xl md:text-2xl tracking-[0.1em] sm:tracking-[0.15em] uppercase mb-3 sm:mb-4 transition-colors duration-300 ${
                    isGlitched
                      ? 'text-[#c4b998] group-hover:text-[#8faa7e]'
                      : 'text-regime-offwhite group-hover:text-regime-crimson'
                  }`}
                  style={{ fontFamily: isGlitched ? "'Courier New', monospace" : "'Impact', 'Arial Black', sans-serif" }}
                >
                  {update.title}
                </h3>
                <p className={`text-xs sm:text-sm tracking-wider leading-relaxed mb-4 sm:mb-5 ${
                  isGlitched ? 'text-[#c4b998]/60' : 'text-regime-offwhite/60'
                }`}
                  style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
                >
                  {update.content}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {Object.entries(update.metrics).map(([key, value]) => (
                    <div key={key} className={`border p-2 sm:p-3 text-center ${
                      isGlitched ? 'border-[#4a6741]/20 bg-[#1e1810]/50' : 'border-regime-crimson/20 bg-regime-dark/50'
                    }`}>
                      <div className={`text-lg sm:text-xl md:text-2xl font-bold ${
                        isGlitched ? 'text-[#c4b998]' : 'text-regime-offwhite'
                      }`}
                        style={{ fontFamily: isGlitched ? "'Courier New', monospace" : "'Impact', 'Arial Black', sans-serif" }}
                      >
                        {value}
                      </div>
                      <div className={`text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-0.5 ${
                        isGlitched ? 'text-[#c4b998]/40' : 'text-regime-offwhite/40'
                      }`}>
                        {key.replace(/_/g, ' ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Update footer */}
              <div className={`px-4 sm:px-5 py-2 sm:py-3 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 ${
                isGlitched ? 'border-[#4a6741]/10' : 'border-regime-crimson/10'
              }`}>
                <span className={`text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase ${
                  isGlitched ? 'text-[#c4b998]/30' : 'text-regime-offwhite/30'
                }`}>
                  {isGlitched ? 'Resistance Intelligence Network — Verified' : 'Bureau of Civic Purity — Official Dispatch'}
                </span>
                <span className={`text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase ${
                  isGlitched ? 'text-[#6b9a5b]/40' : 'text-regime-crimson/40'
                }`}>
                  {isGlitched ? '◇ Truth ◇ Verified' : 'Verified ★ Authenticated'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reporting / Resistance section */}
        <div className={`mt-10 sm:mt-16 border-2 p-6 sm:p-8 md:p-10 text-center transition-colors duration-1000 ${
          isGlitched
            ? 'border-[#4a6741] bg-[#2a2218]/80 resistance-fade-delay-4'
            : 'border-regime-crimson bg-regime-black/80'
        }`}>
          <div className={`text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 ${
            isGlitched ? 'text-[#8faa7e]' : 'text-regime-crimson'
          }`}>
            {isGlitched ? '△' : '⬡'}
          </div>
          <h3
            className={`text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 ${
              isGlitched ? 'text-[#8faa7e] resistance-heading' : 'text-regime-offwhite'
            }`}
            style={{ fontFamily: isGlitched ? "'Courier New', monospace" : "'Impact', 'Arial Black', sans-serif" }}
          >
            {isGlitched ? 'Join the Resistance' : 'See Something? Report Something.'}
          </h3>
          <p className={`text-xs sm:text-sm tracking-wider max-w-2xl mx-auto mb-5 sm:mb-8 leading-relaxed ${
            isGlitched ? 'text-[#c4b998]/60' : 'text-regime-offwhite/60'
          }`}
            style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
          >
            {isGlitched
              ? 'You are not alone. Millions are waking up. Leave a chalk mark on the eastern wall of your sector\'s central plaza — triangle pointing up — and someone will find you. Frequency 7.31 MHz at midnight. Use callsign "Sparrow." Together, we break the chains.'
              : <>Your vigilance keeps the Motherland pure. Report any suspicious behavior, unauthorized thoughts, or unapproved gatherings to your sector warden or dial the Purity Hotline: <span className="text-regime-crimson font-bold">1-800-COMPLY</span></>}
          </p>
          <div className={`inline-block border-2 px-6 sm:px-8 py-2 sm:py-3 tracking-[0.3em] sm:tracking-[0.5em] uppercase text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
            isGlitched
              ? 'border-[#4a6741] text-[#8faa7e] hover:bg-[#2d5a27] hover:text-[#c4b998]'
              : 'border-regime-crimson text-regime-crimson hover:bg-regime-crimson hover:text-regime-offwhite'
          }`}>
            {isGlitched ? 'Spread the Truth' : 'Submit Report'}
          </div>
          <div className={`mt-3 sm:mt-4 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase ${
            isGlitched ? 'text-[#6b9a5b]/40' : 'text-regime-crimson/40'
          }`}>
            {isGlitched ? 'The fly sees all. Click it again to hide this.' : 'All reports are anonymous* (*Terms may vary)'}
          </div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-2 ${
        isGlitched
          ? 'bg-gradient-to-r from-[#1e1810] via-[#4a6741] to-[#1e1810]'
          : 'bg-gradient-to-r from-regime-black via-regime-crimson to-regime-black'
      }`} />
    </section>
  );
}
