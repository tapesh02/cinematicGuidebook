import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../useContext/Context";
import { fetchMoviesTvShows } from "../../../helpers/apiHelpers";

import MoviesTVHeader from "../../MoviesTVHeader/MoviesTVHeader";
import Pagination from "../../Pagination/Pagination";
import { RenderItems, renderSkeleton, renderTopRated } from "../../../helpers/MovieTVHelpers";

import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import useTopRated from "../../../useHooks/useTopRated";

const TvShows = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { searchInput, setTotalItems, currentPage } = useContext(GlobalContext);
  const { topRated, loading } = useTopRated("tv");

  const [isLoading, setIsLoading] = useState(loading);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchTvShows = async () => {
      const _tvshows = await fetchMoviesTvShows("tv", searchInput, currentPage);
      setTvShows(_tvshows.results);
      setTotalItems(_tvshows.total_results);
      setIsLoading(false);
    };
    fetchTvShows();
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
          <div className={`cardsBg moviesBg ${isMobile ? "mCardBg" : ""}`}>
            <MoviesTVHeader />
            {renderTopRated(searchInput, topRated)}
            <Typography variant="h6">{searchInput ? "Search results" : "More"}</Typography>
            <RenderItems items={tvShows} type="tv" />
          </div>
          <Pagination isMobile={isMobile} />
        </>
      )}
    </>
  );
};

export default TvShows;
