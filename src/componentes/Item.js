import React, { useContext, useState } from "react";
import { cartContext } from "../CustomProvider";
import ItemDetail from "./ItemDetail";

function Item(props) {
  const valorDelContexto = useContext(cartContext);
  const [showDetalle, setShowDetalle] = useState(false);

  const toggleDetalle = () => {
    setShowDetalle(!showDetalle);
  };

  const limpiarCarrito = () => {
    valorDelContexto.setCantidad(0);
  };

  return (
    <div>
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
          
          <div className="space-y-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                valorDelContexto.setCantidad(valorDelContexto.cantidad + 1)}>
              Agregar
            </button>
            <button className="boton-ver-detalle" onClick={toggleDetalle}>
              Ver detalle
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={limpiarCarrito}>
              Limpiar
            </button>
          </div>
          
        </article>
      </main>
      {showDetalle && <ItemDetail producto={props} onClose={toggleDetalle} />}
    </div>
  );
}

export default Item;
