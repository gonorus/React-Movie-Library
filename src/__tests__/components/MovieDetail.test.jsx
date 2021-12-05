import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetail from '../../components/Base/MovieDetail';

test('Movie Detail displayed', () => {
  const component = renderer.create(
    <MovieDetail url='http://localhost/details' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.unmount();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
