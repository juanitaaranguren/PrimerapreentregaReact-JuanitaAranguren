import React from "react";

function CarWidget(props) {
  return (
    <div className="car-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="carrito-count">{props.carritoCount}</span>
    </div>
  );
}

export default CarWidget;
