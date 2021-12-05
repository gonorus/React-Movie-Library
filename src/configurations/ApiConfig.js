const ApiConfig = {
  KEY: 'd212dc1bfc2d8009f736f68f2e71938f',
};

export const API_URL = {
  URL: 'https://api.themoviedb.org/3',
  THUMBNAIL_IMAGE_URL: 'https://image.tmdb.org/t/p/w200/{ImagePath}',
};

export const MOVIE_DB = {
  DETAILS: `${API_URL.URL}/movie/{Id}?api_key=${ApiConfig.KEY}`,
  POPULAR: `${API_URL.URL}/movie/popular?api_key=${ApiConfig.KEY}`,
  NOW_PLAYING: `${API_URL.URL}/movie/now_playing?api_key=${ApiConfig.KEY}`,
  UPCOMING: `${API_URL.URL}/movie/upcoming?api_key=${ApiConfig.KEY}`,
};

export const TV_DB = {
  DETAILS: `${API_URL.URL}/tv/{id}?api_key=${ApiConfig.KEY}`,
  POPULAR: `${API_URL.URL}/tv/popular?api_key=${ApiConfig.KEY}`,
};
