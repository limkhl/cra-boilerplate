import React from 'react';
import styled from '@emotion/styled';
import logo from './logo.svg';
import './App.css';

const Box = styled.p`
  background-color: white;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box>Learn React</Box>
        </a>
      </header>
    </div>
  );
}

export default App;
