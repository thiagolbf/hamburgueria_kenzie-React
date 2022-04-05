import "./style.css";

function Carrinho({ venda, remove, total, removeAll }) {
  return (
    <div className="boxCart">
      <div className="cartHeader">
        <p>Carrinho de compras</p>
      </div>
      {venda.length === 0 ? (
        <div className="cartEmpety">
          <div>
            <h3>Sua sacola está vazia</h3>

            <p>Adicione itens</p>
          </div>
        </div>
      ) : (
        <div className="cartFull">
          {venda.map((value, index) => {
            return (
              <div key={index} className="addProducts">
                <figure>
                  <img src={value.img} alt="" />
                  <figcaption></figcaption>
                </figure>

                <div className="descriptions">
                  <p>{value.name}</p>
                  <button onClick={() => remove(value.name)}>Remover</button>
                  <p>{value.category}</p>
                </div>
              </div>
            );
          })}
          <hr />
          <div class="total">
            <p>Total</p>
            <p>{total}</p>
          </div>
          <div class="button">
            <button className="removeAll" onClick={() => removeAll()}>
              Remover todos
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrinho;
