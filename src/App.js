import './App.css';
import StyleProvider from './StyleProvider';
import StyledApp from './StyledApp';

function App() {
  return (
    <StyleProvider>
      <StyledApp />
    </StyleProvider>
  );
}

export default App;
