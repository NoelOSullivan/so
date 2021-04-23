import React, { Component } from 'react';
import CentralLogo from './Components/CentralLogo/CentralLogo';
import Buttons from './Buttons/Buttons';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="App">
        <div className="background"></div>
        <CentralLogo />
        <Buttons />
      </div>
    )
  }
}

export default App;