import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Where is ISS</h2>
        </div>
        <p className="App-intro">
            Currently ISS is over ...
        </p>
      </div>
    );
  }
}

export default App;
