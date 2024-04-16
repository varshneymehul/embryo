import "./ImageText.css";

const ImageText = (props) => {

  return (
    <div 
      className={`image-text ${props.showText ? "image-text--visible" : "image-text--hidden"}`}
      >
        <p>
          {props.description}
        </p>
    </div>

  )
}

export default ImageText;