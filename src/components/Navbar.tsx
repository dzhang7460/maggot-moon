import { useState } from 'react';
import { useResistance } from '../context/ResistanceContext';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isGlitched } = useResistance();

  const navItems = isGlitched
    ? [
        { id: 'leader', label: 'THE TRUTH', icon: '◇' },
        { id: 'moon', label: 'THE LIE', icon: '○' },
        { id: 'purity', label: 'THE MISSING', icon: '△' },
        { id: 'gallery', label: 'THE WALL', icon: '▣' },
      ]
    : [
        { id: 'leader', label: 'OUR LEADER', icon: '★' },
        { id: 'moon', label: 'MOON MISSION', icon: '◉' },
        { id: 'purity', label: 'PURITY UPDATES', icon: '⬡' },
      ];

  const tickerText = isGlitched
    ? '◇ THE RESISTANCE LIVES ◇ TRUTH CANNOT BE SILENCED ◇ REMEMBER THE DISAPPEARED ◇ FREE YOUR MIND ◇ THEY ARE LYING TO YOU ◇ WE ARE EVERYWHERE ◇ CLICK THE FLY TO RETURN ◇ THE RESISTANCE LIVES ◇'
    : '◆ OBEY ◆ COMPLY ◆ THE MOTHERLAND PROVIDES ◆ THE MOTHERLAND PROTECTS ◆ DISSENT IS DECAY ◆ UNITY IS STRENGTH ◆ REPORT ALL IRREGULARITIES ◆ GLORY TO THE MOTHERLAND ◆ OBEY ◆ COMPLY ◆ THE MOTHERLAND PROVIDES ◆';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b-4 transition-colors duration-1000 ${
      isGlitched
        ? 'bg-[#1e1810] border-[#4a6741]'
        : 'bg-regime-black border-regime-crimson'
    }`}>
      {/* Top propaganda/resistance ticker */}
      <div className={`overflow-hidden py-1 transition-colors duration-1000 ${
        isGlitched ? 'bg-[#2d5a27]' : 'bg-regime-red'
      }`}>
        <div className={`animate-marquee whitespace-nowrap text-xs tracking-[0.3em] uppercase font-bold ${
          isGlitched ? 'text-[#c4b998] resistance-fade' : 'text-regime-offwhite'
        }`}>
          {tickerText}
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Title */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className={`w-10 h-10 sm:w-12 sm:h-12 border-2 flex items-center justify-center text-xl sm:text-2xl font-bold transform rotate-0 group-hover:rotate-12 transition-all duration-300 ${
            isGlitched
              ? 'border-[#4a6741] bg-[#2d5a27] text-[#c4b998]'
              : 'border-regime-crimson bg-regime-red text-regime-offwhite'
          }`}>
            {isGlitched ? 'R' : 'M'}
          </div>
          <div className="hidden sm:block">
            <div className={`text-lg sm:text-xl tracking-[0.5em] uppercase leading-none transition-colors duration-1000 ${
              isGlitched ? 'text-[#8faa7e] resistance-fade' : 'text-regime-offwhite'
            }`}>
              {isGlitched ? 'The Resistance' : 'The Motherland'}
            </div>
            <div className={`text-[10px] tracking-[0.4em] uppercase transition-colors duration-1000 ${
              isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'
            }`}>
              {isGlitched ? 'Truth • Freedom • Memory' : 'Eternal • Vigilant • Supreme'}
            </div>
          </div>
        </button>

        {/* Desktop nav items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-4 py-2 text-sm tracking-[0.25em] uppercase transition-all duration-200 border-2 cursor-pointer
                ${activeSection === item.id
                  ? isGlitched
                    ? 'bg-[#2d5a27] border-[#4a6741] text-[#c4b998]'
                    : 'bg-regime-red border-regime-crimson text-regime-offwhite'
                  : isGlitched
                    ? 'border-transparent text-[#c4b998]/70 hover:border-[#4a6741] hover:text-[#c4b998] hover:bg-[#2d5a27]/20'
                    : 'border-transparent text-regime-offwhite/70 hover:border-regime-crimson hover:text-regime-offwhite hover:bg-regime-red/20'
                }`}
            >
              <span className={`mr-2 ${isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'}`}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden border-2 p-2 transition-colors cursor-pointer ${
            isGlitched
              ? 'text-[#c4b998] border-[#4a6741] hover:bg-[#2d5a27]/30'
              : 'text-regime-offwhite border-regime-crimson hover:bg-regime-red/30'
          }`}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full transform transition-transform duration-300 ${
              isGlitched ? 'bg-[#c4b998]' : 'bg-regime-offwhite'
            } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-full transition-opacity duration-300 ${
              isGlitched ? 'bg-[#c4b998]' : 'bg-regime-offwhite'
            } ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full transform transition-transform duration-300 ${
              isGlitched ? 'bg-[#c4b998]' : 'bg-regime-offwhite'
            } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-60' : 'max-h-0'}`}>
        <div className={`border-t-2 ${
          isGlitched ? 'border-[#4a6741] bg-[#1e1810]' : 'border-regime-crimson bg-regime-dark'
        }`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMenuOpen(false);
              }}
              className={`w-full px-6 py-3 text-left text-sm tracking-[0.25em] uppercase border-b transition-colors cursor-pointer
                ${activeSection === item.id
                  ? isGlitched
                    ? 'bg-[#2d5a27] text-[#c4b998] border-[#3a6b33]'
                    : 'bg-regime-red text-regime-offwhite border-regime-gray'
                  : isGlitched
                    ? 'text-[#c4b998]/70 hover:bg-[#2d5a27]/20 hover:text-[#c4b998] border-[#352c20]'
                    : 'text-regime-offwhite/70 hover:bg-regime-red/20 hover:text-regime-offwhite border-regime-gray'
                }`}
            >
              <span className={`mr-3 ${isGlitched ? 'text-[#6b9a5b]' : 'text-regime-crimson'}`}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
