import axios from "axios";

export const fetchTopRated = async (type) => {
    const url = `${process.env.REACT_APP_BASEPATH}/trending/${type}/day`;
    try {
        const requestConfig = {
            method: "GET",
            url: url,
            params: { language: "en-US" },
            headers: { accept: "application/json", Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
        };

        const response = await axios.request(requestConfig);
        return response.data.results;
    } catch (error) {
        return console.log("error fetching topRated");
    }
};
