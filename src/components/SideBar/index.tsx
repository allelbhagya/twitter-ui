import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import News from '../News';
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
            title="
            Who to follow"
            elements={[
              <FollowSuggestion
                name="X"
                nickname="@X"
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
