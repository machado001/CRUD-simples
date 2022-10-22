import React, { useState } from "react";

import { Card } from "../card/Card";
import { useFetch } from "../../hooks/useFetch";

import styles from "./Section.module.css"
export const Section = ({ name, endpoint }) => {
  const { data: items } = useFetch(endpoint);

  return (
    <div>
      <h1>{name}</h1>
      
        <ul className={styles.section}>
          {items &&
            items.map((item) => (
              <li key={item.id}>
                <Card title={item.title} description={item.description} />
              </li>
            ))}
        </ul>
      
    </div>
  );
};
