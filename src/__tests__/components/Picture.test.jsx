import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Picture from '../../components/Base/Picture';

test('Picture loaded', () => {
  const component = renderer.create(
    <Picture src='https://images.unsplash.com/photo-1637249805971-59d7b9319df3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='alternate image' />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const componentInstance = component.root;
  const imgInstance = componentInstance.findByType('img');

  act(() => imgInstance.props.onLoad());
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(() => imgInstance.props.onError());
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
