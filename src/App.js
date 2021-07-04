import logo from './logo.svg';
import './App.css';
import Home from './Home';
import DecorateText from './DecorateText';
import { boundUIActions } from './Store/ActionCreators/viewActions';

function App() {
  const { toggleTheme, toggleZoom } = boundUIActions;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={toggleTheme} style={{ background: '#282c34' }}>
          <DecorateText>TOGGLE THEME</DecorateText>
        </button>
        <button onClick={toggleZoom} style={{ background: '#282c34' }}>
          <DecorateText>TOGGLE ZOOM</DecorateText>
        </button>
        <Home />
      </header>
    </div>
  );
}

export default App;
