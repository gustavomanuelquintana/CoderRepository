import React from 'react';
import './App.css';
import Image from './Components/Image.js';
import Description from './Components/Description';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
