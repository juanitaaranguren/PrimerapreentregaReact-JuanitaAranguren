import React, { useState } from "react";

const Contador = ({ maxStock }) => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    if (count < maxStock) {
      setCount(count + 1);
    }
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const comprar = () => {
    if (count > 0) {
      alert("¡Gracias por tu compra!");
      setCount(0);
    } else {
      alert("No podemos atenderte");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2>Carrito de compras: {count}</h2>
      <div className="flex">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-2"
          onClick={decrementar}
          disabled={count === 0}
        >
          -
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-2"
          onClick={incrementar}
          disabled={count === maxStock}
        >
          +
        </button>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={comprar}
        disabled={count === 0}
      >
        Comprar
      </button>
    </div>
  );
};

export default Contador;
