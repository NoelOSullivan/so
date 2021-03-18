import logo from './images/logo-large.png';
import logoHole from './images/logo-large-hole.png';
import redButton from './images/red-button.png';
import background from './images/background.png';
import zip from './images/zip.png';
import yellowButton from './images/yellow-button.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="App-header">
        <img src={logo} className="central-logo anim-logo" alt="logo" />
        <img src={logoHole} className="central-logo anim-logo-hole" alt="logo" />
      </div>
      
    </div>
  );
}

export default App;






{/* <div className="App-header">
        <img src={logo} className="central-logo" alt="logo" />
      </div>

      <img src={redButton} className="red-button" alt="logo" />
      <div className="rubriques">Les tissues</div>
      
      <img src={zip} className="zip" alt="logo" />
      <img src={yellowButton} className="yellow-button" alt="logo" /> */}