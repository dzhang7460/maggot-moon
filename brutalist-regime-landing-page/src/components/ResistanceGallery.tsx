import { useState, useEffect } from 'react';
import { useResistance } from '../context/ResistanceContext';

/* ───────────── SVG sub-components ───────────── */

function PushPin({ color = '#c0392b', x = 0, y = 0 }: { color?: string; x?: number; y?: number }) {
  return (
    <svg
      width="22"
      height="28"
      viewBox="0 0 22 28"
      className="absolute z-30 drop-shadow-md"
      style={{ left: x, top: y, transform: 'translate(-50%, -60%)' }}
    >
      <circle cx="11" cy="8" r="7" fill={color} stroke="#222" strokeWidth="1.2" />
      <circle cx="9" cy="6" r="2" fill="rgba(255,255,255,0.3)" />
      <line x1="11" y1="15" x2="11" y2="27" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TapeStrip({ rotation = 0, className = '' }: { rotation?: number; className?: string }) {
  return (
    <div
      className={`absolute h-4 sm:h-5 bg-yellow-100/30 border-y border-yellow-200/20 backdrop-blur-[1px] z-20 ${className}`}
      style={{
        width: '60px',
        transform: `rotate(${rotation}deg)`,
      }}
    />
  );
}

/* ────────── Redacted text block helper ────────── */

function RedactedLine({ text, redactions }: { text: string; redactions: number[] }) {
  const words = text.split(' ');
  return (
    <p className="text-[11px] sm:text-xs leading-relaxed tracking-wide text-[#2a2218] mb-2"
       style={{ fontFamily: "'Courier New', monospace" }}
    >
      {words.map((word, i) => (
        <span key={i}>
          {redactions.includes(i) ? (
            <span className="bg-[#1a1a1a] text-[#1a1a1a] px-1 select-none rounded-[1px]">{word}</span>
          ) : (
            word
          )}
          {' '}
        </span>
      ))}
    </p>
  );
}

/* ──────────── CARD 1: Leather-coat Investigation ──────────── */

function InvestigationCard({ visible }: { visible: boolean }) {
  return (
    <div
      className={`polaroid-card ${visible ? 'polaroid-enter' : 'opacity-0'}`}
      style={{ '--card-rotation': '-4deg', '--card-delay': '0.3s' } as React.CSSProperties}
    >
      <PushPin color="#c0392b" x={90} y={-4} />
      <TapeStrip rotation={-15} className="top-1 -left-3" />

      {/* Photo area */}
      <div className="polaroid-photo bg-[#d4c9a8]">
        {/* Faux dossier look */}
        <div className="absolute top-2 left-2 right-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 border-2 border-[#8B0000] flex items-center justify-center">
              <span className="text-[#8B0000] text-[9px] font-bold">▲</span>
            </div>
            <div className="text-[9px] tracking-[0.3em] uppercase text-[#8B0000] font-bold"
                 style={{ fontFamily: "'Courier New', monospace" }}>
              FILE NO. R-0091
            </div>
          </div>
          <div className="border-b border-[#8B0000]/40 mb-2" />
        </div>

        <div className="pt-12 px-2 sm:px-3">
          <div className="stamp-redacted absolute top-3 right-3 text-[10px] text-[#8B0000] border border-[#8B0000] px-2 py-0.5 rotate-[8deg] tracking-[0.2em] opacity-70">
            CLASSIFIED
          </div>

          <h4 className="text-xs sm:text-sm font-bold text-[#2a1a0a] uppercase tracking-[0.15em] mb-3"
              style={{ fontFamily: "'Courier New', monospace" }}>
            Investigation: The Leather-Coats
          </h4>

          <RedactedLine
            text="The Leather-Coats are the regime's secret enforcement unit operating outside all legal frameworks."
            redactions={[4, 5, 9, 10]}
          />
          <RedactedLine
            text="They report directly to Commander Volkov and are responsible for over 3,200 disappearances since Year 38."
            redactions={[3, 4, 5, 10, 11]}
          />
          <RedactedLine
            text="Known operating bases include the Grekov Factory complex, Sub-level 7 of the Ministry, and an unmarked compound in Sector 9."
            redactions={[4, 5, 6, 12, 13, 14, 15, 16]}
          />
          <RedactedLine
            text="Witnesses confirm prisoners are transported in black vehicles bearing false medical insignia."
            redactions={[1, 7, 8, 9]}
          />

          <div className="mt-3 pt-2 border-t border-[#8B0000]/20">
            <p className="text-[9px] text-[#8B0000] tracking-[0.2em] uppercase"
               style={{ fontFamily: "'Courier New', monospace" }}>
              ⚠ Agents identified: <span className="bg-[#1a1a1a] text-[#1a1a1a] px-4 select-none">NAMES</span> — 
              Sources must be protected at all costs.
            </p>
          </div>
        </div>

        {/* Coffee stain */}
        <div className="absolute bottom-3 right-4 w-10 h-10 rounded-full border-2 border-[#a08060]/20 bg-[#a08060]/5" />
      </div>

      {/* Caption strip */}
      <div className="polaroid-caption">
        <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#5a4030]"
              style={{ fontFamily: "'Courier New', monospace" }}>
          Who watches the watchers?
        </span>
      </div>
    </div>
  );
}

/* ──────────── CARD 2: Green Planet Sketch ──────────── */

function GreenPlanetCard({ visible }: { visible: boolean }) {
  return (
    <div
      className={`polaroid-card ${visible ? 'polaroid-enter' : 'opacity-0'}`}
      style={{ '--card-rotation': '3deg', '--card-delay': '0.7s' } as React.CSSProperties}
    >
      <PushPin color="#2d5a27" x={95} y={-4} />
      <TapeStrip rotation={12} className="top-0 -right-2" />

      {/* Photo area */}
      <div className="polaroid-photo bg-[#e8e2d0] flex flex-col items-center justify-center">
        {/* Hand-drawn planet SVG */}
        <svg viewBox="0 0 200 200" className="w-28 h-28 sm:w-36 sm:h-36 mb-3 drop-shadow-sm">
          {/* Background stars */}
          {[
            [20, 30], [170, 45], [35, 160], [160, 170], [90, 15], [15, 90], [180, 120],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="1.2" fill="#5a7a50" opacity="0.4" />
          ))}

          {/* Planet body */}
          <circle cx="100" cy="100" r="60" fill="#4a8040" stroke="#2d5a27" strokeWidth="2.5"
                  strokeDasharray="3,2" opacity="0.9" />

          {/* Continents — rough sketch style */}
          <path d="M75 70 Q85 55 105 65 Q115 72 108 85 Q98 78 85 80 Z"
                fill="#6aaa55" stroke="#2d5a27" strokeWidth="1" strokeDasharray="2,2" />
          <path d="M90 100 Q100 90 120 95 Q130 105 125 120 Q110 125 95 115 Z"
                fill="#6aaa55" stroke="#2d5a27" strokeWidth="1" strokeDasharray="2,2" />
          <path d="M65 105 Q72 95 82 100 Q78 115 68 112 Z"
                fill="#5a9a48" stroke="#2d5a27" strokeWidth="1" strokeDasharray="2,2" />

          {/* Atmosphere glow */}
          <circle cx="100" cy="100" r="62" fill="none" stroke="#8fcc7e" strokeWidth="1" opacity="0.3" />
          <circle cx="100" cy="100" r="66" fill="none" stroke="#8fcc7e" strokeWidth="0.5" opacity="0.15" />

          {/* Light reflection */}
          <ellipse cx="82" cy="78" rx="12" ry="18" fill="rgba(255,255,255,0.08)" transform="rotate(-20,82,78)" />

          {/* Small leaf growing from top */}
          <path d="M100 38 Q105 28 100 18 Q95 28 100 38" fill="#4a8040" stroke="#2d5a27" strokeWidth="0.8" />
          <path d="M100 32 Q108 25 112 30" fill="none" stroke="#2d5a27" strokeWidth="0.8" />
          <line x1="100" y1="38" x2="100" y2="40" stroke="#2d5a27" strokeWidth="0.8" />
        </svg>

        {/* Quote */}
        <div className="px-3 text-center">
          <p className="text-[11px] sm:text-xs italic text-[#3a5a30] leading-relaxed"
             style={{ fontFamily: "'Courier New', monospace" }}>
            "They paved over every garden, but seeds survive beneath concrete. One crack in the pavement is all it takes."
          </p>
          <p className="text-[9px] mt-2 text-[#6b9a5b] tracking-[0.3em] uppercase">
            — Found written on a cell wall, Facility Gamma
          </p>
        </div>

        {/* Pencil smudge effect */}
        <div className="absolute top-4 left-4 w-16 h-8 bg-[#8a7a60]/5 rounded-full rotate-[-15deg] blur-[2px]" />
      </div>

      {/* Caption strip */}
      <div className="polaroid-caption">
        <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#3a5a30]"
              style={{ fontFamily: "'Courier New', monospace" }}>
          Remember what green looks like
        </span>
      </div>
    </div>
  );
}

/* ──────────── CARD 3: Moon Hoax Transcription ──────────── */

function TranscriptionCard({ visible }: { visible: boolean }) {
  return (
    <div
      className={`polaroid-card ${visible ? 'polaroid-enter' : 'opacity-0'}`}
      style={{ '--card-rotation': '-1.5deg', '--card-delay': '1.1s' } as React.CSSProperties}
    >
      <PushPin color="#b08030" x={85} y={-4} />
      <TapeStrip rotation={-8} className="-top-1 left-8" />
      <TapeStrip rotation={5} className="top-0 right-2" />

      {/* Photo area */}
      <div className="polaroid-photo bg-[#ddd8c4] overflow-y-auto">
        <div className="px-2 sm:px-3 pt-2">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[9px] tracking-[0.3em] uppercase text-[#8B0000] font-bold"
                 style={{ fontFamily: "'Courier New', monospace" }}>
              Intercepted Transmission
            </div>
            <div className="text-[8px] text-[#8a7a60] tracking-wider">Y47.D219 • 02:47</div>
          </div>
          <div className="border-b border-[#5a4a30]/30 mb-3" />

          <div className="space-y-2 text-[10px] sm:text-[11px] leading-relaxed"
               style={{ fontFamily: "'Courier New', monospace" }}>
            <p className="text-[#5a4a30]">
              <span className="text-[#8B0000] font-bold">SPEAKER 1 [Gen. ████]:</span><br />
              The launch vehicle doesn't even have a navigation system. It's a shell. A prop for the cameras.
            </p>
            <p className="text-[#5a4a30]">
              <span className="text-[#2d5a27] font-bold">SPEAKER 2 [Dr. ████]:</span><br />
              We told them as much. The fuel calculations — they're nonsensical. A first-year student would see through it.
            </p>
            <p className="text-[#5a4a30]">
              <span className="text-[#8B0000] font-bold">SPEAKER 1:</span><br />
              He doesn't care. The countdown is theatre. When it reaches zero, there'll be a launch, fireworks, and then — a "communications blackout." The cosmonaut footage is already filmed.
            </p>
            <p className="text-[#5a4a30]">
              <span className="text-[#2d5a27] font-bold">SPEAKER 2:</span><br />
              And the 200 "selected cosmonauts"?
            </p>
            <p className="text-[#5a4a30]">
              <span className="text-[#8B0000] font-bold">SPEAKER 1:</span><br />
              [long pause] They won't be needing spacesuits where they're going.
            </p>
            <p className="text-[#5a4a30]">
              <span className="text-[#2d5a27] font-bold">SPEAKER 2:</span><br />
              God help us all.
            </p>
            <p className="text-[#5a4a30] opacity-60">
              <span className="font-bold">[TRANSMISSION ENDS — STATIC]</span>
            </p>
          </div>

          <div className="mt-3 pt-2 border-t border-dashed border-[#5a4a30]/30">
            <p className="text-[8px] sm:text-[9px] text-[#8B0000] tracking-[0.15em] uppercase"
               style={{ fontFamily: "'Courier New', monospace" }}>
              Authenticity verified by 3 independent resistance cells. Signal origin: Ministry Sub-Level 4.
            </p>
          </div>
        </div>

        {/* Fingerprint smudge */}
        <div className="absolute bottom-2 left-3 opacity-[0.04]">
          <svg width="30" height="36" viewBox="0 0 30 36">
            {[0, 3, 6, 9, 12].map(y => (
              <ellipse key={y} cx="15" cy={12 + y} rx={13 - y * 0.5} ry="1.5"
                       fill="none" stroke="#000" strokeWidth="0.8" />
            ))}
          </svg>
        </div>
      </div>

      {/* Caption strip */}
      <div className="polaroid-caption">
        <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#5a4030]"
              style={{ fontFamily: "'Courier New', monospace" }}>
          The moon is a lie
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN GALLERY COMPONENT
   ═══════════════════════════════════════════════ */

export function ResistanceGallery() {
  const { isGlitched } = useResistance();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isGlitched) {
      const timer = setTimeout(() => setVisible(true), 200);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [isGlitched]);

  if (!isGlitched) return null;

  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      {/* Section header */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 mb-10 sm:mb-14 text-center">
        <div className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          <span className="w-8 sm:w-16 h-px bg-[#4a6741]" />
          <span className="tracking-[0.3em] sm:tracking-[0.5em] uppercase text-xs sm:text-sm text-[#6b9a5b]"
                style={{ fontFamily: "'Courier New', monospace" }}>
            Dossier IV — Eyes Only
          </span>
          <span className="w-8 sm:w-16 h-px bg-[#4a6741]" />
        </div>
        <h2
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] sm:tracking-[0.3em] uppercase text-[#8faa7e] resistance-heading resistance-fade"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          The Wall
        </h2>
        <div className="mt-3 sm:mt-4 text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[#6b9a5b] resistance-fade-delay-1"
             style={{ fontFamily: "'Courier New', monospace" }}>
          Resistance Evidence Board • Handle With Extreme Caution • Destroy After Reading
        </div>
      </div>

      {/* ═══ CORKBOARD ═══ */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="corkboard-frame">
          <div className="corkboard">
            {/* Cork texture pins (decorative) */}
            <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#888] shadow-sm z-30" />
            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#888] shadow-sm z-30" />
            <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#888] shadow-sm z-30" />
            <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#888] shadow-sm z-30" />

            {/* String connections between pins */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden lg:block" preserveAspectRatio="none">
              <line x1="18%" y1="20%" x2="52%" y2="25%" stroke="#8B0000" strokeWidth="0.7" opacity="0.4" strokeDasharray="4,3" />
              <line x1="52%" y1="25%" x2="82%" y2="18%" stroke="#8B0000" strokeWidth="0.7" opacity="0.4" strokeDasharray="4,3" />
              <line x1="18%" y1="20%" x2="82%" y2="18%" stroke="#2d5a27" strokeWidth="0.5" opacity="0.25" strokeDasharray="6,4" />
            </svg>

            {/* Small sticky notes (decorative) */}
            <div className="absolute top-4 left-[40%] w-14 h-14 bg-yellow-200/70 rotate-[6deg] p-1.5 shadow-sm z-20 hidden sm:block">
              <p className="text-[7px] text-[#5a4030]" style={{ fontFamily: "'Courier New', monospace" }}>
                Check dead drop at Krasny Bridge — 48hrs
              </p>
            </div>
            <div className="absolute bottom-6 right-[15%] w-12 h-12 bg-[#f0e4cc]/60 rotate-[-4deg] p-1 shadow-sm z-20 hidden sm:block">
              <p className="text-[6px] text-[#8B0000]" style={{ fontFamily: "'Courier New', monospace" }}>
                TRUST<br />NO ONE<br />IN SECTOR 7
              </p>
            </div>
            <div className="absolute top-[60%] left-[5%] w-16 h-10 bg-[#c8e0c0]/50 rotate-[2deg] p-1 shadow-sm z-20 hidden md:block">
              <p className="text-[6px] text-[#2d5a27]" style={{ fontFamily: "'Courier New', monospace" }}>
                Radio freq confirmed:<br />7.31 MHz midnight
              </p>
            </div>

            {/* ── The three polaroid cards ── */}
            <div className="polaroid-grid">
              <InvestigationCard visible={visible} />
              <GreenPlanetCard visible={visible} />
              <TranscriptionCard visible={visible} />
            </div>

            {/* Scattered evidence markers */}
            <div className="absolute bottom-4 left-[25%] hidden sm:block">
              <div className="text-[8px] text-[#8B0000]/40 rotate-[-2deg] tracking-[0.3em] uppercase"
                   style={{ fontFamily: "'Courier New', monospace" }}>
                Evidence Ref: ΩΩ-7734
              </div>
            </div>
          </div>
        </div>

        {/* Caption beneath corkboard */}
        <div className="mt-6 sm:mt-8 text-center resistance-fade-delay-3">
          <p className="text-xs sm:text-sm text-[#c4b998]/50 tracking-[0.2em] uppercase"
             style={{ fontFamily: "'Courier New', monospace" }}>
            ◇ This board was recovered from a safehouse in Sector 4 before it was raided ◇
          </p>
          <p className="text-[10px] text-[#6b9a5b]/40 tracking-[0.15em] mt-2"
             style={{ fontFamily: "'Courier New', monospace" }}>
            Three operatives gave their lives to preserve these documents. Honor their sacrifice. Share the truth.
          </p>
        </div>
      </div>
    </section>
  );
}
