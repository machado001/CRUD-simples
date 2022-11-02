import React from "react";

import styles from "./Card.module.css";

import { Popup } from "../popup/Popup";
import { useTogglePopup } from "../../hooks/useTogglePopup";
import { useFetch } from "../../hooks/useFetch";
import { FormPatch } from "../formPatch/FormPatch";

export const Card = ({ title, description, id, endpoint }) => {
  const { togglePopup, isOpen } = useTogglePopup();
  const { httpConfig } = useFetch(endpoint);

  const deleteItem = (id) => {
    httpConfig(id, `DELETE`);
  };
  // const patchItem = (id) => {
  //   togglePopup();
  //   httpConfig(id, `PATCH`);
  // };
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <p>{description}</p>
      <button onClick={togglePopup}>Editar</button>
      <button onClick={() => deleteItem(id)}>deletar</button>
      {isOpen && (
        <Popup togglePopup={togglePopup}>
          <FormPatch endpoint={endpoint} id={id} />
        </Popup>
      )}
    </div>
  );
};
