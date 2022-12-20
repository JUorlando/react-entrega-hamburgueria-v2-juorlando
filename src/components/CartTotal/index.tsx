import React, { useContext } from "react";
import { CartContext} from "../../contexts/CartContext";

export const CardTotal = () => {
  const { setCurrentSale, price, count, setCount } = useContext(CartContext);

  return (
    <>
      <div>
        <p>Total</p>
        <p className="somaTotal">R${price.toFixed(2)}</p>
      </div>
      <button onClick={() => {setCurrentSale([]); setCount(0)}}>Remover Todos</button>
    </>
  );
};
