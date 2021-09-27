import React from 'react';

import { Container, ContainInfo, Title, Description } from './styles';

interface ICard {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<ICard> = ({ title, description, image }) => {
  return (
    <Container src={image}>
      <ContainInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContainInfo>

    </Container>
  );
}

export default Card;