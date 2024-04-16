import React, { useState } from "react";
import "./Panel.css";
import Heading from "./Heading/Heading";
import Article from "./Article/Article";
import UnsplashImages from "./ImageData/ImageData";
import Button from "../Button";
const Panel = () => {
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (event) => {
    event.preventDefault();
    const delta = event.deltaY;
    const container = document.getElementById("container");
    if (container) {
      container.scrollLeft += delta;
      setScrollLeft(container.scrollLeft);
    }
  };
  const images = UnsplashImages.map((img, i) => {
    return (
      <Article
        scrollLeft={scrollLeft}
        key={i}
        src={img.src}
        title={img.title}
        description={img.description}
      />
    );
  });
  return (
    <>
      <div onWheel={handleScroll} id="container" className="horizontal my-8">
        <Heading scrollLeft={scrollLeft} />
        <div className="main-content">{images}</div>
      </div>
      <Button text="View More" link="/panels" />
    </>
  );
};

export default Panel;
