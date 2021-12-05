import React from 'react';
import renderer from 'react-test-renderer';
import MovieCarousel from '../../components/Base/MovieCarousel';

test('Movie Carousel loaded', () => {
  const movies = [
    {
      Id: '1', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg', MovieDetails: 'http://localhost/details',
    },
    {
      Id: '2', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg', MovieDetails: 'http://localhost/details',
    },
    {
      Id: '3', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg', MovieDetails: 'http://localhost/details',
    },
    {
      Id: '4', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg', MovieDetails: 'http://localhost/details',
    },
    {
      Id: '5', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg', MovieDetails: 'http://localhost/details',
    },
    {
      Id: '6', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg', MovieDetails: 'http://localhost/details',
    },
    {
      Id: '7', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg', MovieDetails: 'http://localhost/details',
    },
    {
      Id: '8', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg', MovieDetails: 'http://localhost/details',
    },
    {
      Id: '9', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg', MovieDetails: 'http://localhost/details',
    },
    {
      Id: '10', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg', MovieDetails: 'http://localhost/details',
    },
  ];
  const component = renderer.create(
    <MovieCarousel movies={movies} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
