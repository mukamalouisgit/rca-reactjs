import React from 'react';
import './BodyWrapper.css';

const BodyWrapper = ({ children }) => {
  return <div className="body-wrapper">{children}</div>;
};

export default BodyWrapper;