import { createStore, combineReducers } from 'redux';
import { firstReducer } from './rootReducer';
import { dataReducer } from './dataReducer';

const store = createStore(combineReducers({ firstReducer, dataReducer }));

export { store };
