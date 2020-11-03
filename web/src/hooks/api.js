import { useEffect, useState } from 'react';

import axios from 'axios';

export default function (path) {
  const [response, setResponse] = useState([]);

  useEffect(async () => {
    const pathURL = path ? `/${path}` : '';
    const res = await axios.get(`https://api.jikan.moe/v3${pathURL}`);

    setResponse(res);
  }, []);

  return response;
}
