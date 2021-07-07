import React, { useContext } from 'react';
import { StyleContext } from './Store/store';

function DecorateText({ children }) {
  const { theme, zoom } = useContext(StyleContext).state;
  return <div style={{ color: theme, fontSize: zoom }}>{children}</div>;
}

export default DecorateText;
