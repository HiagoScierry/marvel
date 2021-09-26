import React from 'react';
import { MarvelLogo, MarvelLogoBottom, MarvelLogoTop } from './styles';

const Marvel: React.FC = () => {

  return (
      <MarvelLogo>
        <MarvelLogoTop>MA</MarvelLogoTop>
        <MarvelLogoBottom>REV</MarvelLogoBottom>
        <MarvelLogoBottom>L</MarvelLogoBottom>
      </MarvelLogo>
  );
}

export default Marvel;