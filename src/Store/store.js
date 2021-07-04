// import { createStore, combineReducers } from 'redux'; // if using combineReducers
import { createStore } from 'redux';
import { firstReducer } from './Reducers/rootReducer';
// import { dataReducer } from './Reducers/dataReducer'; // if using combineReducers

// const store = createStore(combineReducers({ , dataReducer })); // if using combineReducers
const store = createStore(firstReducer);

export { store };
