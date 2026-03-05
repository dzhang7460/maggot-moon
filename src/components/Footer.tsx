import { useResistance } from '../context/ResistanceContext';

export function Footer() {
  const { isGlitched } = useResistance();

  return (
    <footer className={`border-t-4 transition-colors duration-1000 ${
      isGlitched ? 'bg-[#2a2218] border-[#4a6741]' : 'bg-regime-black border-regime-crimson'
    }`}>
      {/* Banner */}
      <div className={`py-2 sm:py-3 text-center transition-colors duration-1000 ${
        isGlitched ? 'bg-[#2d5a27]' : 'bg-regime-red'
      }`}>
        <div className={`text-sm sm:text-base md:text-lg tracking-[0.3em] sm:tracking-[0.5em] uppercase font-bold ${
          isGlitched ? 'text-[#c4b998] resistance-fade' : 'text-regime-offwhite'
        }`}
          style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
        >
          {isGlitched
            ? '◇ You Are Not Alone ◇ The Resistance Lives ◇ Truth Will Prevail ◇'
            : '★ The Motherland Is Watching ★ The Motherland Is Listening ★ The Motherland Is Forever ★'}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Column 1 */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 sm:w-12 h-10 sm:h-12 border-2 flex items-center justify-center text-xl sm:text-2xl font-bold ${
                isGlitched
                  ? 'border-[#4a6741] bg-[#2d5a27] text-[#c4b998]'
                  : 'border-regime-crimson bg-regime-red text-regime-offwhite'
              }`}>
                {isGlitched ? 'R' : 'M'}
              </div>
              <div>
                <div className={`text-sm tracking-[0.3em] sm:tracking-[0.5em] uppercase ${
                  isGlitched ? 'text-[#8faa7e]' : 'text-regime-offwhite'
                }`}
                  style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
                >
                  {isGlitched ? 'The Resistance' : 'The Motherland'}
                </div>
                <div className={`text-[10px] tracking-[0.3em] uppercase ${
                  isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'
                }`}>
                  {isGlitched ? 'Est. Year 39 — Still Fighting' : 'Est. Year Zero'}
                </div>
              </div>
            </div>
            <p className={`text-xs tracking-wider leading-relaxed ${
              isGlitched ? 'text-[#c4b998]/40 resistance-fade' : 'text-regime-offwhite/40'
            }`}
              style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
            >
              {isGlitched
                ? 'Many voices. One truth. One hope. The resistance endures through the courage of those who dare to remember.'
                : 'One nation. One leader. One purpose. The Motherland endures through the unwavering devotion of its citizens.'}
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className={`text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-3 sm:mb-4 font-bold ${
              isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'
            }`}>
              {isGlitched ? 'Remember' : 'Citizen Directives'}
            </h4>
            <ul className="space-y-2">
              {(isGlitched
                ? ['Question everything', 'Trust your memory', 'Protect each other', 'Share the truth', 'Never lose hope']
                : ['Obey all decrees', 'Report irregularities', 'Attend daily oath', 'Maintain purity', 'Trust the system']
              ).map((item) => (
                <li key={item} className={`text-xs tracking-wider flex items-center gap-2 ${
                  isGlitched ? 'text-[#c4b998]/50' : 'text-regime-offwhite/50'
                }`}
                  style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
                >
                  <span className={`text-[8px] ${isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'}`}>
                    {isGlitched ? '◇' : '▸'}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className={`text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-3 sm:mb-4 font-bold ${
              isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'
            }`}>
              {isGlitched ? 'What They Fear' : 'Prohibited Activities'}
            </h4>
            <ul className="space-y-2">
              {(isGlitched
                ? ['Your free thoughts', 'People gathering', 'Uncensored stories', 'Laughter & joy', 'Your questions']
                : ['Independent thought', 'Unauthorized assembly', 'Foreign media', 'Unapproved humor', 'Questioning directives']
              ).map((item) => (
                <li key={item} className={`text-xs tracking-wider flex items-center gap-2 ${
                  isGlitched ? 'text-[#c4b998]/50' : 'text-regime-offwhite/50'
                }`}
                  style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
                >
                  <span className={`text-[8px] ${isGlitched ? 'text-[#8faa7e]' : 'text-regime-crimson'}`}>
                    {isGlitched ? '△' : '✕'}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className={`text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-3 sm:mb-4 font-bold ${
              isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'
            }`}>
              {isGlitched ? 'Find Us' : 'Report To'}
            </h4>
            <div className={`space-y-3 text-xs tracking-wider ${
              isGlitched ? 'text-[#c4b998]/50' : 'text-regime-offwhite/50'
            }`}
              style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
            >
              {isGlitched ? (
                <>
                  <div>
                    <div className={`font-bold ${isGlitched ? 'text-[#c4b998]/70' : ''}`}>Radio Frequency</div>
                    <div>7.31 MHz at midnight</div>
                  </div>
                  <div>
                    <div className={`font-bold ${isGlitched ? 'text-[#c4b998]/70' : ''}`}>Dead Drop</div>
                    <div>Eastern wall, triangle mark</div>
                  </div>
                  <div>
                    <div className={`font-bold ${isGlitched ? 'text-[#c4b998]/70' : ''}`}>Callsign</div>
                    <div>"Sparrow"</div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="text-regime-offwhite/70 font-bold">Purity Hotline</div>
                    <div>1-800-COMPLY</div>
                  </div>
                  <div>
                    <div className="text-regime-offwhite/70 font-bold">Sector Warden</div>
                    <div>Freq: 147.300 MHz</div>
                  </div>
                  <div>
                    <div className="text-regime-offwhite/70 font-bold">Emergency</div>
                    <div>Sound the siren. Stay still.</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className={`mt-8 sm:mt-12 pt-6 sm:pt-8 border-t ${
          isGlitched ? 'border-[#4a6741]/20' : 'border-regime-crimson/20'
        }`}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className={`text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-center sm:text-left ${
              isGlitched ? 'text-[#c4b998]/30' : 'text-regime-offwhite/30'
            }`}
              style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
            >
              {isGlitched
                ? '© The Resistance • Year 47 • All rights are human rights'
                : '© Year 47 of The Motherland • All rights surrendered to the state'}
            </div>
            <div className={`text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase ${
              isGlitched ? 'text-[#c4b998]/30' : 'text-regime-offwhite/30'
            }`}
              style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
            >
              {isGlitched
                ? 'This signal cannot be stopped • Truth endures'
                : 'This page is monitored • IP logged • Compliance verified'}
            </div>
          </div>
          <div className="text-center mt-4 sm:mt-6">
            <div className={`text-[9px] tracking-[0.3em] sm:tracking-[0.5em] uppercase ${
              isGlitched ? 'text-[#6b9a5b]/30 resistance-fade-delay-4' : 'text-regime-crimson/30'
            }`}
              style={isGlitched ? { fontFamily: "'Courier New', monospace" } : {}}
            >
              {isGlitched
                ? '"There is always an outside. There is always hope. — Sparrow"'
                : '"There is no outside. There is only the Motherland."'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
