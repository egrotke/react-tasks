// @flow

import reducers from '../state/reducers';

test('SHOW_ADD_MODAL', () => {
  const state = reducers(
    {
      changesMade: false,
      showAddTaskModal: false,
      serverAlert: { show: false, success: false, message: '' },
      tasks: []
    },
    { type: 'SHOW_ADD_MODAL', payload: true }
  );
  expect(state).toEqual({
    changesMade: false,
    showAddTaskModal: true,
    serverAlert: { show: false, success: false, message: '' },
    tasks: []
  });
});

test('SHOW_SERVER_ALERT', () => {
  const state = reducers(
    {
      changesMade: true,
      showAddTaskModal: false,
      serverAlert: { show: false, success: false, message: '' },
      tasks: []
    },
    {
      type: 'SHOW_SERVER_ALERT',
      payload: {
        show: true,
        success: true,
        message: 'Tasks saved successfully.'
      }
    }
  );
  expect(state).toEqual({
    changesMade: false,
    showAddTaskModal: false,
    serverAlert: {
      show: true,
      success: true,
      message: 'Tasks saved successfully.'
    },
    tasks: []
  });
});

test('ADD_TASK', () => {
  const state = reducers(
    {
      changesMade: false,
      showAddTaskModal: false,
      serverAlert: { show: false, success: false, message: '' },
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
      serverAlert: { show: false, success: false, message: '' },
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
    serverAlert: { show: false, success: false, message: '' },
    tasks: []
  });
});
