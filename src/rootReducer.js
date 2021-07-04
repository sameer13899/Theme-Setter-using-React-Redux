import { THEMES, ZOOMING } from './Constants';

const globallyAccessible = {
  theme: THEMES.GREEN,
  zoom: ZOOMING.SMALL,
};

function firstReducer(state = globallyAccessible, action) {
  if (action.type === 'THEME_TOGGLE') {
    return {
      ...state,
      theme: state.theme === THEMES.RED ? THEMES.GREEN : THEMES.RED,
    };
  } else if (action.type === 'ZOOM_TOGGLE') {
    return {
      ...state,
      zoom: state.zoom === ZOOMING.SMALL ? ZOOMING.LARGE : ZOOMING.SMALL,
    };
  } else return state;
}

export { firstReducer };
