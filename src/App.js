import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { THEMES, ZOOMING } from './Constants';
import Home from './Home';
import DecorateText from './DecorateText';

function App() {
  const [theme, setTheme] = useState(THEMES.RED);
  const [zoom, setZoom] = useState(ZOOMING.SMALL);
  const themeToggle = () => {
    setTheme(theme === THEMES.RED ? THEMES.GREEN : THEMES.RED);
  };
  const zoomToggle = () => {
    setZoom(zoom === ZOOMING.SMALL ? ZOOMING.LARGE : ZOOMING.SMALL);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={themeToggle} style={{ background: '#282c34' }}>
          <DecorateText theme={theme} zoom={zoom}>
            TOGGLE THEME
          </DecorateText>
        </button>
        <button onClick={zoomToggle} style={{ background: '#282c34' }}>
          <DecorateText theme={theme} zoom={zoom}>
            TOGGLE ZOOM
          </DecorateText>
        </button>
        <Home theme={theme} zoom={zoom} />
      </header>
    </div>
  );
}

export default App;
