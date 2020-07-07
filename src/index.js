import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './store/reducers'
import actions from './store/actions'

import './static/css/common.less'
import './static/css/iconfont/iconfont.css'

const store = createStore(reducers, {}, applyMiddleware(logger, thunk))


if (localStorage.city) {
  store.dispatch(actions.city.add_city(localStorage.city))
} else {
  localStorage.setItem('city', '北京')
  store.dispatch(actions.city.add_city(localStorage.city))
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

