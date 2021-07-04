import React from 'react';
import DecorateText from './DecorateText';

function Home() {
  return (
    <>
      <DecorateText>
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
        <DecorateText>Learn React</DecorateText>
      </a>
    </>
  );
}

export default Home;
