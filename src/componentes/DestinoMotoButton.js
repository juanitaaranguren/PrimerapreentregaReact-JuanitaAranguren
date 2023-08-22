import React, { useState } from "react";
import productosData from "./Productos";
import "../input.scss"; 

function DestinoMotoButton() {
  const [productoAleatorio, setProductoAleatorio] = useState(null);

  const generarProductoAleatorio = () => {
    const randomIndex = Math.floor(Math.random() * productosData.length);
    setProductoAleatorio(productosData[randomIndex]);
  };

  return (
    <div className="destino-moto">
      <h2>¿Qué moto te depara el destino?</h2>
      <button className="descubrir-button" onClick={generarProductoAleatorio}>
        Descubrir
      </button>
      {productoAleatorio && (
        <div className="producto-aleatorio">
          <h3>{productoAleatorio.title}</h3>
          <img src={productoAleatorio.image} alt={productoAleatorio.title} />
          <p>{productoAleatorio.descripcion}</p>
          <p>Precio: ${productoAleatorio.precio}</p>
        </div>
      )}
    </div>
  );
}

export default DestinoMotoButton;
