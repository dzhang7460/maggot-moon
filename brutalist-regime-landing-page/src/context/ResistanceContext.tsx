import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface ResistanceContextType {
  isGlitched: boolean;
  toggleGlitch: () => void;
}

const ResistanceContext = createContext<ResistanceContextType>({
  isGlitched: false,
  toggleGlitch: () => {},
});

export function ResistanceProvider({ children }: { children: ReactNode }) {
  const [isGlitched, setIsGlitched] = useState(false);

  const toggleGlitch = useCallback(() => {
    setIsGlitched((prev) => !prev);
  }, []);

  return (
    <ResistanceContext.Provider value={{ isGlitched, toggleGlitch }}>
      {children}
    </ResistanceContext.Provider>
  );
}

export function useResistance() {
  return useContext(ResistanceContext);
}
