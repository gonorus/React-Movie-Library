import React from 'react';
import renderer from 'react-test-renderer';
import MovieThumbnail from '../../components/Base/MovieThumbnail';

test('Movie Thumbnail loaded', () => {
  const movie = { Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg' };
  const component = renderer.create(
    <MovieThumbnail movie={movie} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
