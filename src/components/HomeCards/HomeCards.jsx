import React from "react";
import "./HomeCards.scss";
import cardData from "./carddata";
import { Card, CardMedia } from "@mui/material";

const HomeCards = () => {
    return (
        <>
            <div className="homeCardsBg">
                <div className="cardMain">
                    {cardData.map((cardimage) => (
                        <Card key={cardimage} className="card">
                            <CardMedia className="cardImg" component="img" image={cardimage} alt="cardimage" />
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomeCards;
