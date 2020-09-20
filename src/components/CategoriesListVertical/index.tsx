import React from 'react';

import {
  List,
  Container,
  Image,
  Data,
  UserName,
  Info,
  Tags,
  Tag,
} from './styles';

import data from './data';

const ChannelsList: React.FC = () => {
  type IItem = typeof data[0];

  interface IChannelsListItemProps {
    item: IItem;
  }

  const ChannelsListItem: React.FC<IChannelsListItemProps> = ({ item }) => {
    return (
      <Container>
        <Image source={item.source} resizeMode="contain" />
        <Data>
          <UserName>{item.name}</UserName>
          <Info>{item.info}</Info>
          <Tags>
            {item.tags.map(tag => (
              <Tag>{tag}</Tag>
            ))}
          </Tags>
        </Data>
      </Container>
    );
  };

  return (
    <List
      data={data}
      keyExtractor={(_, index) => String(index)}
      renderItem={({ item }) => <ChannelsListItem item={item} />}
    />
  );
};

export default ChannelsList;
