import React from 'react';
import renderer from 'react-test-renderer';
import MovieCarousel from '../../components/Base/MovieCarousel';

test('Movie Thumbnail loaded', () => {
  const movies = [
    {
      Id: '1', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg',
    },
    {
      Id: '2', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg',
    },
    {
      Id: '3', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg',
    },
    {
      Id: '4', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg',
    },
    {
      Id: '5', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg',
    },
    {
      Id: '6', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg',
    },
    {
      Id: '7', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg',
    },
    {
      Id: '8', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg',
    },
    {
      Id: '9', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg',
    },
    {
      Id: '10', Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg',
    },
  ];
  const component = renderer.create(
    <MovieCarousel movies={movies} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
