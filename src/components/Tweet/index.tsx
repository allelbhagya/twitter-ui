import React from 'react';

import {
  Container,
  Retweeted,
  RocketSeatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ImageContent2
} from './styles';

const Tweet: React.FC = () => {
  return (
    <div>
<div>
          <Container>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>bhagya</strong>
            <span>@allelbhagya</span>
            <Dot />
            <time>28 June 2023</time>
          </Header>

          <Description>the way every single cs subject feels interesting enough to research the entire internet right before its end-semester exam</Description>
          <Icons>
            <Status>
              <CommentIcon />
              2
            </Status>
            <Status>
              <RetweetIcon />
              1
            </Status>
            <Status>
              <LikeIcon />
              8
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
    </div>
    <div>
    <Container>
{/* <Retweeted>
  <RocketSeatIcon />
  You retweeted
</Retweeted> */}

<Body>
  <Avatar />

  <Content>
    <Header>
      <strong>bhagya</strong>
      <span>@allelbhagya</span>
      <Dot />
      <time>28 June 2023</time>
    </Header>

    <Description>happy happy happyyy</Description>

    <ImageContent />

    <Icons>
      <Status>
        <CommentIcon />
        3
      </Status>
      <Status>
        <RetweetIcon />
        2
      </Status>
      <Status>
        <LikeIcon />
        4
      </Status>
    </Icons>
  </Content>
</Body>
</Container>
</div>
<div>
    <Container>
{/* <Retweeted>
  <RocketSeatIcon />
  You retweeted
</Retweeted> */}

<Body>
  <Avatar />

  <Content>
    <Header>
      <strong>bhagya</strong>
      <span>@allelbhagya</span>
      <Dot />
      <time>28 June 2023</time>
    </Header>

    <Description>ferb, i know what we're gonna do today 🫴🏻</Description>

    <ImageContent2 />

    <Icons>
      <Status>
        <CommentIcon />
        2
      </Status>
      <Status>
        <RetweetIcon />
        
      </Status>
      <Status>
        <LikeIcon />
        20
      </Status>
    </Icons>
  </Content>
</Body>
</Container>
</div>
    </div>
    
  );
};

export default Tweet;
