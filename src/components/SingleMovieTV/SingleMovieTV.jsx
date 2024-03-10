import React from "react";
import { fetchById } from "../../ApiHelpers";
import { useParams } from "react-router-dom";

const SingleMovieTV = () => {
    const { id } = useParams;
    return <div>SingleMovieTV {id}</div>;
};

export default SingleMovieTV;
