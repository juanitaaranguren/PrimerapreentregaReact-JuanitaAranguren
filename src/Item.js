import React from "react";
import Contador from "./ItemCount";

function Item(props) {
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
          <p className="mt-2">{props.precio}</p>
          <button className="mt-2">Ver detalle</button>
          <Contador maxStock={props.maxStock} />
        </article>
      </main>
    );
}

export default Item;
