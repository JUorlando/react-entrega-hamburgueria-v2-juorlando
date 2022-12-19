import React, { useContext } from "react";
import { CartContext, iCartProduct } from "../../contexts/CartContext";

interface iElement {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const CardTotal = () => {
  const { currentSale, setCurrentSale } = useContext(CartContext);

  const somaTotal = currentSale.reduce<Record<any,any>>(
    (acumulador: number, valorAtual: iElement) => {
      return acumulador + valorAtual.price;
    },
    0
  );

  return (
    <>
      <div>
        <p>Total</p>
        <p className="somaTotal">R${somaTotal.toFixed(2)}</p>
      </div>
      <button onClick={() => setCurrentSale([])}>Remover Todos</button>
    </>
  );
};
