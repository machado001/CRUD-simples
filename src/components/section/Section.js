//components
import { Card } from "../card/Card";
import { Popup } from "../popup/Popup";
import { FormPost } from "../formPost/FormPost";

//custom hooks
import { useFetch } from "../../hooks/useFetch";
import { useTogglePopup } from "../../hooks/useTogglePopup";

//styles
import styles from "./Section.module.css";
export const Section = ({ name, endpoint }) => {
  const { data: items } = useFetch(endpoint);
  const { togglePopup, isOpen } = useTogglePopup();

  return (
    <div>
      <h1>{name}</h1>
      <button id={endpoint} onClick={togglePopup}>
        Adicionar nota
      </button>
      {isOpen && (
        <Popup togglePopup={togglePopup}>
          <FormPost endpoint={endpoint} />
        </Popup>
      )}

      <ul className={styles.section}>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <Card title={item.title} description={item.description} id={item.id} endpoint={endpoint} />
            </li>
          ))}
      </ul>
    </div>
  );
};
