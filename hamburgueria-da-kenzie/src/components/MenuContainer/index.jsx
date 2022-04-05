import Products from "../Products";
import "./style.css";

function MenuContainer({ produtos, clickFn, filter, change }) {
  return (
    <div className="box">
      {change
        ? filter.map((value2, index) => {
            return (
              <Products
                key={index}
                imagem={value2.img}
                name={value2.name}
                category={value2.category}
                price={value2.price}
                id={value2.id}
                fn={clickFn}
              />
            );
          })
        : produtos.map((value, index) => {
            return (
              <Products
                key={index}
                imagem={value.img}
                name={value.name}
                category={value.category}
                price={value.price}
                id={value.id}
                fn={clickFn}
              />
            );
          })}
    </div>
  );
}

export default MenuContainer;
