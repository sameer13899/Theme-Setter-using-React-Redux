import React, { createContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { THEMES, ZOOMING } from './Constants';

const globallyAccessible = {
  theme: THEMES.GREEN,
  zoom: ZOOMING.SMALL,
};

function apperanceReducer(state = globallyAccessible, action) {
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

export const StyleContext = createContext();
function StyledApp() {
  const [state, dispatch] = useReducer(apperanceReducer, globallyAccessible);
  return (
    <StyleContext.Provider value={{ state, dispatch }}>
      <App />
    </StyleContext.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <StyledApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
