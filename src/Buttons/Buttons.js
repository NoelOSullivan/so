import  ZipButton from './ButtonTypes/ZipButton/ZipButton';
import './Buttons.css';

function Buttons(props) {
    return (
        <div className="buttons">
            <ZipButton id="1" name="Sacs" changeContent={props.changeContent} />
            <ZipButton id="2" name="Cuisine" changeContent={props.changeContent} />
            <ZipButton id="3" name="Salle de Bain" changeContent={props.changeContent} />
            <ZipButton id="4" name="Zero dechets" changeContent={props.changeContent} />
            <ZipButton id="5" name="Mode" changeContent={props.changeContent} />
            <ZipButton id="6" name="Retouche" changeContent={props.changeContent} />
            <ZipButton id="7" name="Contact" changeContent={props.changeContent} />
        </div>
    );
}

export default Buttons;