import React from "react";
import "./Home.scss";
import { Box, Button, Typography } from "@mui/material";
import HomeCards from "../../HomeCards/HomeCards";

const Home = () => {
    return (
        <>
            <div className="homeBg">
                <Box>
                    <Typography variant="h4">Igniting Your Passion for Movies,</Typography>
                    <Typography variant="h4">Unleashing Wonder!</Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1">
                        Welcometo <span>cinematickGudiebook</span> where the silver screen comes alive, offering a
                        captivating web app
                        <br></br>
                        experience that fuels your love for movies.
                    </Typography>
                </Box>
                <Box className="exploreBtn">
                    <Button variant="contained" color="primary">
                        Explore
                    </Button>
                </Box>
                <HomeCards />
            </div>
        </>
    );
};

export default Home;
