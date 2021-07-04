import React from 'react';

function DecorateText({ children, theme, zoom }) {
  return <div style={{ color: theme, fontSize: zoom }}>{children}</div>;
}

export default DecorateText;
