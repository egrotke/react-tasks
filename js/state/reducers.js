import uid from 'uid';
import {
   ADD_TASK,
   DELETE_TASK,
   ADD_TASKS_FROM_API,
   SHOW_SERVER_ALERT,
   HIDE_SERVER_ALERT,
   SHOW_ADD_MODAL
} from './actions';

const addTask = (state, action) => {
   if (!action.payload) {
      return state;
   }
   const { tasks } = state;
   const task = { id: uid(tasks.length), title: action.payload };
   return Object.assign(
      {},
      state,
      { changesMade: true },
      { tasks: [task, ...tasks] }
   );
};
const deleteTask = (state, action) => {
   const { tasks } = state;
   return Object.assign(
      {},
      state,
      { changesMade: true },
      {
         tasks: tasks.filter(task => task.id !== action.payload)
      }
   );
};
const getTasks = (state, action) => {
   const { tasks } = state;
   return Object.assign({}, state, tasks, action.payload);
};
const showAddModal = (state, action) =>
   Object.assign({}, state, { showAddTaskModal: action.payload });

const showServerAlert = (state, action) => {
   const dirty = !action.payload.success;
   return Object.assign(
      {},
      state,
      { changesMade: dirty },
      { serverAlert: action.payload }
   );
};

const hideServerAlert = state =>
   Object.assign({}, state, {
      serverAlert: { show: false, success: false, message: '' }
   });

const rootReducer = (state, action) => {
   switch (action.type) {
      case ADD_TASK:
         return addTask(state, action);
      case DELETE_TASK:
         return deleteTask(state, action);
      case ADD_TASKS_FROM_API:
         return getTasks(state, action);
      case SHOW_SERVER_ALERT:
         return showServerAlert(state, action);
      case HIDE_SERVER_ALERT:
         return hideServerAlert(state);
      case SHOW_ADD_MODAL:
         return showAddModal(state, action);
      default:
         return state;
   }
};

export default rootReducer;
