import  ZipButton from './ButtonTypes/ZipButton/ZipButton';
import './Buttons.css';

function Buttons(props) {
    return (
        <div className="buttons">
            <ZipButton id="1" changeContent={props.changeContent} />
            <ZipButton id="2" changeContent={props.changeContent} />
            <ZipButton id="3" changeContent={props.changeContent} />
            <ZipButton id="4" changeContent={props.changeContent} />
            <ZipButton id="5" changeContent={props.changeContent} />
        </div>
    );
}

export default Buttons;