import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import MenuContainer from "./components/MenuContainer";
import Carrinho from "./components/Carrinho";
import FilterProducts from "./components/FilterProducts";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca-Cola",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milkshake Ovomaltine",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isFiltered, setFiltered] = useState(false);

  useEffect(() => {
    setCartTotal(
      currentSale.reduce((acumulador, atual) => {
        return atual.price + acumulador;
      }, 0)
    );
  }, [currentSale]);

  function showProducts(filtrar) {
    setFiltered(true);
    const filtrados = products.filter((value) => {
      if (value.category.toLocaleLowerCase() === filtrar.toLocaleLowerCase()) {
        return value;
      }
    });

    const filterName = products.filter((value) => {
      if (value.name.toLocaleLowerCase() === filtrar.toLocaleLowerCase())
        return value;
    });

    if (filtrados.length > 0) {
      setFilteredProducts(filtrados);
    } else if (filterName.length > 0) {
      setFilteredProducts(filterName);
    } else {
      alert("não tem esse nome");
      setFilteredProducts(products);
    }
  }

  function handleClick(recebido) {
    setFiltered(false);
    const carrinho = products.find((value) => {
      if (value.id === recebido) {
        return value;
      }
    });

    const check = currentSale.includes(carrinho);

    if (!check) {
      setCurrentSale([...currentSale, carrinho]);
    } else {
      alert("ja adicionado");
    }
  }

  function removeItem(remove) {
    const filtered = currentSale.filter((value) => {
      if (value.name !== remove) {
        return value;
      }
    });

    setCurrentSale(filtered);
  }

  function removeAll() {
    setCurrentSale([]);
  }

  // setCartTotal(
  //   currentSale.reduce((acumulador, atual) => {
  //     return acumulador + atual.price;
  //   }, 0)
  // );

  console.log(cartTotal);
  return (
    <div className="App">
      <FilterProducts show={showProducts} />

      <div className="storeCart">
        <MenuContainer
          produtos={products}
          clickFn={handleClick}
          filter={filteredProducts}
          change={isFiltered}
        />

        <Carrinho
          venda={currentSale}
          remove={removeItem}
          total={cartTotal}
          removeAll={removeAll}
        />
      </div>
    </div>
  );
}

export default App;
