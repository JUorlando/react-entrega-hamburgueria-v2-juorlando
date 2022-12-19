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

  // const somaTotal: number = currentSale.reduce((acumulador: number, valorAtual: iElement) => acumulador + valorAtual.price,0);

  return (
    <>
      <div>
        <p>Total</p>
        {/* <p className="somaTotal">R${somaTotal.toFixed(2)}</p> */}
      </div>
      <button onClick={() => setCurrentSale([])}>Remover Todos</button>
    </>
  );
};
