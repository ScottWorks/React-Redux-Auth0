import { combineReducers } from 'redux';

import filterReducer from './filterReducer';
import personListReducer from './personListReducer';

// const rootReducer = personListReducer;

export default combineReducers({ filterReducer, personListReducer });
