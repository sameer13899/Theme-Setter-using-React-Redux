import logo from './logo.svg';
import './App.css';
import Home from './Home';
import DecorateText from './DecorateText';
import { toggleTheme, toggleZoom } from './Store/ActionCreators/viewActions';
import { useContext } from 'react';
import { StyleContext } from '.';

function App() {
  const dispatch = useContext(StyleContext).dispatch;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => dispatch(toggleTheme())}
          style={{ background: '#282c34' }}
        >
          <DecorateText>TOGGLE THEME</DecorateText>
        </button>
        <button
          onClick={() => dispatch(toggleZoom())}
          style={{ background: '#282c34' }}
        >
          <DecorateText>TOGGLE ZOOM</DecorateText>
        </button>
        <Home />
      </header>
    </div>
  );
}

export default App;
