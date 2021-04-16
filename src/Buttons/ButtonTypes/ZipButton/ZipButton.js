import zip from "./zip.png";
import "./ZipButton.css";

function ZipButton(props) {
  
  function openContent() {
    console.log("id", props.id);
    props.changeContent(props.id);
  }

  return (
    <button onClick={openContent}>
      <img src={zip} className="zip" alt="zip" />
    </button>
  );
}

export default ZipButton;
