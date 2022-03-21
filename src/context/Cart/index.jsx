import React, { createContext, useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";

const CartContent = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState();

  function add(item) {
    const newCart = cart;
    newCart.push(item);

    setCart(newCart);
  }
  const store = {
    add,
    cart,
    totalValue,
  };
  return <CartContent.Provider value={store}>{children}</CartContent.Provider>;
}

export function useCart() {
  const context = useContext(CartContent);

  const { cart, add, totalValue } = context;

  return {
    cart,
    add,
    totalValue,
  };
}
