import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import Cards from "../../Cards/Cards";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Skeleton } from "@mui/material";
import MoviesTVHeader from "../../MoviesTVHeader/MoviesTVHeader";
import { GlobalContext } from "../../../useContext/Context";

const Movies = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { searchInput } = useContext(GlobalContext);

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const url = searchInput
        ? "https://api.themoviedb.org/3/search/movie"
        : "https://api.themoviedb.org/3/discover/movie";

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

    useEffect(() => {
        fetchMovies();
    }, [searchInput]);

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
                        <div className="cardMain">
                            {movies?.map((movie) => {
                                const { poster_path, id } = movie;
                                return (
                                    <Cards
                                        key={id}
                                        classname="movieCards"
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
