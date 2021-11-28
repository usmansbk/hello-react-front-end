import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingsReducer from './greetings/greetings';

const reducer = combineReducers({
  greetings: greetingsReducer,
  loadingBar: loadingBarReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
