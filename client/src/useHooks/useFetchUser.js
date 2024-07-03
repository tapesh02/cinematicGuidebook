import { useState, useEffect } from "react";
import axios from "axios";
import { urlPath } from "../helpers/apiHelpers";

const useFetchUser = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${urlPath}/user`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        setError("Error getting user details");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, error, loading };
};

export default useFetchUser;
