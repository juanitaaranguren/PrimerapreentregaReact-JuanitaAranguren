import React, { useState } from "react";

const Contador = () => {
    const [count, setCount] = useState(0);
  
    const incrementar = () => {
      if (count < 10) {
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
      } else {
        alert("No podemos atenderte");
      }
    };
  
    return (
      <div>
        <h2>Carrito de compras: {count}</h2>
        <button onClick={incrementar} disabled={count === 10}>
          Agregar
        </button>
        <button onClick={decrementar} disabled={count === 0}>
          Eliminar
        </button>
        <button onClick={comprar} disabled={count === 0}>
          Comprar
        </button>
      </div>
    );
  };
  
  export default Contador;
  