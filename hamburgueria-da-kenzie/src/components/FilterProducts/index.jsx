import "./style.css";
import { useState } from "react";

function FilterProducts({ show }) {
  const [userInput, setUserInput] = useState(" ");
  return (
    <div className="storeName">
      <p>
        Burguer <span>Kenzie</span>
      </p>
      <div className="filtro">
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(event) => {
            setUserInput(event.target.value);
          }}
        />
        <button onClick={() => show(userInput)}> Pesquisar</button>
      </div>
    </div>
  );
}

export default FilterProducts;
