import './App.css';

import React from 'react';
import HeaderWrapper from './components/HeaderWrapper';
import FooterWrapper from './components/FooterWrapper';

import About from './components/About';
import BodyWrapper from './components/BodyWrapper';

const App = () => {
  return (
    <>
      <HeaderWrapper>
        <p>This is a wrapped component.</p>
        {/* Other child components */}
      </HeaderWrapper>

      <BodyWrapper>
        <small>Body contents to be placed here bellow ...</small>
        <About />
      </BodyWrapper>

      <FooterWrapper>
        <p>This is a wrapped component.</p>
        {/* Other child components */}
      </FooterWrapper>
    </>
  );
};

export default App;