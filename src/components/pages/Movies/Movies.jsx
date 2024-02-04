import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../useContext/Context";
import { fetchMoviesTvShows, fetchTopRated } from "../../../ApiHelpers";

import Carousel from "../../Carousal/Carousal";
import MoviesTVHeader from "../../MoviesTVHeader/MoviesTVHeader";
import Cards from "../../Cards/Cards";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Skeleton, Typography } from "@mui/material";

const Movies = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { searchInput } = useContext(GlobalContext);

    const [isLoading, setIsLoading] = useState(true);
    const [topRated, setTopRated] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const _movies = await fetchMoviesTvShows("movie", searchInput);
            setMovies(_movies);
            setIsLoading(false);
        };
        fetchMovies();
    }, [searchInput]);

    useEffect(() => {
        const fetchData = async () => {
            const _topRated = await fetchTopRated("movie");
            setTopRated(_topRated);
        };
        fetchData();
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
                        <Typography variant="h6">More</Typography>
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
