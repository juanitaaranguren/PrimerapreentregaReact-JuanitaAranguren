import React from "react";
import Item from "./Item";
import Contador from "./ItemCount"

function ItemList(props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {props.productos.map((producto, index) => (
        <Item
          key={index}
          title={producto.title}
          image={producto.image}
          maxStock={producto.maxStock}
        />
      ))}
    </div>
  );
}

export default ItemList;