import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../useContext/Context";
import { fetchMoviesTvShows } from "../../../ApiHelpers";

import MoviesTVHeader from "../../MoviesTVHeader/MoviesTVHeader";

import Pagination from "../../Pagination/Pagination";
import { RenderItems, renderSkeleton, renderTopRated } from "../../Helpers/MovieTVHelpers";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
import useTopRated from "../../../useHooks/useTopRated";

const Movies = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { searchInput, setTotalItems, currentPage } = useContext(GlobalContext);
  const { topRated, loading } = useTopRated("movie");

  const [isLoading, setIsLoading] = useState(loading);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const _movies = await fetchMoviesTvShows("movie", searchInput, currentPage);
      setMovies(_movies.results);
      setTotalItems(_movies.total_results);
      setIsLoading(false);
    };
    fetchMovies();
  }, [searchInput, currentPage, setTotalItems]);

  return (
    <>
      {isLoading ? (
        <div className="movieMainSkeleton">
          <div className="movieSkeleton">{renderSkeleton(8)}</div>
        </div>
      ) : (
        <>
          <div className="mainMovies"></div>
          <div className={`cardsBg moviesBg ${isMobile ? "mcardBg" : ""}`}>
            <MoviesTVHeader />
            {renderTopRated(searchInput, topRated)}
            <Typography variant={searchInput ? "subtitle1" : "h6"}>
              {searchInput ? `Search results for: ${searchInput}` : "More"}
            </Typography>
            <RenderItems items={movies} type="movie" />
          </div>
          <Pagination isMobile={isMobile} />
        </>
      )}
    </>
  );
};

export default Movies;
