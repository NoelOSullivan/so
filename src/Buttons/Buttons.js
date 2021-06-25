import  ZipButton from './ButtonTypes/ZipButton/ZipButton';
import './Buttons.css';

function Buttons(props) {
    return (
        <div className="buttons">
            <ZipButton type="left" top="-20px" left="0px" id="1" name="Les Sacs" changeContent={props.changeContent} />
            <ZipButton type="right" top="30px" right="0px" id="2" name="Mode" changeContent={props.changeContent} />
            <ZipButton type="left" top="80px" left="0px" id="3" name="Cuisine" changeContent={props.changeContent} />
            <ZipButton type="right" top="130px" right="0px" id="4" name="Salle de bains" changeContent={props.changeContent} />
            {/* <ZipButton type="left" top="310px" right="0px" id="4" name="Salle de bains" changeContent={props.changeContent} /> */}
            {/* <ZipButton className="zip zip3" id="3" name="Salle de Bain" changeContent={props.changeContent} />
            <ZipButton className="zip zip4" id="4" name="Zéro dechets" changeContent={props.changeContent} />
            <ZipButton className="zip zip5" id="5" name="Mode" changeContent={props.changeContent} />
            <ZipButton className="zip zip6" id="6" name="Retouche" changeContent={props.changeContent} />
            <ZipButton className="zip zip7" id="7" name="Contact" changeContent={props.changeContent} /> */}
        </div>
    );
}

export default Buttons;