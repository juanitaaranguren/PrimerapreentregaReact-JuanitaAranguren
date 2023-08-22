import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from "../CustomProvider";

function CarWidget() {
  const valor = useContext(cartContext);

  return (
    <div className="car-widget">
      <FaShoppingCart />
      <span className="itemTotal">{valor.cantidad}</span>
    </div>
  );
}

export default CarWidget;
