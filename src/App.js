import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { THEMES, ZOOMING } from './Constants';
import Home from './Home';
import DecorateText from './DecorateText';
import { createStore } from 'redux';

const globallyAccessible = {
  theme: THEMES.GREEN,
  zoom: ZOOMING.SMALL,
};

function firstReducer(state = globallyAccessible, action) {
  if (action.type === 'THEME_TOGGLE') {
    return {
      ...state,
      theme: state.theme === THEMES.RED ? THEMES.GREEN : THEMES.RED,
    };
  } else if (action.type === 'ZOOM_TOGGLE') {
    return {
      ...state,
      zoom: state.zoom === ZOOMING.SMALL ? ZOOMING.LARGE : ZOOMING.SMALL,
    };
  } else return state;
}
const globalState = createStore(firstReducer);

const themeToggle = () => {
  globalState.dispatch({ type: 'THEME_TOGGLE' });
};
const zoomToggle = () => {
  globalState.dispatch({ type: 'ZOOM_TOGGLE' });
};

function App() {
  const [appState, setAppState] = useState(globallyAccessible);

  globalState.subscribe(() => {
    setAppState(globalState.getState());
  });

  const { theme, zoom } = appState;

  // console.log(appState);

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
