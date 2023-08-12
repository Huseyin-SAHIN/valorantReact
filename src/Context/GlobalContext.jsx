import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useGlobalContext = () => useContext(Context);

const ContextProvider = ({ children }) => {


    const data = {
       
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;