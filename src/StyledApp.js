import React, { useContext } from 'react';
import Home from './Home';
import { StyleContext } from './StyleProvider';
import logo from './logo.svg';
import DecorateText from './DecorateText';

function StyledApp() {
  const { themeToggle, zoomToggle } = useContext(StyleContext);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={themeToggle} style={{ background: '#282c34' }}>
          <DecorateText>TOGGLE THEME</DecorateText>
        </button>
        <button onClick={zoomToggle} style={{ background: '#282c34' }}>
          <DecorateText>TOGGLE ZOOM</DecorateText>
        </button>
        <Home />
      </header>
    </div>
  );
}

export default StyledApp;
