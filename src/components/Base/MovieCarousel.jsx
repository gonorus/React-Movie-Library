import React from 'react';
import PropTypes from 'prop-types';
import './MovieCarousel.scss';

import MovieThumbnail from './MovieThumbnail';

/**
 * @param {*} props
 * @returns
 */
const MovieCarousel = ({ movies }) => (
  <div className='movie-carousel'>
    {
      movies.map((movie) => <MovieThumbnail key={movie.Id} movie={movie} />)
    }
  </div>
);
MovieCarousel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    Id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    ReleaseDate: PropTypes.objectOf(Date).isRequired,
    ImagePath: PropTypes.string.isRequired,
  })),
};
MovieCarousel.defaultProps = {
  movies: [
    {
      Id: '1', Title: 'Movie Title', ReleaseDate: new Date(), ImagePath: 'http://localhost/example.jpg',
    },
    {
      Id: '2', Title: 'Movie Title', ReleaseDate: new Date(), ImagePath: 'https://www.themoviedb.org/t/p/w440_and_h660_face/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
    },
    {
      Id: '3', Title: 'Movie Title', ReleaseDate: new Date(), ImagePath: 'http://localhost/example.jpg',
    },
    {
      Id: '4', Title: 'Movie Title', ReleaseDate: new Date(), ImagePath: 'https://www.themoviedb.org/t/p/w440_and_h660_face/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
    },
    {
      Id: '5', Title: 'Movie Title', ReleaseDate: new Date(), ImagePath: 'http://localhost/example.jpg',
    },
    {
      Id: '6', Title: 'Movie Title', ReleaseDate: new Date(), ImagePath: 'https://www.themoviedb.org/t/p/w440_and_h660_face/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
    },
    {
      Id: '7', Title: 'Movie Title', ReleaseDate: new Date(), ImagePath: 'http://localhost/example.jpg',
    },
    {
      Id: '8', Title: 'Movie Title', ReleaseDate: new Date(), ImagePath: 'https://www.themoviedb.org/t/p/w440_and_h660_face/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
    },
    {
      Id: '9', Title: 'Movie Title', ReleaseDate: new Date(), ImagePath: 'http://localhost/example.jpg',
    },
    {
      Id: '10', Title: 'Movie Title', ReleaseDate: new Date(), ImagePath: 'https://www.themoviedb.org/t/p/w440_and_h660_face/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
    },
  ],
};
export default MovieCarousel;
