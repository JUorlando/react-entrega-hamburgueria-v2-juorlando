import { createContext, useContext, useState } from "react";
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

export interface iCartContext {
  currentSale: iCartProduct | [];
  setCurrentSale: React.Dispatch<React.SetStateAction<iCartProduct | []>>;
  handleClick: (id: number) => void;
  removeCard: (id: number) => void;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
}

export const CartProvider = ({ children }: iCartProviderProps) => {
  const [currentSale, setCurrentSale] = useState<iCartProduct | []>([]);

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
    const current = products.find((element) => element.id === id);

    setCurrentSale((oldProducts) => {
      if (!oldProducts.find((element) => element.id === current.id)) {
        return [...oldProducts, current];
      } else {
        toast.warn("Iten já adicionado ao Carrinho");

        return oldProducts;
      }
    });
  }

  function removeCard(id: number) {
    const newList = currentSale.filter((card) => card.id !== id);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
