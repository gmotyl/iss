import { createStore, applyMiddleware } from 'redux'
import React, { Component } from 'react';
import './css/App.css';
import IssPositionAddress from './components/IssPositionAddress';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Where is ISS</h2>
        </div>
          <IssPositionAddress position="Warsaw"/>
      </div>
    );
  }
}

export default App;
