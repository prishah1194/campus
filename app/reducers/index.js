/* combineReducers is not currently used, but eventually should be for modular code :D */
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import studentReducer from './student'
import campusReducer from './campus'

const rootReducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer,
})



export default rootReducer;
export * from './campus';
