import React from "react";
import { Card, CardMedia } from "@mui/material";

const Cards = (props) => {
    const { cardImage, id } = props;

    return (
        <Card key={id} className="card">
            <CardMedia
                className="cardImg"
                component="img"
                image={`https://image.tmdb.org/t/p/original/${cardImage}`}
                alt="cardimage"
                loading="lazy"
            />
        </Card>
    );
};

export default Cards;
