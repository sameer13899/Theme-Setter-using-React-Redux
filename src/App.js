import logo from './logo.svg';
import './App.css';
import Home from './Home';
import DecorateText from './DecorateText';
import { connect } from 'react-redux';

function App(props) {
  const themeToggle = () => {
    props.dispatch({ type: 'THEME_TOGGLE' });
  };
  const zoomToggle = () => {
    props.dispatch({ type: 'ZOOM_TOGGLE' });
  };

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

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(App);
