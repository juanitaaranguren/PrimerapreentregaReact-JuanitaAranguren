import React from "react";

function DetalleMoto({ producto, onClose }) {
  return (
    <div className="overlay">
      <div className="detalle-moto">
        <button className="cerrar" onClick={onClose}>
          Cerrar
        </button>
        <h2>{producto.title}</h2>
        <img src={producto.image} alt={producto.title} />
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Marca: {producto.marca}</p>
        
      </div>
    </div>
  );
}

export default DetalleMoto;
