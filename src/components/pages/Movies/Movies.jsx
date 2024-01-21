import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import Cards from "../../Cards/Cards";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Skeleton, Typography } from "@mui/material";
import MoviesTVHeader from "../../MoviesTVHeader/MoviesTVHeader";
import { GlobalContext } from "../../../useContext/Context";
import Carousel from "../../Carousal/Carousal";

const Movies = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { searchInput } = useContext(GlobalContext);

    const [isLoading, setIsLoading] = useState(true);
    const [topRated, setTopRated] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const url = searchInput
            ? `${process.env.REACT_APP_BASEPATH}/search/multi`
            : `${process.env.REACT_APP_BASEPATH}/discover/movie`;

        const fetchMovies = async () => {
            try {
                const requestConfig = {
                    method: "GET",
                    url: url,
                    params: {
                        query: `${searchInput}`,
                        include_adult: "false",
                        include_video: "false",
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
                    setMovies(response.data.results);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log("can not fetch movies");
            }
        };

        fetchMovies();
    }, [searchInput]);

    useEffect(() => {
        const fetchTopRated = async () => {
            try {
                const requestConfig = {
                    method: "GET",
                    url: `${process.env.REACT_APP_BASEPATH}/trending/movie/day`,
                    params: { language: "en-US" },
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    },
                };
                const response = await axios.request(requestConfig);
                setTopRated(response.data.results);
                console.log(response.data.results);
            } catch (error) {
                console.log("can not fetch top rated");
            }
        };
        fetchTopRated();
    }, []);

    const renderSkeleton = () => {
        const skeletons = [];
        for (let i = 0; i < 8; i++) {
            skeletons[i] = (
                <Skeleton
                    key={i}
                    animation="pulse"
                    height={200}
                    variant="rectangular"
                    width={130}
                    sx={{ animationDuration: "1.5s", borderRadius: "5px" }}
                />
            );
        }
        return skeletons;
    };

    return (
        <>
            {isLoading ? (
                <div className="movieMainSkeleton">
                    <div className="movieSkeleton">{renderSkeleton()}</div>
                </div>
            ) : (
                <>
                    <div className="mainMovies"></div>
                    <div className={`cardsBg moviesBg ${isMobile ? "mcardBg" : ""}`}>
                        <MoviesTVHeader />
                        <Typography variant="h6">Top Rated</Typography>
                        <Carousel slides={topRated} />
                        <Typography variant="h6">View All</Typography>
                        <div className="cardMain">
                            {movies?.map((movie) => {
                                const { poster_path, id } = movie;
                                return (
                                    <Cards
                                        key={id}
                                        className="to-do add class or fix this later"
                                        cardImage={`https://image.tmdb.org/t/p/original${poster_path}`}
                                        id={id}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Movies;
