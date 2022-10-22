import { useState, useEffect } from "react";

const url = `http://localhost:3000`;

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/${endpoint}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        
      }
    };
    fetchData();
  }, [data]);
  return { data };
};
