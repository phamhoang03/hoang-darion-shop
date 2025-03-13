import { useState, useEffect } from "react";

const useFetch = (apiCall, dependencies = [], dataProcessor = (data) => data, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiCall();
      setData(dataProcessor(res.data)); // Áp dụng hàm xử lý dữ liệu
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
