import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import styles from "./FormPost.module.css";

export const FormPost = ({ endpoint }) => {
  const [title, setTitle] = useState(``);
  const [description, setDescription] = useState(``);

  const { httpConfig } = useFetch(endpoint);

  const handleSubmit = async (e,method) => {
    e.preventDefault();

    const task = {
      title,
      description,
    };

    httpConfig(task,`POST`);

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
        <input type="submit" value="Criar" id={endpoint} />
      </form>
    </>
  );
};
