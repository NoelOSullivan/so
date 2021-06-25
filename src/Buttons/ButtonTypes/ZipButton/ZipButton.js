import zip from './images/zip1.png';
import zipLeft from './images/zipLeft.png';
import zipRight from './images/zipRight.png';
import zipOpenLeft from './images/zipOpenLeft.png';
import zipOpenRight from './images/zipOpenRight.png';
import './ZipButton.css';

function ZipButton(props) {

    function openContent() {
        props.changeContent(props.id);
    }

    const zipOpen = props.type === "left" ? zipOpenLeft : zipOpenRight;
    const zipOpenClass = props.type === "left" ? "zip-open-left"  : "zip-open-right" ;
    const zip = props.type === "left" ? zipLeft : zipRight;
    const zipClass = props.type === "left" ? "zip-left"  : "zip-right" ;
    const etiquetteClass = props.type === "left" ? "etiquette etiquette-left"  : "etiquette etiquette-right" ;
    
    return (
        <div className="zip-button-container" style={{top:props.top, bottom:props.bottom}} onClick={openContent}>
            <img src={zipOpen} className={zipOpenClass} alt="zipOpen" />
            <img src={zip} className={zipClass} alt="zip" />
            <div className={etiquetteClass}>{props.name}</div>
        </div>
    );
}

export default ZipButton;