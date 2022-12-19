import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductCart } from "./style";

export const CartProduct = () => {

  const {currentSale, removeCard} = useContext(CartContext)

  return (
    <>
    {currentSale.map(element => (
        <ProductCart key={element.id}>
          <img src={element.img} alt={element.name}/>
          <div className="text">
          <div className="nameButton">
          <h2>{element.name}</h2>
          <button onClick={() => removeCard(element.id)}>Remover</button>
          </div>
          <p>{element.category}</p>
          </div>
        </ProductCart>
    ))}
    </>
  );
};
