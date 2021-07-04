import { createStore, applyMiddleware } from 'redux';
import { firstReducer } from './Reducers/rootReducer';

const myMiddleWare = _ => next => action => next(action);

function toggleTheme() {
  return { type: 'THEME_TOGGLE' };
}

const asyncMiddleWare = _ => next => action => {
  if (action.type === 'DELAYED_THEME_TOGGLE') {
    console.log('In delay for', action.delay, 'ms');
    setTimeout(() => next(toggleTheme()), action.delay);
  } else {
    next(action);
  }
};

const store = createStore(
  firstReducer,
  applyMiddleware(myMiddleWare, asyncMiddleWare)
);

export { store };
