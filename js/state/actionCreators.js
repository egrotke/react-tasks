import axios from 'axios';
import store from './store';

import {
   ADD_TASK,
   DELETE_TASK,
   SHOW_SAVED_MESSAGE,
   HIDE_SAVED_MESSAGE,
   GET_TASKS
} from './actions';

export function addTask(title) {
   return { type: ADD_TASK, payload: title };
}
export function deleteTask(id) {
   return { type: DELETE_TASK, payload: id };
}
export function getTasks(tasks) {
   return { type: GET_TASKS, payload: tasks };
}
// export function saveTasks(tasks) {
//    showSavedMessage();
//    return { type: SAVE_TASKS, payload: tasks };
// }
export function showSavedMessage() {
   return { type: SHOW_SAVED_MESSAGE };
}
export function saveTasks() {
   const { tasks } = store.getState();
   // console.log('saveTasksToServer', tasks);
   return dispatch => {
      axios
         .post('http://cfassignment.herokuapp.com/egrotke/tasks', {
            tasks
         })
         .then(() => {
            // console.log('tasks saved', response); // eslint-disable-line no-console
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
export function fetchTasks() {
   return dispatch => {
      axios
         .get('http://cfassignment.herokuapp.com/egrotke/tasks')
         .then(response => {
            dispatch(getTasks(response.data));
         })
         .catch(error => {
            console.error('axios error', error); // eslint-disable-line no-console
         });
   };
}
