import React from 'react';
import { Movie } from './Movie.jsx';

export function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>
          Nothing found
          <i class="material-icons">
            sentiment_very_dissatisfied
          </i>
        </h4>
      )}
    </div>
  );
}
