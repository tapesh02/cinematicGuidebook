import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../useContext/Context";
import { fetchMoviesTvShows, fetchTopRated } from "../../../ApiHelpers";

import Cards from "../../Cards/Cards";
import MoviesTVHeader from "../../MoviesTVHeader/MoviesTVHeader";
import Pagination from "../../Pagination/Pagination";
import { renderSkeleton, renderTopRated } from "../../Helpers/MovieTVHelpers";

import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";

const TvShows = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { searchInput, setTotalItems, currentPage } = useContext(GlobalContext);

    const [isLoading, setIsLoading] = useState(true);
    const [tvShows, setTvShows] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        const fetchTvShows = async () => {
            const _tvshows = await fetchMoviesTvShows("tv", searchInput, currentPage);
            setTvShows(_tvshows.results);
            setTotalItems(_tvshows.total_results);
            setIsLoading(false);
        };
        fetchTvShows();
    }, [searchInput, currentPage, setTotalItems]);

    useEffect(() => {
        const getTopRated = async () => {
            const _topRated = await fetchTopRated("tv");
            setTopRated(_topRated);
        };
        getTopRated();
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="movieMainSkeleton">
                    <div className="movieSkeleton">{renderSkeleton(8)}</div>
                </div>
            ) : (
                <>
                    <div className="mainMovies"></div>
                    <div className={`cardsBg moviesBg ${isMobile ? "mCardBg" : ""}`}>
                        <MoviesTVHeader />
                        {renderTopRated(searchInput, topRated)}
                        <Typography variant="h6">{searchInput ? "Search results" : "More"}</Typography>
                        <div className="cardMain">
                            {tvShows?.map((tvshow) => {
                                const { poster_path, id } = tvshow;
                                return (
                                    <Cards key={id} classname="movieCards" cardImage={poster_path} id={id} type="tv" />
                                );
                            })}
                        </div>
                    </div>
                    <Pagination />
                </>
            )}
        </>
    );
};

export default TvShows;
