import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { fetchCurrentUser } from '../../api';
import { Hero } from './Hero';
import { Footer } from './Footer';

export const Landing = () => {
  let history = useHistory();

  useEffect(() => {
    fetchCurrentUser().then((res) => {
      if (res.status === 200) {
        history.push('/browse');
      }
    });
  }, [history]);

  return (
    <>
      <Hero />
      <Footer />
    </>
  );
};
