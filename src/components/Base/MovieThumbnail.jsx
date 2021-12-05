import React from 'react';
import PropTypes from 'prop-types';
import './MovieThumbnail.scss';

import Picture from './Picture';
import { DateToMDY } from '../../helpers/Date';

/**
 * Movie Thumbnail with title
 */
const MovieThumbnail = React.forwardRef((props, ref) => {
  const { Title, ReleaseDate, ImagePath } = props.movie;
  return (
    <div className='movie-thumbnail-card'>
      <Picture ref={ref} src={ImagePath} alt={Title} />
      <div className='movie-thumbnail-info'>
        <h3>{Title}</h3>
        <p>{DateToMDY(ReleaseDate)}</p>
      </div>
    </div>
  );
});
MovieThumbnail.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ReleaseDate: PropTypes.objectOf(Date).isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieThumbnail;
