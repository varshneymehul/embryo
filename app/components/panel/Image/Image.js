import "./Image.css";
import Image from "next/image";
const ImageComponent = ({ src }) => {
  return (
    <div className="image">
      <Image height={"1000"} width={"1000"} src={src} alt="panel" />
    </div>
  );
};

export default ImageComponent;
