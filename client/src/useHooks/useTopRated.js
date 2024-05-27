import { useEffect, useState } from "react";
import axios from "axios";

const useTopRated = (type) => {
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTopRated = async () => {
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
        if (response?.data?.results) {
          setTopRated(response.data.results);
        } else {
          setError("No data found.");
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };
    fetchTopRated();
  }, [type]);

  return { topRated, loading, error };
};

export default useTopRated;
