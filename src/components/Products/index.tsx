import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import { StyledProducts } from "./styles";
import Button from "react-bootstrap/Button";

export const Products = () => {
  const { showProducts } = useContext(ProductsContext);
  const { handleClick, openModal } = useContext(CartContext);
  return (
    <>
      {showProducts.map((element) => (
        <StyledProducts key={element.id}>
          <div>
            <img src={element.img} alt={element.name} />
          </div>
          <h2>{element.name}</h2>
          <p>{element.category}</p>
          <p className="price">R$ {element.price}</p>
          <Button
            id={element.id}
            onClick={() => {
              handleClick(element.id);
              openModal();
            }}
          >
            Adicionar
          </Button>
        </StyledProducts>
      ))}
    </>
  );
};
