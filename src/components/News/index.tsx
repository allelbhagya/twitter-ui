import React from 'react';

import { Container } from './styles';

const News: React.FC = () => {
  return (
    <div>
            <Container>
          <strong>#JujustuKaisen</strong>
          <span>105k Tweets</span>

      </Container>
      <Container>
      <strong>Rs 30</strong>
      <span>Trending in India</span>

  </Container>
  <Container>
      <strong>Oppenheimer </strong>
      <span>Trending in India</span>

  </Container>
  <Container>
      <strong>Barbie</strong>
      <span>205 tweets in the last hour</span>

  </Container>
    </div>

  );
}

export default News;