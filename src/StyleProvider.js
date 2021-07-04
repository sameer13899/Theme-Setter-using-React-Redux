import React, { createContext, useState } from 'react';
import { THEMES, ZOOMING } from './Constants';

const ThemeProvider = createContext();
const ZoomProvider = createContext();
const StyleContext = createContext();
export { ThemeProvider, ZoomProvider, StyleContext };

function StyleProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.RED);
  const [zoom, setZoom] = useState(ZOOMING.SMALL);
  const themeToggle = () => {
    setTheme(theme === THEMES.RED ? THEMES.GREEN : THEMES.RED);
  };
  const zoomToggle = () => {
    setZoom(zoom === ZOOMING.SMALL ? ZOOMING.LARGE : ZOOMING.SMALL);
  };
  return (
    <StyleContext.Provider value={{ themeToggle, zoomToggle }}>
      <ThemeProvider.Provider value={{ theme }}>
        <ZoomProvider.Provider value={{ zoom }}>
          {children}
        </ZoomProvider.Provider>
      </ThemeProvider.Provider>
    </StyleContext.Provider>
  );
}

export default StyleProvider;
