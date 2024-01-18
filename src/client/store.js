// import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.js';
import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';

const store = createStore(reducers);

export default store;
