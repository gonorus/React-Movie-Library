import React from 'react';
import PropTypes from 'prop-types';
import './MovieThumbnail.scss';

import Picture from './Picture';
import { DateToMDY } from '../../helpers/Date';
import { DisplayModal } from './Modal';
import MovieDetail from './MovieDetail';

/**
 * Movie Thumbnail with title
 */
const MovieThumbnail = ({ movie }) => {
  const {
    Title, ReleaseDate, ImagePath, MovieDetails
  } = movie;

  /**
   * should displaying Movie details
   */
  const OnMovieSelected = () => {
    DisplayModal(<MovieDetail url={MovieDetails} />);
  };

  /**
   * handle Enter Key pressed
   * @param {Event} evt
   */
  const OnKeyPressed = (evt) => {
    if (evt.charCode === 13) {
      OnMovieSelected();
    }
  };

  return (
    <div
      className='movie-thumbnail-card'
      role='button'
      tabIndex={0}
      onClick={OnMovieSelected}
      onKeyPress={OnKeyPressed}
    >
      <Picture src={ImagePath} alt={Title} />
      <div className='movie-thumbnail-info'>
        <h3>{Title}</h3>
        <p>{DateToMDY(ReleaseDate)}</p>
      </div>
    </div>
  );
};
MovieThumbnail.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ReleaseDate: PropTypes.objectOf(Date).isRequired,
    ImagePath: PropTypes.string.isRequired,
    MovieDetails: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieThumbnail;
