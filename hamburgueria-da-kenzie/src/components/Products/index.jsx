import "./style.css";

function Products({ imagem, name, category, price, id, fn }) {
  return (
    <div className="container">
      <div className="imagem">
        <figure>
          <img src={imagem} alt="" />
          <figcaption></figcaption>
        </figure>
      </div>

      <div>
        <h3>{name}</h3>

        <p>{category}</p>

        <p>R$ {price}</p>

        <button onClick={() => fn(id)}>Adicionar</button>
      </div>
    </div>
  );
}

export default Products;
