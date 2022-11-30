import { useState, useEffect } from "react";

const url = `http://localhost:3000`;

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [method, setMethod] = useState(null);
  const [config, setConfig] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  const httpConfig = (data, method, dataId) => {
    if (method === `POST`) {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setItemId(data);
    }
    if (method === `DELETE`) {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setItemId(data);
    }
    if (method === `PATCH`) {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setItemId(dataId);
    }
    setMethod(method);
    setCallFetch(data);
  };

  //get
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/${endpoint}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        throw err;
      }
    };
    fetchData();
  }, [endpoint, method, callFetch,data]);

  //post
  useEffect(() => {
    const httpRequest = async () => {
      let fetchOptions;

      const fetchFunction = async (url) => {
        fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();
        console.log(json, `reposyta `);
        setCallFetch(json);
      };

      if (method === `POST`) {
        fetchFunction(`${url}/${endpoint}`);
      }

      if (method === "DELETE" || method === `PATCH`) {
        fetchFunction(`${url}/${endpoint}/${itemId}`);
      }
    };
    httpRequest();
  }, [config, endpoint, method, itemId]);
  return { data, httpConfig, itemId };
};
