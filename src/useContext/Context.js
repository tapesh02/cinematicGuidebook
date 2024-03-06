import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const Context = ({ children }) => {
    const [searchInput, setSearchInput] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [totalItems, setTotalItems] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
        setCurrentPage(1);
    };

    return (
        <GlobalContext.Provider
            value={{
                handleInputChange,
                searchInput,
                isLoggedIn,
                setIsLoggedIn,
                totalItems,
                setTotalItems,
                currentPage,
                setCurrentPage,
                setSearchInput,
            }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default Context;
