import axios from "axios";

export const fetchTopRated = async (type) => {
    const url = `${process.env.REACT_APP_BASEPATH}/trending/${type}/day`;
    try {
        const requestConfig = {
            method: "GET",
            url: url,
            params: { language: "en-US" },
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
        };

        const response = await axios.request(requestConfig);
        return response.data.results;
    } catch (error) {
        return console.log("error fetching topRated");
    }
};

export const fetchMoviesTvShows = async (type, searchInput, pageNumber) => {
    const url = searchInput
        ? `${process.env.REACT_APP_BASEPATH}/search/multi`
        : `${process.env.REACT_APP_BASEPATH}/discover/${type}`;

    try {
        const requestConfig = {
            method: "GET",
            url: url,
            params: {
                query: `${searchInput}`,
                include_adult: "false",
                include_video: "false",
                language: "en-US",
                page: `${pageNumber}`,
                sort_by: "popularity.desc",
            },
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
        };

        const response = await axios.request(requestConfig);
        return response.data;
    } catch (error) {
        return console.log("error fetching movies or tv shows");
    }
};
