import { useContext, useEffect } from "react";
import { GlobalContext } from "./useContext/Context";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(GlobalContext);

    useEffect(() => {
        !isLoggedIn && navigate("/signin");
    }, [isLoggedIn, navigate]);
    return <Component />;
};

export default ProtectedRoute;
