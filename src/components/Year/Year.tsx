import React from 'react';
import { Container } from './Year.styled';

export const Year = () => {
  return (
    <Container>
      <span>Year: {new Date().getFullYear()}</span>
    </Container>
  );
};
