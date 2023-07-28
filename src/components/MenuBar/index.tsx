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
  ProfileData,
  DirectionIcon
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
          <FavoriteIcon />
          <span>Explore</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
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
          <FavoriteIcon />
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
          <DirectionIcon />
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
