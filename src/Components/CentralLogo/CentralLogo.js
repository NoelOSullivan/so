import logo from '../../images/logo-large.png';
import logoHole from '../../images/logo-large-hole.png';
import './CentralLogo.css';

function CentralLogo() {
    return (
        <div className="App-header">
            <img src={logo} className="central-logo anim-logo" alt="logo" />
            <img src={logoHole} className="central-logo anim-logo-hole" alt="logo" />
        </div>
    );
}

export default CentralLogo;