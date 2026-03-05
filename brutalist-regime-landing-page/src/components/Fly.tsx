import { useState, useEffect, useCallback, useRef } from 'react';
import { useResistance } from '../context/ResistanceContext';

export function Fly() {
  const { toggleGlitch, isGlitched } = useResistance();
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [wobble, setWobble] = useState({ x: 0, y: 0 });
  const buzzInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Randomize position within viewport
  const randomizePosition = useCallback(() => {
    setPosition({
      x: 10 + Math.random() * 75, // percentage-based, keep away from edges
      y: 10 + Math.random() * 75,
    });
  }, []);

  // Buzzing micro-movement
  useEffect(() => {
    if (visible) {
      buzzInterval.current = setInterval(() => {
        setWobble({
          x: (Math.random() - 0.5) * 12,
          y: (Math.random() - 0.5) * 12,
        });
      }, 80);
    } else {
      if (buzzInterval.current) clearInterval(buzzInterval.current);
      setWobble({ x: 0, y: 0 });
    }

    return () => {
      if (buzzInterval.current) clearInterval(buzzInterval.current);
    };
  }, [visible]);

  // Show the fly every 10 seconds
  useEffect(() => {
    const showFly = () => {
      randomizePosition();
      setVisible(true);

      // Stay visible for 4-7 seconds
      const visibleDuration = 4000 + Math.random() * 3000;
      hideTimeout.current = setTimeout(() => {
        setVisible(false);
      }, visibleDuration);
    };

    // Initial appearance after 5 seconds
    const initialTimeout = setTimeout(() => {
      showFly();
    }, 5000);

    const interval = setInterval(() => {
      showFly();
    }, 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [randomizePosition]);

  // When in mid-flight, occasionally dart to a new position
  useEffect(() => {
    if (!visible) return;

    const dartInterval = setInterval(() => {
      if (Math.random() > 0.6) {
        setPosition((prev) => ({
          x: Math.max(5, Math.min(90, prev.x + (Math.random() - 0.5) * 20)),
          y: Math.max(5, Math.min(90, prev.y + (Math.random() - 0.5) * 20)),
        }));
      }
    }, 800);

    return () => clearInterval(dartInterval);
  }, [visible]);

  const handleClick = () => {
    setVisible(false);
    toggleGlitch();
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed z-[10000] cursor-pointer group"
      style={{
        left: `calc(${position.x}% + ${wobble.x}px)`,
        top: `calc(${position.y}% + ${wobble.y}px)`,
        transition: 'left 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), top 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
        transform: 'translate(-50%, -50%)',
        background: 'none',
        border: 'none',
        padding: 0,
        outline: 'none',
      }}
      aria-label="A fly"
      title=""
    >
      <div className="fly-buzz relative" style={{ width: '20px', height: '20px' }}>
        {/* Fly SVG */}
        <svg
          viewBox="0 0 40 40"
          width="20"
          height="20"
          className="drop-shadow-sm"
          style={{
            filter: isGlitched
              ? 'drop-shadow(0 0 3px rgba(0, 200, 100, 0.6))'
              : 'drop-shadow(0 0 2px rgba(0,0,0,0.5))',
          }}
        >
          {/* Wings */}
          <ellipse cx="12" cy="14" rx="9" ry="5" fill="rgba(180,190,200,0.45)" transform="rotate(-30 12 14)" />
          <ellipse cx="28" cy="14" rx="9" ry="5" fill="rgba(180,190,200,0.45)" transform="rotate(30 28 14)" />
          {/* Body */}
          <ellipse cx="20" cy="22" rx="5" ry="8" fill="#1a1a1a" />
          {/* Head */}
          <circle cx="20" cy="12" r="4" fill="#222" />
          {/* Eyes */}
          <circle cx="18" cy="11" r="1.8" fill="#660000" />
          <circle cx="22" cy="11" r="1.8" fill="#660000" />
          {/* Legs */}
          <line x1="16" y1="20" x2="10" y2="26" stroke="#1a1a1a" strokeWidth="0.7" />
          <line x1="16" y1="24" x2="11" y2="30" stroke="#1a1a1a" strokeWidth="0.7" />
          <line x1="24" y1="20" x2="30" y2="26" stroke="#1a1a1a" strokeWidth="0.7" />
          <line x1="24" y1="24" x2="29" y2="30" stroke="#1a1a1a" strokeWidth="0.7" />
        </svg>
      </div>
    </button>
  );
}
