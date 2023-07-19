import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const products = [
    { id: 1, name: "Meteor 350", cilindraje: 400, Km: 0, price: 20000 },
    { id: 2, name: "Himalayan", cilindraje: 400, Km: 0, price: 15000 },
    { id: 3, name: "Classic 350", cilindraje: 400, Km: 0, price: 40000 },
    { id: 4, name: "Classic 500", cilindraje: 400, Km: 0,price: 66000 },
    { id: 5, name: "Scrambler", cilindraje: 400, price: 63000 },
  ];

  return (
    <div className="item-list-container">
      <h2>Catálogo de motos</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
