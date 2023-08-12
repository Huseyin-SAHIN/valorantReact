import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useGlobalContext = () => useContext(Context);

const ContextProvider = ({ children }) => {


    const darkMode = {
        id: 'dark',
        background: '#333',
        color: '#fff'
    }

    const lightMode = {
        id: 'light',
        background: '#fff',
        color: '#333'
    }

    const [themeMode, setThemeMode] = useState(darkMode)

    const data = {
        darkMode,
        lightMode,
        themeMode,
        setThemeMode,
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;