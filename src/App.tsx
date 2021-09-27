import React from 'react';
import SectionProvider from './Context/section';
import Routes from './Routes';
import { GlobalStyle } from './Styles';

function App() {
  return (
    <SectionProvider>
      <Routes />
      <GlobalStyle />
    </SectionProvider>
  );
}

export default App;
