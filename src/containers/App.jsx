import React from 'react';
import './App.css';

import {
  NowPlayingMovies, PopularTvShows, PopularMovies, UpcomingMovies
} from '../components/Base/MovieList';

const App = () => (
  <div className='App'>
    <section>
      <NowPlayingMovies />
      <PopularTvShows />
      <PopularMovies />
      <UpcomingMovies />
    </section>
  </div>
);
export default App;
