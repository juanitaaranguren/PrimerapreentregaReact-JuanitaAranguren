import React, { createContext, useState } from "react";

export const cartContext = createContext();
const CartProvider = cartContext.Provider;

function CustomProvider(props) {
  const [cantidad, setCantidad] = useState(0); 

  return (
    <CartProvider value={{ cantidad, setCantidad }}>
      {props.children}
    </CartProvider>
  );
}

export default CustomProvider;
