import { client } from "../client";

export const urlPath =
  window.location.hostname === "localhost" ? "http://localhost:5000" : `${process.env.REACT_APP_API_URL}`;

export const fetchMoviesTvShows = async (type, searchInput, pageNumber) => {
  const url = searchInput ? "/search/multi" : `/discover/${type}`;

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
    };

    const response = await client.request(requestConfig);
    return response.data;
  } catch (error) {
    return console.log("error fetching movies or tv shows");
  }
};

export const fetchById = async (searchQuery, searchId, queryParams = "") => {
  const url = `/${searchQuery}/${searchId}${queryParams}`;
  try {
    const requestConfig = {
      method: "GET",
      url: url,
      params: {
        language: "en-US",
      },
    };
    const response = await client.request(requestConfig);
    return response.data;
  } catch (error) {
    return console.log("error fetching single item");
  }
};
