import React from 'react';

import Button from '../Button'

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon, 
  ProfileIcon,
  ExitIcon,
  Botside,
  Avatar,
  ProfileData
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Explore</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Notifications</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>
        <MenuButton>
          <ProfileIcon />
          <span>Lists</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Communities</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Verified</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>
        <MenuButton >
          <ProfileIcon />
          <span>More</span>
        </MenuButton>

        <Button>
          <span> <b>Tweet</b></span>
        </Button>

      </Topside>

      <Botside>
          <Avatar />
          <ProfileData>
              <strong>bhagya</strong>
              <span>@allelbhagya</span>
          </ProfileData>

          <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
