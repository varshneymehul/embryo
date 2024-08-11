import Image from "next/image";
import "./LogoCarousel.css";
export function ImageSection({ images, speed }) {
  const imagesStyle = {
    animation: `swipe ${speed}ms linear infinite`,
  };

  return (
    <div className={"images"} style={imagesStyle}>
      {images.map(({ logoSrc, name }) => (
        <div key={name} className={"image"}>
          <Image
            className={"logo"}
            width={200}
            height={200}
            src={logoSrc}
            alt={name}
          />
        </div>
      ))}
    </div>
  );
}

export default function Banner({ images, speed }) {
  return (
    <div className={"banner__wrapper"}>
      <div className={"wrapper"}>
        <ImageSection images={images} speed={speed} />
        <ImageSection images={images} speed={speed} />
      </div>
    </div>
  );
}
