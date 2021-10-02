import React, { useEffect, useState } from 'react';
import { fetchCurrentUser } from '../../util/api';

export const Home = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchCurrentUser()
      .then((res) => {
        setData(JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <h1>{data}</h1>;
};
