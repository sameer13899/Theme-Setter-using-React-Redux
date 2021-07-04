import { store } from '../store';
import { bindActionCreators } from 'redux';

function toggleTheme() {
  return { type: 'THEME_TOGGLE' };
}
function toggleZoom() {
  return { type: 'ZOOM_TOGGLE' };
}

function delayedToggleTheme(delay = 1000) {
  return { type: 'DELAYED_THEME_TOGGLE', delay };
}

// export const boundThemeToggler = () => store.dispatch(toggleTheme());

// export const boundZoomToggler = () => store.dispatch(toggleZoom());

export const boundUIActions = bindActionCreators(
  { toggleTheme, toggleZoom, delayedToggleTheme },
  store.dispatch
);
