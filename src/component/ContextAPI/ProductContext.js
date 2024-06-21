import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);

    const addProduct = (product) => {
        setProductList(prevList => [...prevList, product]);
    };

    return (
        <ProductContext.Provider value={{ productList, addProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
