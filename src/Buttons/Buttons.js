import  ZipButton from './ButtonTypes/ZipButton/ZipButton';
import './Buttons.css';

function Buttons(props) {
  console.log("props xxx", props);
  return (
      <div className="buttons">
        <ZipButton id="rubrique1" changeContent={props.changeContent} />
        <ZipButton />
        <ZipButton />
        <ZipButton />
        <ZipButton />
      </div>
  );
}

export default Buttons;