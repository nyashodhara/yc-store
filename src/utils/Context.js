import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();

    return <Context.Provider
    value={{
        products,
        setProducts,
        categories,
        setCategories,
    }}
    >{children}</Context.Provider>
}

export default AppContext