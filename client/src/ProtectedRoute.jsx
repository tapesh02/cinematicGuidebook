import { useContext, useEffect } from "react";
import { GlobalContext } from "./useContext/Context";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(GlobalContext);

  const handleLocalStorage = () => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
    setIsLoggedIn(isAuthenticated);
    !isAuthenticated && navigate("/signin");
  };

  useEffect(() => {
    handleLocalStorage();
    window.addEventListener("storage", handleLocalStorage);
    return () => window.removeEventListener("storage", handleLocalStorage);
  }, []);

  return <Component />;
};

export default ProtectedRoute;
