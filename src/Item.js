import React, { useState } from "react";
import Contador from "./ItemCount";
import DetalleMoto from "./DetalleMoto";
import  "./input.scss";

function Item(props) {
  const [showDetalle, setShowDetalle] = useState(false);

  const toggleDetalle = () => {
    setShowDetalle(!showDetalle);
  };

  return (
    <main className="border p-4">
      <article>
        <h3 className="text-lg font-bold">{props.title}</h3>
        <img
          className="w-full h-[150px] object-contain mt-2"
          src={props.image}
          alt=""
        />
        <p className="mt-2">{props.descripcion}</p>
        <p className="mt-2">${props.precio}</p>
        <p className="mt-2">{props.marca}</p>
        <button className="mt-2 boton-ver-detalle" onClick={toggleDetalle}>
          Ver detalle
        </button>
        <Contador maxStock={props.maxStock} onAgregarAlCarrito={props.onAgregarAlCarrito} /> {/* Añade esta línea */}
      </article>

      {/* Ventana emergente */}
      {showDetalle && <DetalleMoto producto={props} onClose={toggleDetalle} />}
    </main>
  );
}

export default Item;
