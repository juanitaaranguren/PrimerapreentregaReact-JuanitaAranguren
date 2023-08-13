import React from "react";
import Item from "./Item";



function ItemList(props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {props.productos.map((producto, index) => (
        <Item
          key={index}
          title={producto.title}
          image={producto.image}
          precio={producto.precio}
          descripcion={producto.descripcion}
          maxStock={producto.maxStock}
        />
      ))}
    </div>
  );
}

export default ItemList;