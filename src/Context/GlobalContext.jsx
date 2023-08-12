import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useGlobalContext = () => useContext(Context);

const ContextProvider = ({ children }) => {


    const darkMode = {
        id: 'darkMode',
        background: '#333',
        color: '#fff'
    }

    const lightMode = {
        id: 'lightMode',
        background: '#fff',
        color: '#333'
    }

    const themeControl = localStorage.getItem('theme') === 'darkMode' ? darkMode : lightMode


    const [themeMode, setThemeMode] = useState(themeControl)

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