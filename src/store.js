import { createStore } from 'redux';
import { firstReducer } from './rootReducer';

const store = createStore(firstReducer);

export { store };
