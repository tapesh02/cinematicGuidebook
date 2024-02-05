import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";
import axios from "axios";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Box, Button, Typography } from "@mui/material";
import Cards from "../../Cards/Cards.jsx";

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [trending, setTrending] = useState([]);

    const fetchTrending = async () => {
        try {
            const requestConfig = {
                method: "GET",
                url: "https://api.themoviedb.org/3/movie/now_playing",
                params: {
                    language: "en-US",
                    page: "1",
                    sort_by: "popularity.desc",
                },
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                },
            };
            const response = await axios.request(requestConfig);

            if (response) {
                setTrending(response.data.results);
            }
        } catch (error) {
            console.log("can not fetch movies");
        }
    };

    useEffect(() => {
        fetchTrending();
    }, []);

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
                        {trending?.slice(0, 10).map((trending) => {
                            const { id, poster_path } = trending;
                            return <Cards key={id} cardImage={poster_path} id={id} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
