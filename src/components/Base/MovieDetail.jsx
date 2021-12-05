import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MovieDetail.scss';

import Modal from './Modal';
import Spinner from '../Misc/Spinner';
import { GetRequest } from '../../helpers/HttpRequest';
import { API_URL } from '../../configurations/ApiConfig';
import Picture from './Picture';
import { DateToMDY } from '../../helpers/Date';

/**
 * displaying Loader message
 */
const MovieLoader = () => (
  <>
    <Spinner />
    <p>Please wait...</p>
  </>
);

/**
 * displaying the movie information
 * @param {*} props
 */
export const MovieInfo = ({ movie }) => {
  const {
    Title, ReleaseDate, ImagePath, Overview
  } = movie;
  return (
    <>
      <Picture src={ImagePath} />
      <div className='movie-info'>
        <pre>
          Title:
          {' '}
          {Title}
          {'\n'}
          Release:
          {' '}
          {DateToMDY(ReleaseDate)}
        </pre>
        <p>
          {Overview}
        </p>
      </div>
    </>
  );
};
MovieInfo.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ReleaseDate: PropTypes.objectOf(Date).isRequired,
    ImagePath: PropTypes.string.isRequired,
    Overview: PropTypes.string.isRequired,
  }).isRequired,
};

/**
 * Movie Details dialog
 * @param {*} props
 * @returns
 */
const MovieDetail = ({ url }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    GetRequest(url)
      .then(
        (response) => {
          const {
            id, title, release_date, poster_path, // Movie Props
            name, first_air_date, // TV Props
            overview,
          } = response.data;
          setMovieDetails(({
            Id: id.toString(),
            Title: title || name,
            // eslint-disable-next-line camelcase
            ReleaseDate: release_date ? new Date(release_date) : new Date(first_air_date),
            ImagePath: API_URL.THUMBNAIL_IMAGE_URL.replace('/{ImagePath}', poster_path),
            Overview: overview,
          }));
        }
      )
      .catch(() => setMovieDetails(null))
      .finally(() => setIsLoaded(true));
  }, []);

  return (
    <Modal>
      <div className='movie-details-container'>
        {isLoaded === false && <MovieLoader />}
        {isLoaded === true && <MovieInfo movie={movieDetails} />}
      </div>
    </Modal>
  );
};
MovieDetail.propTypes = {
  url: PropTypes.string.isRequired
};
export default MovieDetail;
