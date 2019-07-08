import React from 'react';

import Album from 'components/Album';
import { Container, Title } from './App.styles';

function App() {
  return (
    <Container>
      <Title>
        <h1>Memory Book</h1>
      </Title>
      <Album />
    </Container>
  );
}

export default App;
