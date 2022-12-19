import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const CardTotal = () => {

  const {currentSale, setCurrentSale} = useContext(CartContext)

  const somaTotal = currentSale.reduce((acumulador, valorAtual) => {
    if (valorAtual.price) {
      return acumulador + valorAtual.price;
    } else {
      return acumulador - valorAtual.price;
    }
  }, 0);

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
