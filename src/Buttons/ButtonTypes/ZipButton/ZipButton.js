import zip from './images/zip1.png';
import './ZipButton.css';

function ZipButton(props) {

    function openContent() {
        props.changeContent(props.id);
    }
    
    return (
        <button onClick={openContent}>
            <img src={zip} className="zip" alt="zip" />
            <div className="etiquette">{props.name}</div>
        </button>
    );
}

export default ZipButton;