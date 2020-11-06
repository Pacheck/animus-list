import { useEffect, useState } from 'react';

import axios from 'axios';

export default async (path) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async (path) => {
      const pathURL = path ? `/${path}` : '';
      const result = await axios
        .get(`https://api.jikan.moe/v3${pathURL}`, {
          params: {
            _limit: 10,
          },
        })
        .then((res) => setResponse(res.data.results));

      // setResponse(result.data.pictures);
    };

    fetchData(path);
  }, [path]);

  return response;
};
