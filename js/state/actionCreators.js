import axios from 'axios';
import store from './store';

import {
   ADD_TASK,
   DELETE_TASK,
   SHOW_SAVED_MESSAGE,
   HIDE_SAVED_MESSAGE,
   ADD_TASKS_FROM_API,
   SHOW_ADD_MODAL
} from './actions';

export function addTask(title) {
   return { type: ADD_TASK, payload: title };
}
export function deleteTask(id) {
   return { type: DELETE_TASK, payload: id };
}
export function addTasksFromAPI(tasks) {
   return { type: ADD_TASKS_FROM_API, payload: tasks };
}
export function showAddModal(showOrHide) {
   return { type: SHOW_ADD_MODAL, payload: showOrHide };
}

export function showSavedMessage() {
   return { type: SHOW_SAVED_MESSAGE };
}
export function saveTasks() {
   const { tasks } = store.getState();
   return dispatch => {
      axios
         .post('http://cfassignment.herokuapp.com/egrotke/tasks', {
            tasks
         })
         .then(() => {
            dispatch(showSavedMessage());
         })
         .catch(error => {
            console.error('axios error', error); // eslint-disable-line no-console
         });
   };
}
export function hideSavedMessage() {
   return { type: HIDE_SAVED_MESSAGE };
}
// export function fetchTasks() {
//    return dispatch => {
//       axios
//          .get('http://cfassignment.herokuapp.com/egrotke/tasks')
//          .then(response => {
//             dispatch(getTasks(response.data));
//          })
//          .catch(error => {
//             console.error('axios error', error); // eslint-disable-line no-console
//          });
//    };
// }
