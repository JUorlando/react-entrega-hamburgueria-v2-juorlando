import { createContext, SetStateAction, useContext, useState } from "react";
import React from "react";
import { ProductsContext } from "./ProductsContext";
import { toast } from "react-toastify";

export const CartContext = createContext({} as iCartContext);

interface iCartProviderProps {
  children: React.ReactNode;
}

export interface iCartProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface iOldProducts {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

export interface iCartContext {
  currentSale: iCartProduct[] | [];
  setCurrentSale: React.Dispatch<React.SetStateAction<iCartProduct[] | []>>;
  handleClick: (id: number) => void;
  removeCard: (id: number) => void;
  openModal: () => void;
  closeModal: () => void;
  modalIsOpen: boolean;
  count: number;
}

export const CartProvider = ({ children }: iCartProviderProps) => {
  const [currentSale, setCurrentSale] = useState<iCartProduct[] | []>([]);

  const [modalIsOpen, setIsOpen] = useState(false);

  const [count, setCount] = useState(1);

  const { products } = useContext(ProductsContext);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleClick(id: number) {
    const current = products.find((element: iCartProduct) => element.id === id);

    setCurrentSale((oldProducts: any) => {
      
      if (
        !oldProducts.find((element: iCartProduct) => element.id === current?.id)
      ) {
        return [...oldProducts, current];
      } else {
        setCount(count + 1)

        return oldProducts;
      }
    });
  }

  function removeCard(id: number) {
    const newList = currentSale.filter((card: iCartProduct) => card.id !== id);
    setCurrentSale(newList);
  }

  return (
    <CartContext.Provider
      value={{
        handleClick,
        removeCard,
        currentSale,
        setCurrentSale,
        openModal,
        closeModal,
        modalIsOpen,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
