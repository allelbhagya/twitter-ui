import React from 'react';



import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

import Feed from '../Feed'

const ProfilePage: React.FC = () => {
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
  <span className="colored-text"> @Microsoft </span>
   // cse '24 &  
  <span className="colored-text"> @iitm_bs </span>
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
