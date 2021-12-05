import React from 'react';
import PropTypes from 'prop-types';
import './MovieCarousel.scss';

import MovieThumbnail from './MovieThumbnail';

/**
 * @param {*} props
 * @returns
 */
const MovieCarousel = ({ title, movies }) => (
  <div className='movie-carousel-container'>
    <h3>{title}</h3>
    <div className='movie-carousel'>
      {
        movies.map((movie) => <MovieThumbnail role='button' key={movie.Id} movie={movie} />)
      }
    </div>
  </div>
);
MovieCarousel.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.shape({
    Id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    ReleaseDate: PropTypes.objectOf(Date).isRequired,
    ImagePath: PropTypes.string.isRequired,
    MovieDetails: PropTypes.string.isRequired,
  })).isRequired,
};
MovieCarousel.defaultProps = {
  title: ''
};
export default MovieCarousel;
