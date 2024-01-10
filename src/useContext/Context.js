import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const Context = ({ children }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    return <GlobalContext.Provider value={{ handleInputChange, searchInput }}>{children}</GlobalContext.Provider>;
};

export default Context;
