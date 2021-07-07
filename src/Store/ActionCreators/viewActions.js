function toggleTheme() {
  return { type: 'THEME_TOGGLE' };
}
function toggleZoom() {
  return { type: 'ZOOM_TOGGLE' };
}

function delayedToggleTheme(delay = 1000) {
  return { type: 'DELAYED_THEME_TOGGLE', delay };
}

export { toggleTheme, toggleZoom, delayedToggleTheme };
