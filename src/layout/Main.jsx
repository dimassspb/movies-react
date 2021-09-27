import React, { useState, useEffect } from 'react';

import { Movies } from '../components/Movies.jsx';
import { Preloader } from '../components/Preloader.jsx';
import { Search } from '../components/Search.jsx';

const API_KEY = process.env.REACT_APP_API_KEY;

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchMovies = (str, type = 'all') => {
    setIsLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`,
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {isLoading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};
