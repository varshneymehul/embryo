import React from "react";
import fore from "../../public/img/foreground.webp";
import back from "../../public/img/background.webp";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export const AdvancedBannerTop = () => {
  const background: BannerLayer = {
    image: back.src,
    // translateY: [0, 50],
    opacity: [0.5, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset text-center mt-16">
        <h2 className="font-light white text-xl md:text-3xl">welcome to</h2>
        <h1 className="font-bold text-4xl md:text-8xl font-serif bg-gradient-to-r from-white to-yellow-100 text-shadow-sm inline-block text-transparent bg-clip-text">
          BITS EMBRYO
        </h1>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    image: fore.src,
    translateY: [0, 15],
    scale: [1, 1.2, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };

  return (
    <ParallaxBanner
      layers={ [background, headline, foreground, gradientOverlay] }
      className="full"
    />
  );
};
