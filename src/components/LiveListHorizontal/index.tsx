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

type IItem = typeof data[0];

interface ILiveListItemProps {
  item: IItem;
}

const LiveListVertical: React.FC = () => {
  const LiveListItem: React.FC<ILiveListItemProps> = ({ item }) => (
    <Container>
      <Thumbnail source={item.source} resizeMode="contain" />

      <Body>
        <Main>
          <Header>
            <Avatar source={profilePhoto} />
            <Username numberOfLines={1}>{item.user}</Username>
          </Header>

          <Description numberOfLines={1}>{item.description}</Description>

          <Category numberOfLines={1}>{item.category}</Category>
        </Main>
        <Tags>
          {item.tags.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </Tags>
      </Body>
    </Container>
  );

  return (
    <List
      data={data}
      keyExtractor={(_, index) => String(index)}
      renderItem={({ item }) => <LiveListItem item={item} />}
    />
  );
};

export default LiveListVertical;
