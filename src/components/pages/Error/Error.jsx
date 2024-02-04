import React from "react";
import ErrorImage from "../../../assets/images/Error.png";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="Error">
                <img src={ErrorImage} alt="ErrorImage" />

                <p>
                    It looks like you have lost, please go back{" "}
                    <span>
                        <Link to="/">Home</Link>
                    </span>
                </p>
            </div>
        </>
    );
};

export default Error;
