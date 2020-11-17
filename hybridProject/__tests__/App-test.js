/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import configureStore from '../src/store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let findElement = function (tree, element) {
  // console.warn(tree.children);
  let result;
  // eslint-disable-next-line no-undef
  for (node in tree.children) {
    // eslint-disable-next-line no-undef
    if (tree.children[node].props.testID === element) {
      result = true;
    }
  }
  return result;
};
test('Renders snapshot as expected', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('find increment', () => {
  let tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    .toJSON();
  //console.warn(tree);

  expect(findElement(tree, 'increment')).toBeDefined();
});
