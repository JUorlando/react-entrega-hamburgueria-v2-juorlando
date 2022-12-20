import { createContext, useEffect, useState } from "react";
import React from "react";
import { api } from "../services/api";

export const ProductsContext = createContext({} as iProductsContext);

interface iProductsProviderProps {
  children: React.ReactNode;
}

export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  count: number;
}

export interface iGetProductsResponse {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iProductsContext {
  products: iProducts[];
  filtredProducts: string;
  setFiltredProducts: React.Dispatch<React.SetStateAction<string>>;
  showProducts: iProducts[];
}

export const ProductsProvider = ({ children }: iProductsProviderProps) => {
  const [products, setProducts] = useState<iProducts[]>([]);

  const [filtredProducts, setFiltredProducts] = useState("");

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("@TOKEN");

  const showProducts = !filtredProducts
    ? products
    : products.filter((iten: iProducts) =>
        iten.name.toLowerCase().includes(filtredProducts.toLowerCase())
      );

  async function getProducts() {
    if (token) {
      try {
        setLoading(true);
        const response = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }
  
  useEffect(() => {
    (async () => {
      if (token) {
        try {
          setLoading(true);
          const response = await api.get("/products", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProducts(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, filtredProducts, setFiltredProducts, showProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
