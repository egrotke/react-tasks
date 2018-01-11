// @flow

// import React from 'react';
// import { shallow } from 'enzyme';
// import axios from 'axios';
// import moxios from 'moxios';
// import sinon from 'sinon';
// import Task from '../Task';
// import { Unwrapped as UnwrappedTaskList } from '../TaskList';
// // import fetchTasks from '../state/asyncActions';

// test('TaskList renders correctly', () => {
//   const component = shallow(<UnwrappedTaskList shows={preload.shows} />);
//   expect(component).toMatchSnapshot();
// });

// test('TaskList should render correct amount of tasks', () => {
//   moxios.withMock(() => {
//     const onFulfilled = sinon.spy();
//      axios.get('http://cfassignment.herokuapp.com/egrotke/tasks')
//       .then(onFulfilled);

//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//   const component = shallow(<UnwrappedTaskList shows={preload.shows} />);

//     });
//   });
//   expect(preload.shows.length).toEqual(component.find(Task).length);
// });
