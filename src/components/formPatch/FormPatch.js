import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import styles from "./FormPatch.module.css";

export const FormPatch = ({ endpoint, id }) => {
  const [title, setTitle] = useState(``);
  const [description, setDescription] = useState(``);

  const { httpConfig } = useFetch(endpoint);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = {
      title,
      description,
      id,
    };

    httpConfig(task, `PATCH`,id);
    console.log(task, `TASK PORRA`);

    setTitle(``);
    setDescription(``);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          titulo
          <input
            type="text"
            name={title}
            value={title}
            placeholder={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          descricao
          <input
            type="text"
            name={description}
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <input type="submit" value="Editar" id={endpoint} />
      </form>
    </>
  );
};
