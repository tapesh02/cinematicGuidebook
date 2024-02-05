import React, { createContext, useState } from "react";


export const GlobalContext = createContext();

const Context = ({ children }) => {
    const [searchInput, setSearchInput] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    return (
        <GlobalContext.Provider value={{ handleInputChange, searchInput, isLoggedIn, setIsLoggedIn }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default Context;
