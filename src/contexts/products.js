import { createContext } from "react";

import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext({});

export const ProductsProvider = ({}) => {
  return (
    <ProductContext.Provider>
      <div></div>
    </ProductContext.Provider>
  );
};
