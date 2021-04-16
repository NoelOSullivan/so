import logo from '../../images/logo-large.png';
import logoHole from '../../images/logo-large-hole.png';
import './CentralLogo.css';

function CentralLogo(props) {
  console.log("this.props.contentId", props.contentId);
  let logoClassName, logoHoleClassName;
  if(props.contentId !== null) {
    logoClassName = "central-logo anim-logo";
    logoHoleClassName = "central-logo anim-logo-hole";
  } else {
    logoClassName = "central-logo";
    logoHoleClassName = "central-logo";
  }
  return (
    <div>
      <div className="App-header">
        <div className="template-content"></div>
        <img src={logo} className={logoClassName} alt="logo" />
        <img src={logoHole} className={logoHoleClassName} alt="logo" />
      </div>
    </div>
  );
}

export default CentralLogo;