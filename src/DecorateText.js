import React, { useContext } from 'react';
import { ThemeProvider, ZoomProvider } from './StyleProvider';

function DecorateText({ children }) {
  const { theme } = useContext(ThemeProvider);
  const { zoom } = useContext(ZoomProvider);
  return <div style={{ color: theme, fontSize: zoom }}>{children}</div>;
}

export default DecorateText;
