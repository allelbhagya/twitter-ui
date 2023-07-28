import React from 'react';

import { Container, FollowButton } from './styles';
const Verify: React.FC = () => {
  return (
    <div>
          <div>
    <Container>
                  <strong>Subscribe to unlock new features.</strong>
                  <div style={{ paddingTop: '10px' }}/>    </Container>
    </div>
    <div>
                          <FollowButton>
          <span> <b>Get Verified</b></span>
        </FollowButton>
    </div>  
    </div>





  );
}

export default Verify;