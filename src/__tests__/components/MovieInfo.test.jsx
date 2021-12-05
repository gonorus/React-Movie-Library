import React from 'react';
import renderer from 'react-test-renderer';
import { MovieInfo } from '../../components/Base/MovieDetail';

test('Movie info displayed', () => {
  const movie = {
    Title: 'Movie Title',
    ReleaseDate: new Date('2021-12-04'),
    ImagePath: 'http://localhost/example.jpg',
    Overview: 'movie overview',
  };
  const component = renderer.create(
    <MovieInfo movie={movie} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
