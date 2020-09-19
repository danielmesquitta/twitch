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
  Tag,
} from './styles';

import data from './data';

import profilePhoto from '~/assets/profile_photo.png';

const LiveListVertical: React.FC = () => {
  interface ILiveListItemProps {
    data: typeof data[0];
  }

  const LiveListItem: React.FC<ILiveListItemProps> = ({ data }) => (
    <Container>
      <Thumbnail source={data.source} resizeMode="contain" />

      <Body>
        <Main>
          <Header>
            <Avatar source={profilePhoto} />
            <Username numberOfLines={1}>{data.user}</Username>
          </Header>

          <Description numberOfLines={1}>{data.description}</Description>

          <Category numberOfLines={1}>{data.category}</Category>
        </Main>
        <Tags>
          {data.tags.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </Tags>
      </Body>
    </Container>
  );

  return (
    <List horizontal={true}>
      {data.map((item, index) => (
        <LiveListItem key={String(index)} data={item} />
      ))}
    </List>
  );
};

export default LiveListVertical;
