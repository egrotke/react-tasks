import axios from 'axios';
import store from './store';

import {
   ADD_TASK,
   DELETE_TASK,
   SHOW_SERVER_ALERT,
   HIDE_SERVER_ALERT,
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

export function showServerAlert(result) {
   return { type: SHOW_SERVER_ALERT, payload: result };
}
export function saveTasks() {
   const { tasks } = store.getState();
   return dispatch => {
      axios
         .post('http://cfassignment.herokuapp.com/egrotke/tasks', {
            tasks
         })
         .then(() => {
            dispatch(
               showServerAlert({
                  show: true,
                  success: true,
                  message: 'Tasks saved successfully.'
               })
            );
         })
         .catch(error => {
            dispatch(
               showServerAlert({
                  show: true,
                  success: false,
                  message: 'Error: tasks not saved!'
               })
            );
            console.error('axios error', error); // eslint-disable-line no-console
         });
   };
}
export function hideSavedMessage() {
   return { type: HIDE_SERVER_ALERT };
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
