import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react/cjs/react.production.min";
export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setcart] = useState([]);
  const [totalValue, setTotalValue] = useState();

  function add(item) {
    const newCart = cart;
    newCart.push(item);

    setcart(newCart);
  }
  const store = {
    add,
    cart,
    totalValue,
  };
  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  const { cart, add, totalValue } = context;
  return {
    cart,
    add,
    totalValue,
  };
}
