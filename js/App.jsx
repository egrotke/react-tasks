import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import Main from './Main';

const AppComponent = () => (
   <Provider store={store}>
      <Main />
   </Provider>
);

AppComponent.defaultProps = {};
export default AppComponent;
