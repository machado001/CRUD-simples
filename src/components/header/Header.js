import React, { useState } from "react";

export const Header = () => {
  const [name, setName] = useState(`Visitante`);

  const changeName = (e) => {
    const lSetName = localStorage.setItem(`name`,e.target.value)
    const lSGetName = localStorage.getItem(`name`)
    setName(lSGetName);
    console.log(name,`AIN NAMESINHO NAMESINHO`)
  };
  return (
    <div className="header">
      <h1>Kanban List</h1>
      <div className="salutation">
        <form>
          <span>Olá,</span>
          <label onClick={changeName}>
            <div>
              <textarea value={name} onChange={changeName} name="" id="" rows="1"/>
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};
