import React, { Component } from 'react';
import CentralLogo from "./Components/CentralLogo/CentralLogo";
import Buttons from "./Buttons/Buttons";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.changeContent = this.changeContent.bind(this);
    this.state={
      contentId: null
    }
  }

  changeContent=(id)=>{
    this.setState(()=>{
      return {
        contentId :  id
      }
    });
  }

  render() {
    return (
      <div className="App">
         <div className="background"></div>
         <CentralLogo contentId={this.state.contentId} />
         <Buttons changeContent={this.changeContent} />
         <div className="message">Unique</div>
         <div className="message">Handmade</div>
         <div className="message">Ecological</div>
         <div className="message">Useful</div>
         <div className="message">Made In Gers</div>
       </div>
    );
  }
}

export default App;
