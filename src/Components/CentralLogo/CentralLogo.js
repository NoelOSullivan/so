import logo from '../../images/logo-large.png';
import logoHole from '../../images/logo-large-hole.png';
import './CentralLogo.css';

function CentralLogo(props) {

    console.log(props.contentId);

    let logoClassName, logoHoleClassName;

    if(props.contentId === null) {
        logoClassName = "central-logo";
        logoHoleClassName = "central-logo";
    } else {
        logoClassName = "central-logo anim-logo";
        logoHoleClassName = "central-logo anim-logo-hole";
    }

    return (
        <div className="App-header">
            <img src={logo} className={logoClassName} alt="logo" />
            <img src={logoHole} className={logoHoleClassName} alt="logo" />
        </div>
    );
}

export default CentralLogo;