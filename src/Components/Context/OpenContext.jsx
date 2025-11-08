import React, {useContext, createContext, useState} from "react";

const OpenContext = createContext();

export const OpenProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return(
        <OpenContext.Provider value={{isOpen, toggleOpen}}>
            {children}
        </OpenContext.Provider>
    )
}

export const useOpen = () => useContext(OpenContext);