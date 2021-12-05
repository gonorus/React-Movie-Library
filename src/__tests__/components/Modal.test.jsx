import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../../components/Base/Modal';

test('Modal Dialog displayed', () => {
  const component = renderer.create(
    <Modal>asd</Modal>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.unmount();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
