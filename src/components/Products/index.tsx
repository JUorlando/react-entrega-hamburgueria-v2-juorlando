import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import { StyledProducts } from "./styles";

interface iElement{
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const Products = () => {
  const { showProducts } = useContext(ProductsContext);
  const { handleClick, openModal } = useContext(CartContext);
  return (
    <>
      {showProducts.map((element: iElement) => (
        <StyledProducts key={element.id}>
          <div>
            <img src={element.img} alt={element.name} />
          </div>
          <h2>{element.name}</h2>
          <p>{element.category}</p>
          <p className="price">R$ {element.price}</p>
          <button
            onClick={() => {
              handleClick(element.id);
              openModal();
            }}
          >
            Adicionar
          </button>
        </StyledProducts>
      ))}
    </>
  );
};
