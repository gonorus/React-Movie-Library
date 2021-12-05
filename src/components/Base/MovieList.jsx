import React, { useEffect, useState } from 'react';

import { API_URL, MOVIE_DB, TV_DB } from '../../configurations/ApiConfig';
import { GetRequest } from '../../helpers/HttpRequest';
import MovieCarousel from './MovieCarousel';

/**
 * extracting the movie list response into derived Movie object
 * @param {*} dataResult
 * @returns
 */
const ExtractMovieList = (dataResult) => dataResult.map(
  ({
    id, title, release_date, poster_path, // Movie Props
    name, first_air_date, // TV Props
  }) => ({
    Id: id.toString(),
    Title: title || name,
    // eslint-disable-next-line camelcase
    ReleaseDate: release_date ? new Date(release_date) : new Date(first_air_date),
    ImagePath: API_URL.THUMBNAIL_IMAGE_URL.replace('/{ImagePath}', poster_path),
    MovieDetails: title ? MOVIE_DB.DETAILS.replace('{Id}', id) : TV_DB.DETAILS.replace('{Id}', id),
  })
);

export const PopularTvShows = () => {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    GetRequest(TV_DB.POPULAR)
      .then(
        ({ data }) => {
          const result = ExtractMovieList(data.results);
          if (result.length > 0) setMovies(result);
          else setMovies(null);
        }
      ).catch(() => setMovies(null));
  }, []);

  return Movies ? <MovieCarousel title='Popular TV Show' movies={Movies} /> : <></>;
};

export const PopularMovies = () => {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    GetRequest(MOVIE_DB.POPULAR)
      .then(
        ({ data }) => {
          const result = ExtractMovieList(data.results);
          if (result.length > 0) setMovies(result);
          else setMovies(null);
        }
      ).catch(() => setMovies(null));
  }, []);

  return Movies ? <MovieCarousel title='Popular Movies' movies={Movies} /> : <></>;
};

export const NowPlayingMovies = () => {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    GetRequest(MOVIE_DB.NOW_PLAYING)
      .then(
        ({ data }) => {
          const result = ExtractMovieList(data.results);
          if (result.length > 0) setMovies(result);
          else setMovies(null);
        }
      ).catch(() => setMovies(null));
  }, []);

  return Movies ? <MovieCarousel title='Now Playing Movies' movies={Movies} /> : <></>;
};

export const UpcomingMovies = () => {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    GetRequest(MOVIE_DB.UPCOMING)
      .then(
        ({ data }) => {
          const result = ExtractMovieList(data.results);
          if (result.length > 0) setMovies(result);
          else setMovies(null);
        }
      ).catch(() => setMovies(null));
  }, []);

  return Movies ? <MovieCarousel title='Upcoming Movies' movies={Movies} /> : <></>;
};
