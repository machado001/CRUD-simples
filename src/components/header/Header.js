import React, { useState } from "react";


export const Header = () => {
  const [name, setName] = useState(`Visitante`);

  const changeName = () => {
    setName();
  };
  return (
    <div className="header">
      <h1>Kanban List</h1>
      <div className="salutation">
        <form>
           Olá, <input type="text" name="" id="" value={name} disabled />
        </form>
      </div>
    </div>
  );
};
