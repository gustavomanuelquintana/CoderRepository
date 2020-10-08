import React from 'react';
import './App.css';
import Image from './Components/Image.js';
import Description from './Components/Description';
import Linkreact from './Components/Linkreact';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <Description />
        <Linkreact />
      </header>
    </div>
  );
}

export default App;
