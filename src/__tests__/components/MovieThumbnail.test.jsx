import React from 'react';
import renderer, { act } from 'react-test-renderer';
import MovieThumbnail from '../../components/Base/MovieThumbnail';

test('Movie Thumbnail loaded', () => {
  const movie = {
    Title: 'Movie Title', ReleaseDate: new Date('2021-12-04'), ImagePath: 'http://localhost/example.jpg', MovieDetails: 'http://localhost/details'
  };
  const component = renderer.create(
    <MovieThumbnail movie={movie} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(() => tree.props.onClick());
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(() => tree.props.onKeyPress({ charCode: 13 }));
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(() => tree.props.onKeyPress({ charCode: 0 }));
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
