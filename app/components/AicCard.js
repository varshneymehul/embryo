import React from "react";
import classes from "./AicCard.module.css";
const AicCard = ({ heading, content }) => {
  return (
    <div className={classes.card}>
      <div className={classes.circle}></div>
      <div className={classes.circle}></div>

      <div className={classes.card__inner}>
        <h1 className="text-2xl text-right font-sans_heading">{heading}</h1>
        <p>
          <ul className="list list-disc text-sm md:text-lg">
            {content.map((item, i) => (
              <li key={i} className="my-2">
                {item}
              </li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
};

export default AicCard;
