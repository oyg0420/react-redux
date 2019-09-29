import App from './components/App';
import React from 'react';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';

// **** 리덕스 개발자도구 적용
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
