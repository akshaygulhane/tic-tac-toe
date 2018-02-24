import React, { Component } from 'react';
import './App.css';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="text-center">
          <h1>Tic Tac Toe!</h1>
          <hr />
        </header>
        <div>
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
