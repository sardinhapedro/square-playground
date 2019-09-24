import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';
import SimpleSquare from './SimpleSquare';
import Hideable from './Hideable.js'

const HideableSquare = Hideable(SimpleSquare);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple Square</p>

      <SimpleSquare color="red" size={200}/>
      <p>Square</p>
      <Square size={50} />
      <Square size={50} initialColor="red"/>
      <Square initialColor="green"/>

      <p>Hideable Square</p>

      <HideableSquare isHidden= {true} size={100} color="purple"/>
      <HideableSquare isHidden= {false} size={100} color="cyan"/>


      </header>
    </div>
  );
}

export default App;
