import {
   ADD_TASK,
   DELETE_TASK,
   GET_TASKS,
   SHOW_SAVED_MESSAGE,
   HIDE_SAVED_MESSAGE,
   SHOW_ADD_MODAL
} from './actions';
// import axios from 'axios';

const addTask = (state, action) => {
   const { tasks } = state;
   const task = { id: tasks.length + 1, title: action.payload };
   return Object.assign({}, state, { tasks: [task, ...tasks] });
};
const deleteTask = (state, action) => {
   const { tasks } = state;
   return Object.assign({}, state, {
      tasks: tasks.filter(task => task.id !== action.payload)
   });
};
const getTasks = (state, action) => {
   const { tasks } = state;
   return Object.assign({}, state, tasks, action.payload);
};
const showAddModal = (state, action) => {
   console.log('showAddModal', action); // eslint-disable-line no-console
   return Object.assign({}, state, { showAddTaskModal: action.payload });
};
// export function saveTasksToServer(state) {
//    const { tasks } = state;
//    console.log('saveTasksToServer', tasks);
//       axios
//          .post('http://cfassignment.herokuapp.com/egrotke/tasks', {
//             tasks: tasks
//          })
//          .then(response => {
//             console.log('tasks saved', response); // eslint-disable-line no-console
//             // asyncdispatch(showSavedMessage());
//          })
//          .catch(error => {
//             console.error('axios error', error); // eslint-disable-line no-console
//          });
// }
const showSavedMessage = state => Object.assign({}, state, { showAlert: true });

const hideSavedMessage = state =>
   Object.assign({}, state, { showAlert: false });

const rootReducer = (state, action) => {
   switch (action.type) {
      case ADD_TASK:
         return addTask(state, action);
      case DELETE_TASK:
         return deleteTask(state, action);
      // case SAVE_TASKS:
      //    saveTasksToServer(state);
      //    return state;
      case GET_TASKS:
         return getTasks(state, action);
      case SHOW_SAVED_MESSAGE:
         return showSavedMessage(state);
      case HIDE_SAVED_MESSAGE:
         return hideSavedMessage(state);
      case SHOW_ADD_MODAL:
         return showAddModal(state, action);
      default:
         return state;
   }
};

export default rootReducer;
