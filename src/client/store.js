// import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.js';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: reducers });

export default store;
