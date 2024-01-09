import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import Cards from "../../Cards/Cards";
import { Skeleton, useMediaQuery } from "@mui/material";
import MoviesTVHeader from "../../MoviesTVHeader/MoviesTVHeader";

const TvShows = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [isLoading, setIsLoading] = useState(true);
    const [tvShows, setTvShows] = useState([]);

    const fetchTvShows = async () => {
        try {
            const requestConfig = {
                method: "GET",
                url: "https://api.themoviedb.org/3/discover/tv",
                params: {
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
                setTvShows(response.data.results);
                setIsLoading(false);
            }
        } catch (error) {
            console.log("can not fetch tvShows");
        }
    };

    useEffect(() => {
        fetchTvShows();
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
