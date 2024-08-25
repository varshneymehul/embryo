import React from "react";
import PanelData from "../components/panel/ImageData/ImageData";
import PanelCard from "./components/PanelCard";
const Panels = () => {
  return (
    <main className="flex flex-col px-16 justify-between">
      <h1 className="text-4xl md:text-7xl p-12 text-center font-serif z-40">
        PANEL DISCUSSION
      </h1>
      <p className="text-lg md:text-xl py-4 ">
        We conduct a series of academic and industry panel discussions.
      </p>
      <section>
        {PanelData.map((data) => (
          <PanelCard
            key={data.title}
            src={data.src}
            title={data.title}
            description={data.description}
            link={data.link}
            speakers={data.speakers}
            date={data.date}
          />
        ))}
      </section>
    </main>
  );
};

export default Panels;
