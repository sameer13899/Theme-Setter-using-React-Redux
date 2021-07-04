import { store } from '../store';
// import { bindActionCreators } from 'redux';

function toggleTheme() {
  return { type: 'THEME_TOGGLE' };
}
function toggleZoom() {
  return { type: 'ZOOM_TOGGLE' };
}

export const boundThemeToggler = () => store.dispatch(toggleTheme());

export const boundZoomToggler = () => store.dispatch(toggleZoom());

// export const boundThemeToggler = () =>
//   bindActionCreators(toggleTheme, store.dispatch);

// export const boundZoomToggler = () =>
//   bindActionCreators(toggleZoom, store.dispatch);
