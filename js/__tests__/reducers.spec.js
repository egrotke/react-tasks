// @flow

import reducers from '../state/reducers';

test('SHOW_ADD_MODAL', () => {
  const state = reducers(
    {
      changesMade: false,
      showAddTaskModal: false,
      showAlert: false,
      tasks: []
    },
    { type: 'SHOW_ADD_MODAL', payload: true }
  );
  expect(state).toEqual({
    changesMade: false,
    showAddTaskModal: true,
    showAlert: false,
    tasks: []
  });
});

test('SHOW_SAVED_MESSAGE', () => {
  const state = reducers(
    { changesMade: true, showAddTaskModal: false, showAlert: false, tasks: [] },
    { type: 'SHOW_SAVED_MESSAGE' }
  );
  expect(state).toEqual({
    changesMade: false,
    showAddTaskModal: false,
    showAlert: true,
    tasks: []
  });
});

test('ADD_TASK', () => {
  const state = reducers(
    {
      changesMade: false,
      showAddTaskModal: false,
      showAlert: false,
      tasks: []
    },
    {
      type: 'ADD_TASK',
      payload: 'Grocery shopping'
    }
  );
  expect(state.tasks[0].title).toEqual('Grocery shopping');
});

test('DELETE_TASK', () => {
  const state = reducers(
    {
      changesMade: false,
      showAddTaskModal: false,
      showAlert: false,
      tasks: [
        {
          title: 'Grocery shopping',
          id: '23fefe324'
        }
      ]
    },
    {
      type: 'DELETE_TASK',
      payload: '23fefe324'
    }
  );
  expect(state).toEqual({
    changesMade: true,
    showAddTaskModal: false,
    showAlert: false,
    tasks: []
  });
});
