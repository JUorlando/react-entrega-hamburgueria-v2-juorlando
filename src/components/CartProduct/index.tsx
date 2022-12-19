import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductCart } from "./style";

interface iElement{
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const CartProduct = () => {

  const {currentSale, removeCard} = useContext(CartContext)

  return (
    <>
    {currentSale.map((element: iElement) => (
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
