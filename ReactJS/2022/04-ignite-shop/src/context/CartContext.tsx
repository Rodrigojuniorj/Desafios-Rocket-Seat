import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface CartProviderProps {
  children: ReactNode;
}

export interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
}

export interface CartContextDataProps {
  addProductToCart: (product: ProductProps) => Promise<void>;
  removeProductFromCart: (productId: string) => Promise<void>;
  resetCart: () => Promise<void>;
  cart: ProductProps[];
}

export const CartContext  = createContext({} as CartContextDataProps);

export function CartContextProvider({ children }: CartProviderProps){
  const[cart, setCart] = useState<ProductProps[]>([]);
  
  const addProductToCart = async (product: ProductProps) => {
    setCart([...cart, product]);
    localStorage.setItem('@cart-1.0.0', JSON.stringify([...cart,product]));
  }
  
  const removeProductFromCart = async (productId: string) => {
    const newCart = cart.filter(product => product.id !== productId);
    setCart(newCart);
    localStorage.setItem('@cart-1.0.0', JSON.stringify(newCart));
  }

  const resetCart = async () => {
    localStorage.removeItem('@cart-1.0.0');
    setCart([]);  
  }
  
  useEffect(() => {
    const cartStorage = localStorage.getItem('@cart-1.0.0');
    if(cartStorage){
      setCart(JSON.parse(cartStorage));
    }
  },[])

  return (
    <CartContext.Provider value={{
      addProductToCart,
      cart,
      removeProductFromCart,
      resetCart
    }}>
      {children}
    </CartContext.Provider>
  )
}