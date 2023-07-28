import React from 'react';

import ProfilePage from '../ProfilePage'

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, SearchIcon, HomeIcon, EmailIcon, BellIcon} from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>

              <ProfileInfo>
                    <strong>bhagya</strong>
                    <span>1,853 Tweets</span>
              </ProfileInfo>
          </Header>

          <ProfilePage />

          <BottomMenu>
              <HomeIcon />
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottomMenu>
          
      </Container>
  );
}

export default Main;