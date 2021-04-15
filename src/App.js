import logo from './images/logo-large.png';
import logoHole from './images/logo-large-hole.png';
import redButton from './images/red-button.png';
import zip from './images/zip.png';
import yellowButton from './images/yellow-button.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="background"></div>

      <div className="App-header">
        <img src={logo} className="central-logo anim-logo" alt="logo" />
        <img src={logoHole} className="central-logo anim-logo-hole" alt="logo" />
      </div>

      <div className="buttons">
        <img src={zip} className="zip" alt="zip" />
        <img src={zip} className="zip" alt="zip" />
        <img src={zip} className="zip" alt="zip" />
        <img src={zip} className="zip" alt="zip" />
        <img src={zip} className="zip" alt="zip" />
      </div>
      
    </div>
  );
}

export default App;