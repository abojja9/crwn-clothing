import PRODUCTS from "../shop-data.json";
import { createContext, useContext, useState } from "react";


export const ProductsContext = createContext({
    currentUser: []
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}