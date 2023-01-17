import { useContext } from "react";
import { CartContext, CartContextDataProps } from "../context/CartContext";

export function useCart(): CartContextDataProps {
  const context = useContext(CartContext);

  return context;
}