import React from 'react';
import { connect } from 'react-redux';

function DecorateText({ children, state }) {
  // const { theme, zoom } = state.firstReducer; // if using combineReducers
  const { theme, zoom } = state;
  return <div style={{ color: theme, fontSize: zoom }}>{children}</div>;
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(DecorateText);
