import { combineReducers } from 'redux';

// import all reducers here
import tileReducer from './tileReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  tiles: tileReducer,
});

// make the combined reducers available for import
export default reducers;
