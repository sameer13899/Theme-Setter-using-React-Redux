import logo from './logo.svg';
import './App.css';
import Home from './Home';
import DecorateText from './DecorateText';
import {
  boundThemeToggler,
  boundZoomToggler,
} from './Store/ActionCreators/viewActions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={boundThemeToggler} style={{ background: '#282c34' }}>
          <DecorateText>TOGGLE THEME</DecorateText>
        </button>
        <button onClick={boundZoomToggler} style={{ background: '#282c34' }}>
          <DecorateText>TOGGLE ZOOM</DecorateText>
        </button>
        <Home />
      </header>
    </div>
  );
}

export default App;
