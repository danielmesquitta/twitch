import React from 'react';

import {
  List,
  Container,
  Thumbnail,
  Body,
  Main,
  Header,
  Avatar,
  Username,
  Description,
  Category,
  Tags,
  TagContainer,
  TagText,
} from './styles';

import streamThumbnail from '~/assets/stream_thumbnail.jpg';

const LiveList: React.FC = () => {
  const LiveListItem = () => (
    <Container>
      <Thumbnail source={streamThumbnail} />

      <Body>
        <Main>
          <Header>
            <Avatar />
            <Username numberOfLines={1}>rocketseat_oficial</Username>
          </Header>

          <Description numberOfLines={1}>Front-end com Next.js</Description>

          <Category numberOfLines={1}>Science & Technology</Category>
        </Main>
        <Tags>
          <TagContainer>
            <TagText>Portuguese</TagText>
          </TagContainer>

          <TagContainer>
            <TagText>Mobile Development</TagText>
          </TagContainer>
        </Tags>
      </Body>
    </Container>
  );

  return (
    <List>
      {[0, 1, 2].map(index => (
        <LiveListItem key={index} />
      ))}
    </List>
  );
};

export default LiveList;
