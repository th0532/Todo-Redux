import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import './index.css';
import App from './App';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

      //  // 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
      //  const listener = () => {
      //   const state = store.getState();
      //   console.log(state);
      // };
      
      // const unsubscribe = store.subscribe(listener);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

