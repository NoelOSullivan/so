import logo from '../../images/logo-large.png';
import logoHole from '../../images/logo-large-hole.png';
import sac from '../../images/tresgrandsac.JPG';
import './CentralLogo.css';

function CentralLogo(props) {

    console.log(props.contentId);

    let logoClassName, logoHoleClassName, contentHolderName;

    if(props.contentId === null) {
        logoClassName = "central-logo";
        logoHoleClassName = "central-logo";
        contentHolderName = "content-holder";
    } else {
        logoClassName = "central-logo anim-logo";
        logoHoleClassName = "central-logo anim-logo-hole";
        contentHolderName = "content-holder anim-content-holder";
    }

    return (
        <div className="App-header">
            <div className={contentHolderName}>
                <img src={sac} className="sac" alt="sac" />
            </div> 
            <img src={logo} className={logoClassName} alt="logo" />
            <img src={logoHole} className={logoHoleClassName} alt="logo" />
        </div>
    );
}

export default CentralLogo;