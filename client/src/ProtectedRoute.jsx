import { useContext, useEffect } from "react";
import { GlobalContext } from "./useContext/Context";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(GlobalContext);

  useEffect(() => {
    const handleLocalStorage = () => {
      const isAuthenticated = sessionStorage.getItem("isAuthenticated");
      !isAuthenticated ? navigate("/signin") : setIsLoggedIn(isAuthenticated);
    };

    handleLocalStorage();
  }, []);

  return <Component />;
};

export default ProtectedRoute;
