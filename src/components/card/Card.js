import React from "react";

import styles from "./Card.module.css"

export const Card = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>editar</span>
    </div>
  );
};
