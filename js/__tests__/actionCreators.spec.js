// @flow

import { addTask, deleteTask } from '../state/actionCreators';

test('addTask', () => {
  expect(addTask('Laundry day')).toMatchSnapshot();
});

test('deleteTask', () => {
  expect(deleteTask()).toMatchSnapshot();
});

