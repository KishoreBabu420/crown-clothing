import { createContext, useContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

const ProductContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  const value = { products, setProducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductsContext = () => {
  console.log(useContext(ProductContext));
  return useContext(ProductContext);
};
