import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (url, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = useCallback(() => {
    setLoading(true);
    setError(null);
    setData(null);
  }, []);

  useEffect(() => {
    if (!url) return;

    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          process.env.REACT_APP_API_BASE_URL + url,
          { params },
        );
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "An error occurred");
        setLoading(false);
      }
    })();
  }, [url, JSON.stringify(params)]);

  return { data, loading, error, refetch };
};

export default useFetch;
