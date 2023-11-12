import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../Cards/Cards";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
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
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTU4ZWQ1NzkzZGZkZDVmMmYxZWZjMjA2OWNkYzExMiIsInN1YiI6IjYwNWI0ODUxN2RmZGE2MDAyOGZlZjA3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-sSCnDCqigw-Tk_cMg07MbphQBUGLd3E93z7SLptm04",
            },
        };
        const response = await axios.request(requestConfig);

        if (response) {
            setMovies(response.data.results);
            console.log(response.data.results);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="mainMovies">
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
        </div>
    );
};

export default Movies;
