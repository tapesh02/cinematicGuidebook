import React from "react";
import { Card, CardMedia } from "@mui/material";
import imageNotFound from "../../assets/images/imageNotFound.png";

const Cards = (props) => {
    const { cardImage, id } = props;
    return (
        <Card key={id} className="card">
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

export default Cards;
