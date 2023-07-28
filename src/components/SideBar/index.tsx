import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import News from '../News';
import Verify from '../Verified';
import FollowSuggestion from '../FollowSuggestion';

import {
  Container,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
        <List
            title="Get Verified"
            elements={[<Verify />]}
          />
          <List
            title="You might like"
            elements={[
              <FollowSuggestion
                name="X"
                nickname="@X"
              />,
              <FollowSuggestion
              name="Microsoft"
              nickname="@Microsoft"
            />,
            <FollowSuggestion
            name="Google"
            nickname="@Google"
          />,
            ]}
          />
          <List
            title="What’s happening"
            elements={[<News />]}
          />

        </Body>
      </StickyBox>
      
    </Container>
  );
};

export default SideBar;
