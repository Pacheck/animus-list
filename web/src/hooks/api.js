import { useEffect, useState } from 'react';
import axios from 'axios';

export default function () {
  const [response, setResponse] = useState();

  useEffect(() => {
    const res = async () => {
      await axios.get('https://api.jikan.moe/v3');
    };

    setResponse(res);
  }, []);

  return response;
}
