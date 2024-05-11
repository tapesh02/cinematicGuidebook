import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

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

  const contextValue = useMemo(
    () => ({
      handleInputChange,
      searchInput,
      isLoggedIn,
      setIsLoggedIn,
      totalItems,
      setTotalItems,
      currentPage,
      setCurrentPage,
      setSearchInput,
    }),
    [searchInput, isLoggedIn, totalItems, currentPage]
  );

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

Context.propTypes = {
  children: PropTypes.any,
};
export default Context;
