import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../useContext/Context";
import { fetchMoviesTvShows, fetchTopRated } from "../../../ApiHelpers";

import Carousel from "../../Carousal/Carousal";
import Cards from "../../Cards/Cards";
import MoviesTVHeader from "../../MoviesTVHeader/MoviesTVHeader";

import { useTheme } from "@mui/material/styles";
import { Skeleton, Typography, useMediaQuery } from "@mui/material";

const TvShows = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { searchInput } = useContext(GlobalContext);

    const [isLoading, setIsLoading] = useState(true);
    const [tvShows, setTvShows] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        const fetchTvShows = async () => {
            const _tvshows = await fetchMoviesTvShows("tv", searchInput);
            setTvShows(_tvshows);
            setIsLoading(false);
        };
        fetchTvShows();
    }, [searchInput]);

    useEffect(() => {
        const getTopRated = async () => {
            const _topRated = await fetchTopRated("tv");
            setTopRated(_topRated);
        };
        getTopRated();
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
                    <div className={`cardsBg moviesBg ${isMobile ? "mCardBg" : ""}`}>
                        <MoviesTVHeader />
                        <Typography variant="h6">Top Rated</Typography>
                        <Carousel slides={topRated} />
                        <Typography variant="h6">More</Typography>
                        <div className="cardMain">
                            {tvShows?.map((tvshow) => {
                                const { poster_path, id } = tvshow;
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

export default TvShows;
