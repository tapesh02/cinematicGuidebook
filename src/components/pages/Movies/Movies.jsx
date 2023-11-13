import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../Cards/Cards";
import { Skeleton } from "@mui/material";

const Movies = () => {
    const skeletonNunber = 5;
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const requestConfig = {
                method: "GET",
                url: "https://api.themoviedb.org/3/discover/movie",
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
                setMovies(response.data.results);
                setIsLoading(false);
            }
        } catch (error) {
            console.log("can not fetch movies");
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const renderSkeleton = () => {
        const skeletons = [];
        for (let i = 0; i < 8; i++) {
            skeletons[i] = <Skeleton key={i} animation="wave" height={200} variant="rectangular" width={130} />;
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
                    <div className="homeCardsBg moviesBg">
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
