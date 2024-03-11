import React from "react";
import PropTypes from "prop-types";

import { Card, CardMedia } from "@mui/material";
import imageNotFound from "../../assets/images/imageNotFound.png";
import { Link } from "react-router-dom";

const Cards = (props) => {
    const { cardImage, id, type } = props;

    return (
        <Card key={id} className="card" component={Link} to={`${type}/${id}`}>
            <CardMedia
                className="cardImg"
                component="img"
                image={cardImage ? `https://image.tmdb.org/t/p/original/${cardImage}` : imageNotFound}
                alt="card-image"
                loading="lazy"
            />
        </Card>
    );
};

Cards.propTypes = {
    cardImage: PropTypes.string,
    id: PropTypes.number,
    type: PropTypes.string,
};

export default Cards;
