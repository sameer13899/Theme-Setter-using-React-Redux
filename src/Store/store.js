import { createStore, applyMiddleware } from 'redux';
import { firstReducer } from './Reducers/rootReducer';

const myMiddleWare = store => next => action => {
  console.log('ACTION TYPE', { action });
  console.log('1. Initial State', store.getState());
  const nextStep = next(action); // reducer function is called.//here we can modify our request 'nextStep'
  console.log('3. Final State', store.getState());
  return nextStep;
};

const store = createStore(firstReducer, applyMiddleware(myMiddleWare));

export { store };
