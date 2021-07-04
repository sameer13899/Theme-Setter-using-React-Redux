import React from 'react';
import DecorateText from './DecorateText';

function Home({ theme, zoom }) {
  return (
    <>
      <DecorateText theme={theme} zoom={zoom}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </DecorateText>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DecorateText theme={theme} zoom={zoom}>
          Learn React
        </DecorateText>
      </a>
    </>
  );
}

export default Home;
