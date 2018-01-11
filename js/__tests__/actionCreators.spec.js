// @flow

import { addTask, deleteTask } from '../state/actionCreators';
// import moxios from 'moxios';
// import fetchTasks from '../state/asyncActions';

test('addTask', () => {
  expect(addTask('Laundry day')).toMatchSnapshot();
});

test('deleteTask', () => {
  expect(deleteTask()).toMatchSnapshot();
});

// test('fetchTasks', (done: Function) => {
//   const dispatchMock = jest.fn();
//   moxios.withMock(() => {
//     fetchTasks()(dispatchMock);
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request
//         .respondWith({
//           status: 200,
//           response: ''
//         })
//         .then(() => {
//           expect(request.url).toEqual(
//             `http://cfassignment.herokuapp.com/egrotke/tasks`
//           );
//           expect(dispatchMock).toBeCalledWith(fetchTasks());
//           done();
//         });
//     });
//   });
// });
