import { createStore, compose, applyMiddleware } from 'redux'; // add applyMiddleware
import thunk from 'redux-thunk'; // import
import rootReducer from './reducers';

const initialState = {
   showAlert: false,
   showAddTaskModal: false,
   tasks: []
};
const store = createStore(
   rootReducer,
   initialState,
   compose(
      applyMiddleware(thunk), // middleware
      typeof window === 'object' &&
         typeof window.devToolsExtension !== 'undefined'
         ? window.devToolsExtension()
         : f => f
   )
);

export default store;
