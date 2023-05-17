import React from 'react';
import './HeaderWrapper.css';

const HeaderWrapper = ({ children }) => {
  return <div className="header-wrapper">{children}</div>;
};

export default HeaderWrapper;