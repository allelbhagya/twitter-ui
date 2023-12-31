import React from 'react';



import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
  LinkIcon
} from './styles';

import Feed from '../Feed'

const ProfilePage: React.FC = () => {
  const handleClick = () => {

  };
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit profile</EditButton>
        <h1>bhagya</h1>
        <h2>@allelbhagya</h2>

        <p>
        former swe intern
        <a href="https://twitter.com/Microsoft" onClick={handleClick} style={{ textDecoration: 'none' }}>
        <span className="colored-text">@Microsoft</span>
      </a>{' '} 
   // cse '24 &  
   <a href="https://twitter.com/iitm_bs" onClick={handleClick} style={{ textDecoration: 'none' }}>
        <span className="colored-text">@iitm_bs</span>      </a>{' '} 
   '25
</p>


        <ul>
          <li>
            <LocationIcon />
            Raipur, India
          </li>
          <li>
            <CakeIcon />
            Born April 5
          </li>
          <li>
            <LinkIcon />
            <a href="https://github.com/allelbhagya" onClick={handleClick} style={{ textDecoration: 'none' }}>
        <span className="colored-text">https://github.com/allelbhagya</span>      </a>{' '} 
          </li>
        </ul>

        <Followage>
          <span>
          <strong>150 </strong>Following 
          </span>
          <span>
            <strong>719 </strong> Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />

    </Container>
  );
};

export default ProfilePage;
