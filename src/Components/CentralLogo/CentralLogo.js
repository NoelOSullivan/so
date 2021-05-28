import logo from '../../images/logo-large.png';
import logoHole from '../../images/logo-large-hole.png';
import ContentHolder from '../Content/ContentHolder';
import './CentralLogo.css';

function CentralLogo(props) {

    console.log(props.contentId);

    let logoClassName, logoHoleClassName, contentHolderClassName;

    if(props.contentId === null) {
        logoClassName = "central-logo";
        logoHoleClassName = "central-logo";
        contentHolderClassName = "content-holder"
    } else {
        logoClassName = "central-logo anim-logo";
        logoHoleClassName = "central-logo anim-logo-hole";
        contentHolderClassName = "content-holder anim-content-holder"
    }

    return (
        <div className="App-header">
            <div className={contentHolderClassName}>HELLO zrgerger grgzrg zrgze rg rgrg rg rgr gz</div>
            <img src={logo} className={logoClassName} alt="logo" />
            <img src={logoHole} className={logoHoleClassName} alt="logo" />
        </div>
    );
}

export default CentralLogo;