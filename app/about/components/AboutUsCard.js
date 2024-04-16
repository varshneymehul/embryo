import React from "react";
import styles from "./AboutUsCard.module.css"; // Import CSS Module for classNames

const Card = ({ title, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__border}></div>
      <div className={styles.card_title__container}>
        <span className={styles.card_title}>{title}</span>
        <p className={styles.card_paragraph}>{content}</p>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default Card;
