import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Box, Button, Typography } from "@mui/material";
import Cards from "../../Cards/Cards.jsx";
import cardData from "../../Cards/carddata.js";

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <div className="homeBgOverlay"></div>
            <div className="homeBg">
                <Box>
                    <Typography variant="h4">Igniting Your Passion for Movies,</Typography>
                    <Typography variant="h4">Unleashing Wonder!</Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1">
                        Welcome to <span>cinematickGudiebook</span> where the silver screen comes alive, offering a
                        captivating web app
                        <br></br>
                        experience that fuels your love for movies.
                    </Typography>
                </Box>
                <Box className="exploreBtn">
                    <NavLink to={"/movies"}>
                        <Button variant="contained" color="primary">
                            Explore
                        </Button>
                    </NavLink>
                </Box>
                <div className={`cardsBg ${isMobile ? "mcardBg" : ""}`}>
                    <div className="cardMain">
                        {cardData?.map((cardImage, index) => {
                            return <Cards key={cardImage} cardImage={cardImage} id={index} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
