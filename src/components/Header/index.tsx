import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { StyledHeader } from "./style";
import { FiLogOut, FiSearch, FiShoppingCart } from "react-icons/fi";
import { LoginContext } from "../../contexts/UserContesxts/LoginContexts";
import { CartContext } from "../../contexts/CartContext";

export const Header = () => {
  const { filtredProducts, setFiltredProducts } = useContext(ProductsContext);

  const { userLogout } = useContext(LoginContext);

  const { openModal } = useContext(CartContext);

  const handleSearch = (event) => {
    event.preventDefault();
    setFiltredProducts(event.target.value);
  };

  return (
    <StyledHeader>
      <h1>
        Burguer<span> Kenzie</span>
      </h1>
      <form>
        <input
          type="text"
          placeholder="Pesquise seu lanche"
          value={filtredProducts}
          onChange={handleSearch}
        ></input>
        <button className="search">
          <FiSearch />
        </button>
        <div>
          <button type="button" onClick={openModal}>
            <FiShoppingCart />
          </button>
          <button type="button" className="logout" onClick={userLogout}>
            <FiLogOut />
          </button>
        </div>
      </form>
    </StyledHeader>
  );
};
