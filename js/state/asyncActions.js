// @flow

import axios from 'axios';
import { addTasksFromAPI } from './actionCreators';

export default function fetchTasks() {
   return (dispatch: Function) => {
      axios
         .get('http://cfassignment.herokuapp.com/egrotke/tasks')
         .then(response => {
            dispatch(addTasksFromAPI(response.data));
         })
         .catch(error => {
            console.error('axios error', error); // eslint-disable-line no-console
         });
   };
}
