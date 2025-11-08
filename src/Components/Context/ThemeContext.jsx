import React, {useState, createContext, useContext} from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    //toggle theme
    const toggleTheme = () =>{
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
//custom hook to use useContext easily
export const useTheme = () => useContext(ThemeContext);